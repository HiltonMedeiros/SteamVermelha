import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import SyncIcon from "@mui/icons-material/Sync";
import WindowsIcon from "@mui/icons-material/Windows";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const DiscountChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "#ff6666",
  color: theme.palette.common.white,
  fontWeight: theme.typography.fontWeightBold,
}));

const PriceChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "#5f738a4c",
  color: theme.palette.common.white,
  fontWeight: theme.typography.fontWeightBold,
  border: `1px solid ${theme.palette.divider}`,
}));

const Ofertas = () => {
  const offers = [
    {
      title: "Devil May Cry",
      discount: "-10%",
      price: "R$ 6,59",
      image: "/a8ialgiqpfxd4ruhqwyz-jpg.png",
      icons: [<SyncIcon />, <WindowsIcon />],
    },
    {
      title: "Devil May Cry 2",
      discount: "-75%",
      price: "R$ 5,12",
      image: "/xkhhpxrahotvcuelyd2u-jpg.png",
      icons: [<SyncIcon />, <WindowsIcon />, <AppleIcon />],
    },
    {
      title: "Devil May Cry 3",
      discount: "-63%",
      price: "R$ 14,80",
      image: "/m2ppf4wyqlnsof3sutch-jpg.png",
      icons: [<SyncIcon />, <WindowsIcon />, <AppleIcon />, <AndroidIcon />],
    },
    {
      title: "Devil May Cry 4",
      discount: "-10%",
      price: "R$ 18,49",
      image: "/rfofdgyxivysksmv8dsp-jpg.png",
      icons: [<SyncIcon />, <WindowsIcon />, <AppleIcon />, <AndroidIcon />],
      tags: ["DLC", "PRÉ-VENDA"],
    },
    {
      title: "Devil May Cry 5",
      discount: "-10%",
      price: "R$ 74,90",
      image: "/o3ty6gzxmzvqtokdnwbb-jpg.png",
      icons: [<SyncIcon />, <WindowsIcon />],
    },
  ];

  return (
    <Box sx={{ width: 1100, height: 300, position: "relative" }}>
      <Box
        sx={{
          width: 1060,
          height: 44,
          position: "absolute",
          top: 0,
          left: 5,
          backgroundColor: "transparent",
        }}
      >
        <Typography
          variant="h4"
          component="p"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          Saga - Devil May Cry
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ position: "absolute", top: 64, left: 5 }}
      >
        {offers.map((offer, index) => (
          <Grid item key={index} xs={2.4}>
            <Card
              sx={{
                backgroundColor: "collection-1-color-7",
                borderRadius: 1,
                boxShadow: 1,
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  height: 91,
                  backgroundImage: `url(${offer.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "5px 5px 0 0",
                }}
              />
              <CardContent sx={{ padding: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "white", marginBottom: 1 }}
                >
                  {offer.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 1,
                  }}
                >
                  {offer.icons.map((icon, i) => (
                    <Box key={i} sx={{ marginRight: 0.5 }}>
                      {icon}
                    </Box>
                  ))}
                </Box>
                {offer.tags && (
                  <Box sx={{ display: "flex", marginBottom: 1 }}>
                    {offer.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: i === 0 ? "#cc3366" : "#0099cc",
                          color: "white",
                          fontWeight: "bold",
                          marginRight: 0.5,
                        }}
                      />
                    ))}
                  </Box>
                )}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <DiscountChip label={offer.discount} size="small" />
                  <PriceChip label={offer.price} size="small" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Ofertas;
