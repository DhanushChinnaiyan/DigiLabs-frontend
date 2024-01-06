import React, { useState } from "react";
import styles from "./Styles/Styles.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = [
    "Card access",
    "Banking",
    "Processing",
    "About",
    "Carrier",
    "Contact",
  ];
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "inherit" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
            }}
          >
            Mode UI
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
            }}
          >
            Mode UI
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              sx={{
                color: "black",
                gap: "5px",
                bgcolor: "rgba(238, 239, 239, 1)",
                borderRadius: "10px",
              }}
            >
              <span style={{ fontSize: "calc(15px + 0.5vw)" }}>Login</span>
              <LoginIcon sx={{ fontSize: "25px" }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton
            sx={{
              display: { xs: "none", md: "flex" },
              color: "black",
              gap: "5px",
              bgcolor: "rgba(238, 239, 239, 1)",
              borderRadius: "10px",
            }}
          >
            <span style={{ fontSize: "calc(15px + 0.5vw)" }}>Login</span>
            <LoginIcon sx={{ fontSize: "25px" }} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
