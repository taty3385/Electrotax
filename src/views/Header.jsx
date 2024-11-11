

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { FaCar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  // Define the paths for navigation
  const homePath = "/";
  const aboutUsPath = "/aboutus";
  const servicesPath = "/category/Servicio";
  const productsPath = "/category/Productos";
  const contactPath = "/contacto";

  const handleMenuItemClick = (path) => {
    navigate(path);
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: "100% ",
        height: "130px",
        backgroundColor: "rgb(255, 243, 43)",
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            textAlign: "center",
            paddingBottom: "3px", 
            width: "100%", 
   
          }}
          onClick={() => navigate("/")}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FaCar
              size={30}
              style={{
                marginRight: "10px", 
                color: "black",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
                fontSize: { xs: "1.2rem", md: "1.6rem" },
              }}
            >
              Electrotax
            </Typography>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: "black",
              fontSize: { xs: "0.8rem", md: "1rem" },
            }}
          >
            Relojería de taxi/ Mecanica gral.
          </Typography>
        </Box>

        {/* Menu section */}
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(e) => setAnchorElNav(e.currentTarget)}
              color="inherit"
              sx={{
                marginRight: { xs: "auto", md: 0 }, 
                justifyContent: { md: "flex-end" }, 
              }}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
                width: "60vw",
                height: { sm: "90vh", xs: "80vh" },
                "& .MuiPaper-root": {
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  bgcolor: "rgba(255, 255, 0, 0.7)",
                },
                "& .MuiMenuItem-root": {
                  color: "black",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  width: "100%",
                  padding: "15px",
                  borderBottom: "1px solid white",
                  "&:last-child": {
                    borderBottom: "none",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                  },
                },
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick(homePath)}>
                Home
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(aboutUsPath)}>
                Quienes somos
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(servicesPath)}>
                Servicios
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(productsPath)}>
                Productos
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(contactPath)}>
                Contacto
              </MenuItem>
            </Menu>
          </Box>

          {/* Menu Buttons for Desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => handleMenuItemClick(homePath)}
              sx={{
                paddingLeft: "8px",
                color: "black",
                display: "block",
                textDecoration: "none",
                position: "relative",
                fontSize: { xs: "0.8rem", md: "1rem" },
                "&:hover": {
                  color: "white",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -5,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "black",
                    transition: "width 0.3s ease-in-out",
                  },
                },
              }}
            >
              Home
            </Button>
            <Button
              onClick={() => handleMenuItemClick(aboutUsPath)}
              sx={{
                paddingLeft: "8px",
                color: "black",
                display: "block",
                textDecoration: "none",
                position: "relative",
                fontSize: { xs: "0.8rem", md: "1rem" },
                "&:hover": {
                  color: "white",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -5,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "black",
                    transition: "width 0.3s ease-in-out",
                  },
                },
              }}
            >
              Quienes somos
            </Button>
            <Button
              onClick={() => handleMenuItemClick(servicesPath)}
              sx={{
                paddingLeft: "8px",
                color: "black",
                display: "block",
                textDecoration: "none",
                position: "relative",
                fontSize: { xs: "0.8rem", md: "1rem" },
                "&:hover": {
                  color: "white",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -5,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "black",
                    transition: "width 0.3s ease-in-out",
                  },
                },
              }}
            >
              Servicios
            </Button>
            <Button
              onClick={() => handleMenuItemClick(productsPath)}
              sx={{
                paddingLeft: "8px",
                color: "black",
                display: "block",
                textDecoration: "none",
                position: "relative",
                fontSize: { xs: "0.8rem", md: "1rem" },
                "&:hover": {
                  color: "white",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -5,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "black",
                    transition: "width 0.3s ease-in-out",
                  },
                },
              }}
            >
              Productos
            </Button>
            <Button
              onClick={() => handleMenuItemClick(contactPath)}
              sx={{
                paddingLeft: "8px",
                color: "black",
                display: "block",
                textDecoration: "none",
                position: "relative",
                fontSize: { xs: "0.8rem", md: "1rem" },
                "&:hover": {
                  color: "white",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -5,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "black",
                    transition: "width 0.3s ease-in-out",
                  },
                },
              }}
            >
              Contacto
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
