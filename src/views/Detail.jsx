import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useParams } from "react-router-dom";
import useTax from "../hooks/useTax";
import WhatSapp from "./whatSapp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Form from "../components/Form";
import arranque from "../assets/arranque.jpg";
import alternador from "../assets/alternador.jpg";
import alternador2 from "../assets/alternador2.jpg";

export default function Detail() {
  const { id } = useParams();
  const {
    getProductById,
    productDetail,
    loading,
    handleChange,
    formData,
    handleSubmit,
    formatDescription,
    collectionName,
    textColor,
    backgroundImage,
    isServiceCategory,
    isElectricidadAutomotor
  } = useTax();

  useEffect(() => {
    getProductById(collectionName, id);
  }, [id, collectionName, getProductById]);

  

  return (
    <Box
      sx={{
        backgroundColor: "rgba(98, 104, 104, 0.8)",

        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "98vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <CircularProgress sx={{ color: "yellow" }} />
        </Box>
      ) : !productDetail ? (
        <Typography variant="h6" sx={{ color: "#fff" }}>
          Producto no encontrado
        </Typography>
      ) : (
        <>
          <Card
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
                justifyContent: "center",
              },

              backgroundColor: "rgba(0, 0, 0, 0.5)",
              boxShadow: 3,
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              width: { md: "100% ", xs: "90%" },
            }}
          >
            <Box
              sx={{
                flex: {
                  xs: "none",
                  sm: 1,
                },
                height: {
                  xs: "300px",
                  sm: "400px",
                },
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: {
                  xs: "12px 12px 0 0",
                  sm: "12px 0 0 12px",
                },
                opacity: 0.8,
                marginTop: "45px",
              }}
            />
            <CardContent
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 5,
                position: "relative",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center", color: "#fff" }}
              >
                {productDetail.nombre}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#fff", textalign: "left", width: "100%" }}
              >
                Descripción
              </Typography>
              {!isServiceCategory ? (
                <List sx={{ width: "100%", color: "#fff" }}>
                  {productDetail.descripcion
                    ? formatDescription(productDetail.descripcion).map(
                        (line, index) => (
                          <ListItem
                            key={index}
                            sx={{
                              display: "list-item",
                              paddingLeft: "16px",
                              marginBottom: 0.5,
                              padding: 0,
                            }}
                          >
                            <ListItemText
                              primary={`- ${line.trim()}`}
                              sx={{ color: "#fff" }}
                            />
                          </ListItem>
                        )
                      )
                    : "Descripción no disponible"}
                </List>
              ) : (
                <Typography variant="body2" color="#fff">
                  {productDetail.descripcion || "Descripción no disponible"}
                </Typography>
              )}
              {!isServiceCategory && (
                <>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ marginTop: 2, color: "#fff" }}
                  >
                    Dimensiones
                  </Typography>
                  <Typography variant="body2" color="#fff">
                    {productDetail.dimenciones || "Dimensiones no disponibles"}
                  </Typography>
                </>
              )}
              {productDetail.tareas && (
                <Box sx={{ marginTop: 2, width: "100%" }}>
                  {productDetail.tareas.split(" -").map((tarea, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 1,
                      }}
                    >
                      <CheckCircleIcon sx={{ color: "red", marginRight: 1 }} />
                      <Typography variant="body2" color="#fff">
                        {tarea.trim()}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </CardContent>
          </Card>

          {isElectricidadAutomotor && (
            <Box
              sx={{ display: "flex", justifyContent: "start", width: "100vw" }}
            >
              <Box
                sx={{
                  marginTop: 4,
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    width: "33%",
                  }}
                >
                  <img
                    src={arranque}
                    alt="Imagen grande"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "66%",
                    gap: "1rem",
                  }}
                >
                  {/* Imagen pequeña 1 */}
                  <Box
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "8px",
                      overflow: "hidden",
                      width: "50%",
                    }}
                  >
                    <img
                      src={alternador}
                      alt="Imagen pequeña 1"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  {/* Imagen pequeña 2 */}
                  <Box
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "8px",
                      overflow: "hidden",
                      width: "50%",
                    }}
                  >
                    <img
                      src={alternador2}
                      alt="Imagen pequeña 2"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {!loading && productDetail && (
            <Box
              sx={{
                width: "100%",
                marginTop: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "yellow",
                  color: "black",
                  width: { md: "100% ", xs: "80%" },
                  padding: "1rem 2rem",
                  textAlign: "center",
                  marginBottom: "2rem",
                  borderRadius: "8px",
                  maxWidth: "1200px",
                  boxSizing: "border-box",
                }}
              >
                <Typography variant="h4">
                  COMPLETA EL FORMULARIO Y DEJANOS TUS DATOS. El equipo de
                  atención al cliente se pondrá en contacto en el plazo de 24
                  hs.
                </Typography>
              </Box>
              <Card
                sx={{
                  maxWidth: 600,
                  width: { md: "100% ", xs: "80%" },
                  padding: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  borderRadius: "12px",
                  boxShadow: 3,
                  marginBottom: "30px",
                }}
              >
                <Form
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  isDetailPage={true}
                  textColor={textColor}
                />
              </Card>
            </Box>
          )}

          <WhatSapp />
        </>
      )}
    </Box>
  );
}
