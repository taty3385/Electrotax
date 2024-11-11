
import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useTax from '../hooks/useTax'; 

export default function ProductDetail() {
  const { id } = useParams();
  const [fetchProduct,product]=useTax()

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.nombre}</h1>
      <img src={product.image} alt={product.nombre} />
      <p>{product.descripcion}</p>
      <p>{product.precio}</p>
    </div>
  );
}
