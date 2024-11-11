import { useState, useCallback } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { storage, db } from "../../firebaseConfig.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";






export default function useTax() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState(null);
  const { category } = useParams();
  const [product, setProduct] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
 

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    comentario: "",
  });

  // Función para obtener documentos de una colección
  const getDocument = useCallback(async (collectionName) => {
    setLoading(true);
    try {
      const collectionRef = collection(db, collectionName);
      const docs = await getDocs(collectionRef);
      const productData = await Promise.all(
        docs.docs.map(async (doc) => {
          const data = doc.data();
          let imageUrl = null;
          if (data.imageURL) {
            try {
              const cleanedImageURL = data.imageURL.replace(/["']/g, "").trim();
              const imageRef = ref(storage, cleanedImageURL);
              imageUrl = await getDownloadURL(imageRef);
            } catch (error) {
              console.error("Error al obtener la URL de la imagen: ", error);
            }
          }
          return {
            id: doc.id,
            ...data,
            image: imageUrl,
          };
        })
      );
      setProducts(productData);
    } catch (error) {
      console.error("Error al obtener los documentos: ", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Función para obtener un producto por ID
  const getProductById = useCallback(async (collectionName, id) => {
    setLoading(true);
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      let imageUrl = null;
      if (data && data.imageURL) {
        try {
          const cleanedImageURL = data.imageURL.replace(/["']/g, "").trim();
          const imageRef = ref(storage, cleanedImageURL);
          imageUrl = await getDownloadURL(imageRef);
        } catch (error) {
          console.error("Error al obtener la URL de la imagen: ", error);
        }
      }
      setProductDetail({
        id,
        ...data,
        image: imageUrl,
      });
    } catch (error) {
      console.error("Error al obtener el producto: ", error);
      setProductDetail(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // Maneja los cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };






const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    service_id: import.meta.env.VITE_SERVICE_ID,
    template_id: import.meta.env.VITE_TEMPLETE_ID,
    user_id: import.meta.env.VITE_PUBLIC_KEY,
    template_params: formData, 
  };

  try {
    const result = await axios.post('https://api.emailjs.com/api/v1.0/email/send', payload);

    // Manejo de respuesta
    if (result.status === 200 && result.data && result.data.success) {
      setErrorMessage("Email enviado");
      setFormData({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        comentario: "",
      });
      setOpen(false); 
    } else {
      setErrorMessage("Mensaje enviado");
      setOpen(true);
    }
  } catch (error) {
    console.error("Error:", error);
    setErrorMessage("No se pudo enviar el formulario");
    setOpen(true); 
  }
};

const handleClose = () => {
  setOpen(false);  
};

 const getTitle = () => {
    if (category && category.toLowerCase() === "Servicio".toLowerCase()) {
      return "Servicios";
    } else if (
      category &&
      category.toLowerCase() === "Productos".toLowerCase()
    ) {
      return "Relojes";
    }
  };

  async function fetchProduct() {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  const formatDescription = (description) => {
    return description.split(" -").filter((line) => line.trim() !== "");
  };
  


  
  
const initializeMap = (container) => {
  // Asegúrate de tener el token de acceso correcto
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

  // Declarar newMap correctamente
  const newMap = new mapboxgl.Map({
    container,  // Refiere al contenedor del mapa
    style: 'mapbox://styles/mapbox/streets-v11',  // Estilo del mapa
    center: [-58.4165, -34.6375],  // Ubicación inicial del mapa
    zoom: 15,  // Nivel de zoom inicial
  });

  // Cuando el mapa esté cargado, agregar el marcador
  newMap.on('load', () => {
    new mapboxgl.Marker()
      .setLngLat([-58.4165, -34.6375])  // Coordenadas del marcador
      .setPopup(new mapboxgl.Popup().setText("Ubicación"))
      .addTo(newMap);  // Agregar el marcador al mapa
  });

 
  return newMap;
};

 
  return {
    products,
    getDocument,
    loading,
    formData,
    handleChange,
    handleSubmit,
    getProductById,
    productDetail,
    getTitle,
    category,
    fetchProduct,
    product,
    formatDescription,
    initializeMap,
    errorMessage, 
    handleClose,
    open,
  };
}


