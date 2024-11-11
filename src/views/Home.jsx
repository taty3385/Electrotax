import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Slider from "react-slick";
import Honda from "../assets/Honda.png";
import MercedesBenz from "../assets/MercedesBenz.png";
import Peugeot from "../assets/peugeot.png";
import Renault from "../assets/Renault.png";
import Toyota from "../assets/Toyota.png";
import Volkswagen from "../assets/volkswagen.png";
import CarruselPlay from "./CarruselPlay";
import WhatSapp from "./whatSapp";
import taller from "../assets/tallerMecanico.jpg";
import StarRatings from "react-star-ratings";
import { TbAirConditioning } from "react-icons/tb";
import { FaCarBattery, FaCar, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const Img = [Honda, MercedesBenz, Peugeot, Renault, Toyota, Volkswagen];
  const [showAll, setShowAll] = useState(false);

  const comments = [
    {
      text: "Excelente servicio, el equipo es muy profesional y eficiente. Recomiendo ampliamente.",
      author: "- Juan Pérez",
      rating: 5,
    },
    {
      text: "Es un cordero de Dios. Fui a pedir un fusible para el reloj y me pidió que le dé a voluntad. También soluciono un problema de la ticketera. Lindo viejo.",
      author: "- Roberto Grecco",
      rating: 4,
    },
    {
      text: "Muy buena atención, rápido y económico, saben lo que hacen, el reloj tenía un diodo quemado y soluciono enseguida el problema.",
      author: "- Guillermo Di Iorio",
      rating: 5,
    },
    {
      text: "Buena atención Sr. Daniel (es el relojero) muy buena onda,arregla los relojes al toque, los deja 10puntos! Buenos precios y buena gente!",
      author: "- Oleksandr Sidenko",
      rating: 5,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ height: "100%" }}>
      <CarruselPlay />

      <Box
        sx={{
          backgroundColor: "rgb(255, 243, 43)",
          width: "100%",

          height: "50%",
          display: "flex",
          justifyContent: { xs: "center", sm: "space-around" },
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          padding: "1rem 0",
          marginTop: "1rem",
          color: "black",
          clipPath: {
            xs: "none",
            sm: "polygon(0 0, 100% 0, 97% 100%, 0% 100%)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            margin: { xs: "0.5rem 0", sm: "0" },
          }}
        >
          <TbAirConditioning size={30} />
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
          >
            Aire acondicionado
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            margin: { xs: "0.5rem 0", sm: "0" },
          }}
        >
          <FaCarBattery size={30} />
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
          >
            Reparación de iluminación y batería
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            margin: { xs: "0.5rem 0", sm: "0" },
          }}
        >
          <FaCar size={30} />
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
          >
            Diagnóstico y reparación automotriz
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          gap: "2rem",
          marginTop: "2rem",
          width: "100%",
        }}
      >
        <Box sx={{ width: { xs: "90%", sm: "45%" } }}>
          <CardMedia
            component="img"
            width="100%"
            height="450"
            image={taller}
            alt="Taller"
          />
        </Box>
        <Box sx={{ width: { xs: "90%", sm: "45%", paddingRigth: "5px" } }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              marginBottom: "1rem",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            Sobre nosotros
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem" },
              lineHeight: { xs: "1.4", sm: "1.6" },
            }}
          >
            Bienvenido a nuestro taller de mecánica y electricidad, donde la
            pasión por los autos y el compromiso con la excelencia se unen para
            brindarte el mejor servicio posible. Con años de experiencia en el
            sector automotriz, nos especializamos en reparaciones integrales de
            vehículos y en la instalación de sistemas de aire acondicionado para
            todo tipo de autos. Nuestro equipo de técnicos altamente capacitados
            y certificados se dedica a ofrecer soluciones rápidas, efectivas y a
            precios competitivos. Ya sea que tu vehículo necesite una reparación
            compleja o un simple mantenimiento, estamos aquí para ayudarte con
            una atención personalizada y un enfoque detallado en cada trabajo
            que realizamos. Nos enorgullece utilizar tecnología avanzada y
            herramientas de diagnóstico de última generación para asegurarnos de
            que cada reparación se realice de manera eficiente y precisa.
            Además, contamos con una amplia gama de repuestos y accesorios de
            alta calidad para garantizar la durabilidad y el rendimiento de tu
            vehículo. En nuestro taller, la satisfacción del cliente es nuestra
            prioridad. Nos esforzamos por crear una relación de confianza con
            cada uno de nuestros clientes, ofreciendo transparencia en nuestros
            procesos y explicaciones claras sobre las necesidades y el estado de
            sus vehículos. Ven y descubre por qué somos el taller de mecánica y
            electricidad preferido por tantos conductores. Te invitamos a
            visitar nuestras instalaciones y a experimentar el servicio
            excepcional que nos distingue. Estamos aquí para mantener tu
            vehículo en las mejores condiciones y asegurarte un viaje seguro y
            confortable.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "2rem",
          textAlign: "center",
          backgroundColor: "rgb(255, 243, 43)",
          width: "100%",
        }}
      >
        <Typography
          color="black"
          variant="h5"
          gutterBottom
          sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, pt: "1rem" }} // Agrega margen superior aquí
        >
          Las marcas que trabajamos
        </Typography>

        <Box sx={{ padding: "1rem", width: "95vw" }}>
          <Slider {...settings}>
            {Img.map((imagen, index) => (
              <Box
                key={index}
                sx={{
                  padding: "10px",
                  backgroundColor: "transparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={imagen}
                  alt={`Logo ${index}`}
                  sx={{ height: "100px", objectFit: "contain" }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      <Box sx={{ marginTop: "2rem", textAlign: "center", width: "100%" }}>
        <Typography
          color="white"
          variant="h5"
          gutterBottom
          sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, pt:"0.5rem",pb:"1rem" }}
        >
          Lo que dicen nuestros clientes
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {comments
            .slice(0, showAll ? comments.length : 3)
            .map((comment, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: "45%", md: "30%" },

                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  textAlign: "center",
                }}
              >
                <StarRatings
                  rating={comment.rating}
                  starRatedColor="gold"
                  starEmptyColor="gray"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="5px"
                />
                <Typography
                  sx={{
                    marginBottom: "1rem",
                    marginTop: "1rem",
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                  }}
                >
                  "{comment.text}"
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                  }}
                >
                  {comment.author}
                </Typography>
              </Box>
            ))}
        </Box>
        {comments.length > 3 && (
          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                marginBottom: "30px",
                marginTop:"10px"
              }}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Mostrar menos" : "Mostrar más"}
              <FaArrowRight
                size={20}
                style={{
                  marginLeft: "8px",
                  transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </Typography>
          </Box>
        )}
      </Box>

      <WhatSapp sx={{ position: "absolute", left: "10px", bottom: "20px" }} />
    </Box>
  );
}
