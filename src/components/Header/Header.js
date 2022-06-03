import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const Header = () => {

  return (
    <Box sx={{
      minHeight: "80vh",
      background: "url(assect/fashonImage.jpg)",
      backgroundRepeat: "no-repit",
      backgroundSize: "cover",
    }}>
      <Box component="div" sx={{
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "flex-start",
        height: "50vh", mr: 3
      }} >
        <Typography sx={{
          fontFamily: "cursive",
          fontWeight: "bold",
          color: "#d9aad0",
        }}
          variant="h3"
        >
          Find Your New Favorite
        </Typography>
        <Typography
          sx={{
            fontFamily: "cursive",
            fontWeight: "bold",
            color: "#f8bbd0"
          }} variant="h4">
          Collection at Winter
        </Typography>
        <Typography sx={{
          fontFamily: "cursive",
          fontWeight: "bold", color: "#f8bbd0",
        }} variant="h5">
          sale 2022
        </Typography>
      </Box>
    </Box>
  )
}

export default Header;