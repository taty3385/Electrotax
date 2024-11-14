import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Form from "../components/Form";
import useTax from "../hooks/useTax";
import WhatSapp from "../views/whatSapp";
import manoMecanico from "../assets/manosMecanica.jpg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function AboutUs() {
  const { formData, handleChange, handleSubmit,textColor } = useTax();

  return (
    <Box sx={{ color: "black", width: "100%" }}>
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
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={11} md={5}>
            <Paper
              sx={{
                padding: "1.5rem",
                borderRadius: "15px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f9f9f9",
                width: "90%",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: "15px",
                  fontSize: "1.7rem",
                }}
              >
                En Electotax
              </Typography>
              <Typography sx={{ marginBottom: "1rem" }}>
                Somos un taller mecánico con 30 años de experiencia y dedicación
                en la reparación y mantenimiento de automóviles...
              </Typography>
              <Typography>
                Nuestra misión es proporcionar a nuestros clientes soluciones
                confiables y eficaces para sus vehículos...
              </Typography>
            </Paper>

            <img
              src={manoMecanico}
              alt="Taller Mecánico"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                paddingTop: "30px",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                padding: "1.5rem",
                borderRadius: "15px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f9f9f9",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Centra el contenido horizontalmente
                justifyContent: "center", // Centra el contenido verticalmente
                width: "80%", // Ajuste de ancho para móviles
                margin: "0 auto", // Centra el Paper en la pantalla
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1.7rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: "15px",
                }}
              >
                Nuestros Servicios
              </Typography>
              <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                <Grid item xs={11} md={4}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Reparación de Automóviles
                  </Typography>
                  <List sx={{ paddingLeft: 0 }}>
                    {[
                      "Diagnóstico y reparación automotrices",
                      "Mantenimiento preventivo y correctivo",
                      "Reparación de sistemas de frenos y suspensión",
                      "Baterías",
                    ].map((text, index) => (
                      <ListItem key={index} sx={{ paddingLeft: 0 }}>
                        <FiberManualRecordIcon
                          sx={{
                            fontSize: "0.9rem",
                            paddingRight: "5px",
                            color: "yellow",
                          }}
                        />
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={11} md={4}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Instalación de Aire Acondicionado
                  </Typography>
                  <List sx={{ paddingLeft: 0 }}>
                    {[
                      "Instalación y reparación de sistemas de aire acondicionado",
                      "Recarga de gas refrigerante",
                      "Diagnóstico de sistemas de climatización",
                      "Mantenimiento de aire acondicionado para una mejor eficiencia",
                    ].map((text, index) => (
                      <ListItem key={index} sx={{ paddingLeft: 0 }}>
                        <FiberManualRecordIcon
                          sx={{
                            fontSize: "0.9rem",
                            paddingRight: "5px",
                            color: "yellow",
                          }}
                        />
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Servicios de Electricidad Automotriz
                  </Typography>
                  <List sx={{ paddingLeft: 0 }}>
                    {[
                      "Reparación de sistemas eléctricos",
                      "Diagnóstico y solución de problemas eléctricos",
                      "Reparación de sistemas de iluminación y batería",
                    ].map((text, index) => (
                      <ListItem key={index} sx={{ paddingLeft: 0 }}>
                        <FiberManualRecordIcon
                          sx={{
                            fontSize: "0.9rem",
                            paddingRight: "5px",
                            color: "yellow",
                          }}
                        />
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          marginTop: "4rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "yellow",
            color: "black",
            width: { md: "100% ", xs: "85%" },
            padding: "1rem 2rem",
            textAlign: "center",
            marginBottom: "2rem",
            borderRadius: "8px",
            maxWidth: "900px",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h4">
            COMPLETA EL FORMULARIO Y DEJANOS TUS DATOS. El equipo de atención al
            cliente se pondrá en contacto en el plazo de 24 hs.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { md: "100% ", xs: "90%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { md: "100% ", xs: "90%" },
              maxWidth: "800px",
              padding: "0 2rem",
              boxSizing: "border-box",
            }}
          >
            <Form
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              textColor={textColor}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ marginTop: "4rem" }}>
        <WhatSapp />
      </Box>
    </Box>
  );
}
