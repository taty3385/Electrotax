import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import useTax from "../hooks/useTax";

const Form = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    errorMessage,
    handleClose,
    open,
  } = useTax();

  return (
    <Box>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ color: "white" }}
      >
        Formulario de Contacto
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Nombre"
            name="nombre"
            value={formData ? formData.nombre : ""}
            onChange={handleChange}
            variant="outlined"
            required
            sx={{
              backgroundColor: "#f0f0f0",
              "& .MuiInputBase-input": {
                color: "#333",
              },
              "& .MuiInputLabel-root": {
                color: "#666",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#aaa",
                },
                "&:hover fieldset": {
                  borderColor: "#888",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#555",
                },
              },
            }}
          />
          <TextField
            label="Apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            variant="outlined"
            required
            sx={{
              backgroundColor: "#f0f0f0",
              "& .MuiInputBase-input": {
                color: "#333",
              },
              "& .MuiInputLabel-root": {
                color: "#666",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#aaa",
                },
                "&:hover fieldset": {
                  borderColor: "#888",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#555",
                },
              },
            }}
          />
          <TextField
            label="Teléfono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            variant="outlined"
            required
            sx={{
              backgroundColor: "#f0f0f0",
              "& .MuiInputBase-input": {
                color: "#333",
              },
              "& .MuiInputLabel-root": {
                color: "#666",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#aaa",
                },
                "&:hover fieldset": {
                  borderColor: "#888",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#555",
                },
              },
            }}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            type="email"
            required
            sx={{
              backgroundColor: "#f0f0f0",
              "& .MuiInputBase-input": {
                color: "#333",
              },
              "& .MuiInputLabel-root": {
                color: "#666",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#aaa",
                },
                "&:hover fieldset": {
                  borderColor: "#888",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#555",
                },
              },
            }}
          />
          <TextField
            label="Comentario"
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={4}
            sx={{
              backgroundColor: "#f0f0f0",
              "& .MuiInputBase-input": {
                color: "#333",
              },
              "& .MuiInputLabel-root": {
                color: "#666",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#aaa",
                },
                "&:hover fieldset": {
                  borderColor: "#888",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#555",
                },
              },
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "yellow",
                padding: "7px 10px",
                fontSize: "0.75rem",
                width: "fit-content",
                minWidth: "150px",
                color:"black"
              }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </form>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="error-dialog-title"
      >
        <DialogTitle id="error-dialog-title">Aviso</DialogTitle>
        <DialogContent>
          <Typography>{errorMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Form;
