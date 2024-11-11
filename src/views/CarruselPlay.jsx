
import { Box, Button, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import electricidad from "../assets/electricidad.jpg";
import aireAcondicionado from "../assets/aireAcondicionado.jpg";
import limpiaInjectores from "../assets/limpia inyectores.jpg";

export default function CarruselPlay() {
  const imagenes = [aireAcondicionado, limpiaInjectores, electricidad];
  const whatsappLink = "https://wa.me/541123543337";

  return (
    <Box sx={{ height: "70vh", width: "100%", maxWidth: "100vw" }}>
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000} showIndicators={false} r >
        {imagenes.map((imagen, index) => (
          <Box key={index} sx={{ position: 'relative', height: "70vh" }}>
            <img src={imagen} alt={`Imagen ${index}`} style={{ height: "100%", width: "100%", objectFit: 'cover' }} />
            {index === 0 && ( 
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#fff',
                  textAlign: 'center',
                  padding: 2,
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Electrotax
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Reserva tu turno
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgb(255, 243, 43)",
                    color: 'black',
                    '&:hover': {
                      backgroundColor: 'darkorange', 
                    },
                    padding: '0.75rem 1.5rem',
                  }}
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctanos 
                </Button>
              </Box>
            )}
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}