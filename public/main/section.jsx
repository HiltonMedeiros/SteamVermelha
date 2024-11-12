import FavoriteIcon from "@mui/icons-material/Favorite";
import GamepadIcon from "@mui/icons-material/Gamepad";
import SecurityIcon from "@mui/icons-material/Security";
import StoreIcon from "@mui/icons-material/Store";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

export const Section = () => {
  return (
    <Box sx={{ position: "relative", width: "1440px", height: "641px" }}>
      <Box
        sx={{
          position: "absolute",
          width: "1202px",
          height: "476px",
          top: "25px",
          left: "119px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "1182px",
            height: "30px",
            top: "446px",
            left: "2.5px",
            display: "flex",
            justifyContent: "center",
            gap: "18px",
          }}
        >
          <Box
            sx={{
              width: "10px",
              height: "10px",
              bgcolor: "white",
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              width: "10px",
              height: "10px",
              bgcolor: "collection-1-color-4",
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              width: "10px",
              height: "10px",
              bgcolor: "white",
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              width: "10px",
              height: "10px",
              bgcolor: "white",
              borderRadius: "50%",
            }}
          />
        </Box>

        <Card
          sx={{
            position: "absolute",
            width: "1162px",
            height: "436px",
            top: 0,
            left: "5px",
            bgcolor: "transparent",
            border: "1px solid #263241",
            boxShadow: "0px 0px 30px #00000080",
          }}
        >
          <Grid container>
            <Grid item xs={8}>
              <CardMedia
                component="div"
                sx={{
                  height: "436px",
                  backgroundImage: "url(/hsjtowgf5idmufrfggpi-jpg.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "50%",
                    bottom: 0,
                    background:
                      "linear-gradient(180deg, rgba(21,29,39,0.9) 0%, rgba(0,0,0,0) 100%)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "15px",
                    left: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ color: "white", textShadow: "1px 1px 0px #0000004c" }}
                  >
                    God Of War 3
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#5f738a4c",
                      border: "1px solid #435467",
                      borderRadius: "3px",
                    }}
                  >
                    R$ 39,90
                  </Button>
                  <IconButton>
                    <FavoriteIcon sx={{ color: "white" }} />
                  </IconButton>
                </Box>
              </CardMedia>
            </Grid>
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={12}>
                  <CardMedia
                    component="div"
                    sx={{
                      height: "216px",
                      backgroundImage: "url(/v9rajgunzakgyuosg0xh-jpg.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "50%",
                        bottom: 0,
                        background:
                          "linear-gradient(180deg, rgba(21,29,39,0.9) 0%, rgba(0,0,0,0) 100%)",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "15px",
                        left: "15px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "white",
                          textShadow: "1px 1px 0px #0000004c",
                        }}
                      >
                        God of War 2
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{ bgcolor: "#ff6666", borderRadius: "3px" }}
                      >
                        -10%
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#5f738a4c",
                          border: "1px solid #435467",
                          borderRadius: "3px",
                        }}
                      >
                        R$ 19,90
                      </Button>
                      <IconButton>
                        <FavoriteIcon sx={{ color: "white" }} />
                      </IconButton>
                    </Box>
                  </CardMedia>
                </Grid>
                <Grid item xs={12}>
                  <CardMedia
                    component="div"
                    sx={{
                      height: "218px",
                      backgroundImage: "url(/arbucn8ebixceiegtoz1-jpg.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "50%",
                        bottom: 0,
                        background:
                          "linear-gradient(180deg, rgba(21,29,39,0.9) 0%, rgba(0,0,0,0) 100%)",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "15px",
                        left: "15px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "white",
                          textShadow: "1px 1px 0px #0000004c",
                        }}
                      >
                        God Of War
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#5f738a4c",
                          border: "1px solid #435467",
                          borderRadius: "3px",
                        }}
                      >
                        R$ 10,90
                      </Button>
                      <IconButton>
                        <FavoriteIcon sx={{ color: "white" }} />
                      </IconButton>
                    </Box>
                  </CardMedia>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Box>

      <Box
        sx={{
          position: "absolute",
          width: "1078px",
          height: "80px",
          top: "516px",
          left: "183px",
          bgcolor: "collection-1-color",
          borderRadius: "3px",
          overflow: "hidden",
          transform: "rotate(180deg)",
          boxShadow: "0px 2px 3.5px 1.5px #17253459",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <GamepadIcon sx={{ color: "white", fontSize: "40px" }} />
          <Box>
            <Typography variant="h6" sx={{ color: "white" }}>
              Relíquias do passado
            </Typography>
            <Typography variant="body2" sx={{ color: "collection-1-color-4" }}>
              Divirta-se com
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <SecurityIcon sx={{ color: "white", fontSize: "40px" }} />
          <Box>
            <Typography variant="h6" sx={{ color: "white" }}>
              Segura e simples
            </Typography>
            <Typography variant="body2" sx={{ color: "collection-1-color-4" }}>
              Experiência
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <StoreIcon sx={{ color: "white", fontSize: "40px" }} />
          <Box>
            <Typography variant="h6" sx={{ color: "white" }}>
              Licenciada
            </Typography>
            <Typography variant="body2" sx={{ color: "collection-1-color-4" }}>
              Loja
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section;
