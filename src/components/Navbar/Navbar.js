import React, { useState } from 'react';
import { Toolbar, IconButton, Typography, Button, Badge, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Box } from '@mui/system';
import DrawerComponent from './DrawerComponent';


const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(true)

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    console.log(matches)

    const openManu = Boolean(anchorEl)

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        console.log(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <div>
            <Box elevation={0} sx={{ backgroundColor: "white" }}>
                <Toolbar>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            padding: "15px 0px"
                        }}
                        component="div">
                        {/* logo */}
                        <Box>
                            <IconButton>
                                <LocalMallIcon sx={{ fontSize: "2.4rem" }} />
                            </IconButton>
                        </Box>
                        {/* links */}
                        {matches ? <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
                            :

                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}>
                                    Home
                                </Typography>
                                <Typography sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}

                                >
                                    Brand
                                </Typography>
                                <Typography sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
                                    aria-controls="basic-manu"
                                    aria-haspopup="true"
                                    aria-expanded={openManu ? true : "undefined"}
                                    onClick={handleClick}
                                >
                                    Category
                                </Typography>
                                <Menu id='basic-menu'
                                    anchorEl={anchorEl} open={openManu}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Men</MenuItem>
                                    <MenuItem onClick={handleClose}>Women</MenuItem>
                                    <MenuItem onClick={handleClose}>Phones</MenuItem>
                                    <MenuItem onClick={handleClose}>Acesirorees</MenuItem>
                                    <MenuItem onClick={handleClose}>Women</MenuItem>
                                </Menu>
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
                        }
                        {/* buttons links */}
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Button
                                sx={{ backgroundColor: "#ff4081" }}
                                disableElevation
                                variant='contained'
                            >
                                Account
                            </Button>


                            {matches ? (
                                <IconButton onClick={() => setOpenDrawer(true)}>
                                    <MenuIcon />
                                </IconButton>) : (
                                <IconButton>
                                    <Badge color="primary">
                                        <ShoppingBasketIcon color='action' />
                                    </Badge>
                                </IconButton>
                            )}
                        </Box>
                    </Box>
                </Toolbar>
            </Box>

        </div>
    )
}

export default Navbar;