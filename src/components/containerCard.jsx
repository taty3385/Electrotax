import React, { useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import Cards from "./Cards";
import useTax from "../hooks/useTax";
import WhatSapp from "../views/whatSapp";

export default function ContainerCard() {
  const { products, getDocument, loading, category, getTitle } = useTax();

  useEffect(() => {
    if (category) {
      getDocument(category);
    }
  }, [category, getDocument]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        paddingBottom: "50px",
        backgroundColor: "#555a5a",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "50px",
            height: "2px",
            backgroundColor: "yellow",
          }}
        />
        <Typography variant="h4" sx={{ textAlign: "center", mb: "10px" ,color:"white" }}>
          {getTitle()}
        </Typography>
        <Box
          sx={{
            width: "50px",
            height: "2px",
            backgroundColor: "yellow",
          }}
        />
      </Box>

      <Box
        sx={{
          flex: "1 0 auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          padding: 2,

          "@media (max-width: 567px)": {
            flexDirection: "column",
          },
        }}
      >
        {loading ? (
          <CircularProgress
            sx={{ margin: "auto", display: "block", color: "yellow" }}
          />
        ) : products.length > 0 ? (
          products.map((item) => (
            <Cards
              key={item.id}
              id={item.id}
              image={item.image}
              nombre={item.nombre}
              precio={item.precio}
              descripcion={item.descripcion}
              collectionName={category}
            />
          ))
        ) : (
          <Typography variant="h6">No se encontraron productos</Typography>
        )}
      </Box>
      <Box
        sx={{
          backgroundColor: "#555a5a", 
          width: "100%",
          padding: "20px 0", 
        }}
      >
        <WhatSapp />
      </Box>
    </Box>
  );
}
