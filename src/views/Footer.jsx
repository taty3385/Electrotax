

import React from 'react';
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Visa from '../assets/visa.png';
import Mastercard from '../assets/mastercard.png';
import MercadoPago from '../assets/mercadopago.png';
import Cencosud from '../assets/cencosud.png';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(255, 243, 43)",
        width: '100%',
        maxWidth: "100vw",
        textAlign: 'center',
        overflow: 'hidden',
       
      }}
    >
      <Grid container spacing={2} sx={{ width: '100%', margin: '0 auto' }}>
  
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' ,color:"black" } }}>
            Navegación
          </Typography>
          <Box sx={{ marginBottom: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem',color: "black" } }}>
                Home
              </Typography>
            </Link>
          </Box>
          <Box sx={{ marginBottom: 1 }}>
            <Link to="/category/Productos" style={{ textDecoration: 'none', color: "black" }}>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                Productos
              </Typography>
            </Link>
          </Box>
          <Box sx={{ marginBottom: 1 }}>
            <Link to="/category/Servicio" style={{ textDecoration: 'none',  color: "black"}}>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                Servicios
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/contacto" style={{ textDecoration: 'none',  color: "black" }}>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                Contacto
              </Typography>
            </Link>
          </Box>
        </Grid>
        
        {/* Segunda columna: Redes sociales */}
        <Grid item xs={12} sm={3} md={3}>
          <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem', color: "black" } }}>
            Seguinos
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton href="https://www.facebook.com/electrotaxarg/?locale=ms_MY&paipv=0&eav=AfawpWUm-lOaCz1k4QEKIou2bJ_KmGoqvDxGT6aOaJVctSp5fY9x3J4z1Epv_IZZ4FQ&_rdr" target="_blank" color="inherit">
              <FacebookIcon sx={{ color: "blue" }} />
            </IconButton>
            <IconButton href="https://www.instagram.com/electrotax.relojeria/" target="_blank" color="inherit">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
        
       
        <Grid item xs={12} sm={4} md={4}>
          <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem',color: "black" } }}>
            Servicio al cliente
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' ,color: "black"} }}>
            Dirección: Av. Chiclana 3715, C1262AAB Cdad. Autónoma de Buenos Aires
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem',color: "black" } }}>
            Teléfono: (+54 9) 11 2354-3337
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem',color: "black" } }}>
            Email: electrotax@live.com.ar
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem',color: "black" } }}>
            Horario: Lunes a Viernes, 9:00 AM - 7:00 PM
          </Typography>
        </Grid>

    
        <Grid item xs={12} sm={3} md={3}>
          <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem', color: "black" } }}>
            Medios de pago
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <img src={Visa} alt="Visa" style={{ width: 40, height: 40 }} />
            <img src={Mastercard} alt="Mastercard" style={{ width: 40, height: 40 }} />
            <img src={MercadoPago} alt="Mercado Pago" style={{ width: 40, height: 40 }} />
            <img src={Cencosud} alt="Cencosud" style={{ width: 40, height: 40 }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}