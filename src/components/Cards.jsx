import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cards({ image, nombre, id, collectionName }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${collectionName}/${id}`);
  };

  const isServiceCategory = collectionName === "Servicio";
  const isProductCategory = collectionName === "Productos";

  return (
    <Card
      sx={{
        width: {
          xs: "90%", 
          sm: isServiceCategory ? "80%" : "40%",
        },
        height: isServiceCategory ? "30vh" : "auto",
        cursor: "pointer",
        margin: "0 auto",
        mb:"10px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        "&:hover .MuiCardMedia-root": {
          transform: "scale(1.1)",
          transition: "transform 0.3s ease-in-out",
        },
      }}
      onClick={handleClick}
    >
      <CardMedia
        component="img"
        height="100%"
        image={
          image ||
          "https://via.placeholder.com/300x140.png?text=Image+Not+Available"
        }
        alt={nombre}
        sx={{
          objectFit: "cover",
          position: "relative",
          zIndex: 1,
          filter: isServiceCategory ? "brightness(50%)" : "none",
        }}
      />
      {isServiceCategory && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 2,
          }}
        />
      )}
      <CardContent
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isServiceCategory ? "transparent" : "none",
          color: isServiceCategory ? "white" : "initial",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 3,
          padding: 0, 
        }}
      >
        {isProductCategory && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />
        )}
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            position: "relative", 
            zIndex: 4, 
            color: "white",
            padding: "16px", 
            fontFamily: "'Oswald', sans-serif"
          }}
        >
          {nombre}
        </Typography>
      </CardContent>
    </Card>
  );
}

