import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

const Products = () => {
    return (
        <Box sx={{ minHeight: "60vh", mr: 2, ml: 2, mt: -23 }}>
            <Grid sx={{ mb: 4 }} container spacing={2}>
                <Grid sx={{
                    display: "flex", flexDirection: {
                        xs: "column", lg: "row",
                        justifyContent: "center", alignItems: "center"
                    }
                }} md={6} item>
                    <Box sx={{ width: { xs: "100%", lg: "40%" } }} component="img" src="assect/image1.jpg" />
                    <Box sx={{ paddingLeft: "10px", mt: { lg: 20, xs: 2 } }}>
                        <Typography sx={{ fontWeight: "bold" }} variant="h6">
                            Winter suits 2021
                        </Typography>
                        <Typography>
                            New colections for this winter
                        </Typography>
                        <Typography
                            sx={{ fontWeight: "bold", color: "#ff4081" }} variant="h6">
                            $220.00
                        </Typography>
                        <Button variant='outlined' size='medium'>
                            Add To Cart
                        </Button>
                    </Box>
                </Grid>
                <Grid sx={{
                    display: "flex", flexDirection: {
                        xs: "column", lg: "row",
                        justifyContent: "center", alignItems: "center"
                    }
                }} md={6} item>
                    <Box sx={{ width: { xs: "100%", lg: "40%" } }} component="img" src="assect/image1.jpg" />
                    <Box sx={{ paddingLeft: "10px", mt: { lg: 20, xs: 2 } }}>
                        <Typography sx={{ fontWeight: "bold" }} variant="h6">
                            Winter suits 2021
                        </Typography>
                        <Typography>
                            New colections for this winter
                        </Typography>
                        <Typography
                            sx={{ fontWeight: "bold", color: "#ff4081" }} variant="h6">
                            $220.00
                        </Typography>
                        <Button variant='outlined' size='medium'>
                            Add To Cart
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Products;