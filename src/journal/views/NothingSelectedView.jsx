import { StarOutline } from "@mui/icons-material"
import { Grid2, Typography } from "@mui/material"

export const NothingSelectedView = () => {
       
    return(

      <Grid2 
        container
        spacing={0}
        justifyContent='center'
        
        size={12}
        // alignItems='center'
        sx={{
          display:'flex',
          height:'calc(100vh - 110px)',
          backgroundColor: 'primary.main',
          direction:'column',
          alignItems:'center',
          alignContent:'center',
          borderRadius: 3
          // justifyContent: 'center'
        }}
      >
        <Grid2 size={12}>
          <StarOutline 
            
            sx={
              {
                fontSize: 100, color:'white'
              }
            }
          />
        </Grid2>

        <Grid2 size={12}>
          <Typography 
            color="white"
            variant="h5"
          >
            Selecciona o crea una entrada
          </Typography>
        </Grid2>

      </Grid2>
    )

}
