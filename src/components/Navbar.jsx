import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "../components";

const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to='/' style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt='logo' style={{ height: 45 }} />
        <Typography px={2} color='white' fontWeight='bold' fontSize={20}>
          JoJoTube
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
