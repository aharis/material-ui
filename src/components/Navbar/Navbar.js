import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Badge, Menu, MenuItem } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Box } from '@mui/system';


const Navbar = () => {
    return (
        <div>
            <AppBar elevation={0} sx={{ backgroundColor: "white" }}>
                <Toolbar>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%"
                        }}
                        component="div">
                        {/* logo */}
                        <Box>
                            <IconButton>
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                        {/* links */}
                        <Box sx={{ display: "flex" }}>
                            <Typography sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}>
                                Home
                            </Typography>
                            <Typography sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
                            aria-controls="basic-manu"
                            aria-haspopup="true"
                            aria-expanded="false"
                            onClick={() =>{}}
                            >
                                Brand
                            </Typography>
                            <Typography sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}>
                                Category
                            </Typography>
                            <Typography sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}>
                                Man
                            </Typography>
                            <Typography sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}>
                                Women
                            </Typography>
                            <Typography sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}>
                                FAQ
                            </Typography>
                        </Box>
                        {/* buttons links */}
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Button
                                sx={{ backgroundColor: "#ff4081" }}
                                disableElevation
                                variant='contained'
                            >
                                Account
                            </Button>
                            <IconButton>
                                <Badge color="primary">
                                    <ShoppingBasketIcon color='action' />
                                </Badge>
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Navbar