import {
    LocalOffer as LocalOfferIcon,
    Search as SearchIcon,
    ShoppingCart as ShoppingCartIcon,
    SportsEsports as SportsEsportsIcon,
    Support as SupportIcon,
  } from "@mui/icons-material";
  import {
    AppBar,
    Badge,
    Box,
    IconButton,
    InputBase,
    MenuItem,
    Toolbar,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  export const Header = () => {
    return (
      <AppBar
        position="static"
        sx={{ backgroundColor: "#1d2631", borderBottom: "1px solid #1d2631" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg"
              alt="Steam logo"
              style={{ width: 52, height: 51 }}
            />
            <Typography
              variant="h6"
              sx={{
                ml: 2,
                fontFamily: "'Open Sans', Helvetica",
                fontWeight: "normal",
                color: "white",
              }}
            >
              STEAM VERMELHA
            </Typography>
          </Box>
  
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MenuItem>
              <SportsEsportsIcon sx={{ color: "white" }} />
              <Typography variant="body1" sx={{ ml: 1, color: "white" }}>
                Jogos
              </Typography>
            </MenuItem>
            <MenuItem>
              <SupportIcon sx={{ color: "white" }} />
              <Typography variant="body1" sx={{ ml: 1, color: "white" }}>
                Suporte
              </Typography>
            </MenuItem>
            <MenuItem>
              <LocalOfferIcon sx={{ color: "white" }} />
              <Typography variant="body1" sx={{ ml: 1, color: "white" }}>
                Ofertas
              </Typography>
            </MenuItem>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 1,
                ml: 2,
              }}
            >
              <InputBase placeholder="Buscar" sx={{ ml: 1, flex: 1 }} />
              <IconButton type="submit" sx={{ p: 1 }}>
                <SearchIcon />
              </IconButton>
            </Box>
          </Box>
  
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              aria-label="show 0 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Typography variant="body1" sx={{ ml: 1, color: "white" }}>
              Entrar
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;
  