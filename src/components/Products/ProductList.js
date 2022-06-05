import React from 'react';
import { Box, Grid, Rating, Typography } from '@mui/material';


const ProductList = () => {
  return (
   <Grid container spacing={2}>
      <Grid item md={3}>
          <Box sx={{width: "100%"}} component="img" src="assect/bag_.jpg"/>
          <Typography variant='h6' sx={{fontWeight: "bold"}}>
              Red Shorts for sports
          </Typography>
          <Typography variant='body2'>
              Some text here...
          </Typography>
          <Typography variant='h5' sx={{ fontWeight: "bold", color:"#ff6d00"}}>
              $90.00
          </Typography>
          <Typography variant='subtitle2' sx={{color: "grey"}}>
              $5.95 for shipping
          </Typography>
          {/* {Raiting wraper} */}
          <Box sx={{display: "flex",
           justifyContent:"center", 
           alignItems: "center"
           }}>
              <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
              <Typography>4.9</Typography>
          </Box>
      </Grid> 
      <Grid item md={3}>
          <Box sx={{width: "100%"}} component="img" src="assect/bag_.jpg"/>
          <Typography variant='h6' sx={{fontWeight: "bold"}}>
              Red Shorts for sports
          </Typography>
          <Typography variant='body2'>
              Some text here...
          </Typography>
          <Typography variant='h5' sx={{ fontWeight: "bold", color:"#ff6d00"}}>
              $90.00
          </Typography>
          <Typography variant='subtitle2' sx={{color: "grey"}}>
              $5.95 for shipping
          </Typography>
          {/* {Raiting wraper} */}
          <Box sx={{display: "flex",
           justifyContent:"center", 
           alignItems: "center"
           }}>
              <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
              <Typography>4.9</Typography>
          </Box>
      </Grid> 
      <Grid item md={3}>
          <Box sx={{width: "100%"}} component="img" src="assect/bag_.jpg"/>
          <Typography variant='h6' sx={{fontWeight: "bold"}}>
              Red Shorts for sports
          </Typography>
          <Typography variant='body2'>
              Some text here...
          </Typography>
          <Typography variant='h5' sx={{ fontWeight: "bold", color:"#ff6d00"}}>
              $90.00
          </Typography>
          <Typography variant='subtitle2' sx={{color: "grey"}}>
              $5.95 for shipping
          </Typography>
          {/* {Raiting wraper} */}
          <Box sx={{display: "flex",
           justifyContent:"center", 
           alignItems: "center"
           }}>
              <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
              <Typography>4.9</Typography>
          </Box>
      </Grid>  
      <Grid item md={3}>
          <Box sx={{width: "100%"}} component="img" src="assect/bag_.jpg"/>
          <Typography variant='h6' sx={{fontWeight: "bold"}}>
              Red Shorts for sports
          </Typography>
          <Typography variant='body2'>
              Some text here...
          </Typography>
          <Typography variant='h5' sx={{ fontWeight: "bold", color:"#ff6d00"}}>
              $90.00
          </Typography>
          <Typography variant='subtitle2' sx={{color: "grey"}}>
              $5.95 for shipping
          </Typography>
          {/* {Raiting wraper} */}
          <Box sx={{display: "flex",
           justifyContent:"center", 
           alignItems: "center"
           }}>
              <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
              <Typography>4.9</Typography>
          </Box>
      </Grid>  
   </Grid>
  )
}

export default ProductList;