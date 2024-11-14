import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import useTax from "../hooks/useTax";
import WhatSapp from "../views/whatSapp";
import Form from "../components/Form";

import manoMecanico from "../assets/manosMecanica.jpg";

const Contact = () => {
  const { formData, handleChange, handleSubmit, initializeMap } = useTax();
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapContainer.current && !map) {
      const newMap = initializeMap(mapContainer.current);
      setMap(newMap);
    }
  }, [map, initializeMap]);

  return (
    <Box
      sx={{
        minWidth: "98vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "200px",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${manoMecanico})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          clipPath: "ellipse(70% 80% at 50% 50%)",
          marginBottom: "2rem",
          width: "100% ",
          padding: 0,
        }}
      >
        <Typography
          sx={{
            fontSize: "2.5rem",
            textAlign: "center",
            color: "white",
            padding: "1rem",
            borderRadius: "10px",
            background: "rgba(0, 0, 0, 0.5)",
          }}
        >
          Quiénes Somos
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          marginBottom: 4,
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        {[
          {
            icon: <FaEnvelope size={24} />,
            label: "Email",
            value: "electrotax@live.com.ar",
            link: "mailto:electrotax@live.com.ar",
          },
          {
            icon: <FaPhone size={24} />,
            label: "Teléfono",
            value: "11 2354-3337",
            link: "https://wa.me/+5491123543337",
          },
          {
            icon: <FaMapMarkerAlt size={24} />,
            label: "Ubicación",
            value: "Av. Chiclana 3715, C1262AAB Cdad. Autónoma de Buenos Aires",
            link: "https://www.google.com/maps/search/?api=1&query=Av.+Chiclana+3715,+C1262AAB+Cd.+Aut%C3%B3noma+de+Buenos+Aires",
          },
        ].map((contact, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 2,
              borderRadius: 2,
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f9f9f9",
              width: "100%",
            }}
          >
            {/* Ícono al lado del label */}
            <Box sx={{ marginRight: 2, color: "black" }}>{contact.icon}</Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                sx={{ color: "black", textAlign: "left" }}
              >
                {contact.label}:
              </Typography>
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black", textDecoration: "none" }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "black", textAlign: "left" }}
                >
                  {contact.value}
                </Typography>
              </a>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 4,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "80%", sm: "50%" },
            margin: { xs: "0 auto", sm: 0 },
            marginLeft: { sm: "20px" },
          }}
        >
          <Form
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Box>
      
        <Box
          sx={{
            width: { xs: "90%", sm: "50%" },
            margin: { xs: "0 auto", sm: 0 }, 
           

          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Ubicación
          </Typography>
          <div
            ref={mapContainer}
            style={{
              width: "100%", 
              height: 400,
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
      <Box sx={{ marginTop: 8 }}>
        <WhatSapp />
      </Box>
    </Box>
  );
};

export default Contact;
