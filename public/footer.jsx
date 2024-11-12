import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DiscordIcon from "@mui/icons-material/Discord";
import FacebookIcon from "@mui/icons-material/Facebook";
import FlagIcon from "@mui/icons-material/Flag";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import LinkIcon from "@mui/icons-material/Link"; // Placeholder for the link icon
import TikTokIcon from "@mui/icons-material/TikTok";
import TwitchIcon from "@mui/icons-material/Twitch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "collection-1-color",
        padding: "46px 0",
      }}
    >
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={6} md={3}>
          <Typography variant="h6" color="white" fontWeight="bold">
            Seguir a Steam Vermelha
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit">
              <YouTubeIcon />
            </IconButton>
            <IconButton color="inherit">
              <TwitchIcon />
            </IconButton>
            <IconButton color="inherit">
              <DiscordIcon />
            </IconButton>
            <IconButton color="inherit">
              <TikTokIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h6" color="white" fontWeight="bold">
            Institucional
          </Typography>
          <Typography variant="body2" color="#96a6b7" mt={1}>
            Sobre
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h6" color="white" fontWeight="bold">
            Ajuda
          </Typography>
          <Typography variant="body2" color="#96a6b7" mt={1}>
            Suporte
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box display="flex" alignItems="center">
            <LanguageIcon color="inherit" />
            <Typography variant="body2" color="white" ml={1}>
              Português
            </Typography>
            <ArrowDropDownIcon color="inherit" />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ mx: 2, borderColor: "white" }}
            />
            <FlagIcon color="inherit" />
            <Typography variant="body2" color="white" ml={1}>
              Brasil
            </Typography>
            <ArrowDropDownIcon color="inherit" />
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2, borderColor: "#f8fbff" }} />
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={3}>
          <Typography variant="body2" color="#96a6b7">
            © 1939 - 2024
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <IconButton color="inherit">
              <LinkIcon />
            </IconButton>
            <Typography variant="body2" color="#96a6b7" textAlign="right">
              Steam Vermelha Ltda - CNPJ 13.123.123/00003-10
              <br />
              Av. Hilton Solto Maior, n° 123, sala 666 - Mangabeira - João
              Pessoa - Paraíba, PB - 58033-000
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
