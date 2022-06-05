import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PetsIcon from '@mui/icons-material/Pets';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import FlightIcon from '@mui/icons-material/Flight';
import PowerIcon from '@mui/icons-material/Power';
import HandymanIcon from '@mui/icons-material/Handyman';
import FlatwareIcon from '@mui/icons-material/Flatware';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';

const Categories = () => {
    return (
        <Grid sx={{ border: "1px solid #e0e0e0", mt: 8, mb: 4 }}
            justify="space-between"
            alignItems="center"
            container spacing={2}>
            <Grid sx={{
                display: "flex", justifyContent: "center",
                aligneItems: "center", flexDirection: "column"
            }} item md={1}
            >
                <Box>
                    <ChildFriendlyIcon sx={{ width: "60px", fontSize: "40px" }} />
                </Box>
                <Typography>Babysitter</Typography>
            </Grid>
            <Grid sx={{
                display: "flex", justifyContent: "center",
                aligneItems: "center", flexDirection: "column"
            }} item md={1}
            >
                <Box>
                    <FitnessCenterIcon sx={{ width: "60px", fontSize: "40px" }} />
                </Box>
                <Typography>Sports</Typography>
            </Grid>
            <Grid sx={{
                display: "flex", justifyContent: "center",
                aligneItems: "center", flexDirection: "column"
            }} item md={1}
            >
                <Box>
                    <PetsIcon sx={{ width: "40px", fontSize: "40px" }} />
                </Box>
                <Typography>Pets</Typography>
            </Grid>
            <Grid sx={{
                display: "flex", justifyContent: "center",
                aligneItems: "center", flexDirection: "column"
            }} item md={1}
            >
                <Box>
                    <MusicVideoIcon sx={{ width: "40px", fontSize: "40px" }} />
                </Box>
                <Typography>Music</Typography>
            </Grid>
            <Grid sx={{
                display: "flex", justifyContent: "center",
                aligneItems: "center", flexDirection: "column"
            }} item md={1}
            >
                <Box>
                    <FlightIcon sx={{ width: "50px", fontSize: "40px" }} />
                </Box>
                <Typography>Travel</Typography>
            </Grid>
            <Grid sx={{
                display: "flex", justifyContent: "center",
                aligneItems: "center", flexDirection: "column"
            }} item md={1}
            >
                <Box>
                    <PowerIcon sx={{ width: "80px", fontSize: "40px" }} />
                </Box>
                <Typography>Power Station</Typography>
            </Grid>
            <Grid sx={{
                display: "flex", justifyContent: "center",
                aligneItems: "center", flexDirection: "column"
            }} item md={1}
            >
                <Box>
                    <HandymanIcon sx={{ width: "40px", fontSize: "40px" }} />
                </Box>
                <Typography>Tools</Typography>
            </Grid>
            <Grid sx={{
                display: "flex", justifyContent: "center",
                aligneItems: "center", flexDirection: "column"
            }} item md={1}
            >
                <Box>
                    <FlatwareIcon sx={{ width: "50px", fontSize: "40px" }} />
                </Box>
                <Typography>Kitchen </Typography>
            </Grid>
            <Grid sx={{
                display: "flex", justifyContent: "center",
                aligneItems: "center", flexDirection: "column"
            }} item md={1}
            >
                <Box>
                    <CheckroomIcon sx={{ width: "60px", fontSize: "40px" }} />
                </Box>
                <Typography>Clothings</Typography>
            </Grid>
            <Grid sx={{
                display: "flex", justifyContent: "center",
                aligneItems: "center", flexDirection: "column"
            }} item md={1}
            >
                <Box>
                    <LocalMoviesIcon sx={{ width: "80px", fontSize: "40px" }} />
                </Box>
                <Typography>Entertaiment</Typography>
            </Grid>
            <Grid sx={{
                display: "flex", justifyContent: "center",
                aligneItems: "center", flexDirection: "column"
            }} item md={1}
            >
                <Box>
                    <SmartphoneIcon sx={{ width: "80px", fontSize: "40px" }} />
                </Box>
                <Typography>New Mobile</Typography>
            </Grid>
            <Grid sx={{
                display: "flex", justifyContent: "center",
                aligneItems: "center", flexDirection: "column"
            }} item md={1}
            >
                <Box>
                    <BedroomBabyIcon sx={{ width: "80px", fontSize: "40px" }} />
                </Box>
                <Typography>Baby Bedroom</Typography>
            </Grid>
        </Grid>
    )
}

export default Categories;