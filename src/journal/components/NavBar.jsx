import { LoginOutlined } from "@mui/icons-material"
import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({drawerWidth= 240}) => {
  return (
    <AppBar 
      position="fixed"
      sx={{
        width:{sm: `calc(100% - ${drawerWidth}px)`},
        ml:{ sm: `${drawerWidth}px` }

      }}
    >
      <Toolbar>

        <IconButton
          color="inherit"
          edge="start"
          sx={{mr:2, display:{sm:'none'} } }
        >
          <MenuOutlined/>
        </IconButton>

        <Grid2 
          size={12}
          container 
          direction='row' 
          justifyContent='space-between' 
          alignItems='center' 
        >

          <Typography
            variant="h6"
            noWrap
            component='div'
          > 
            Journal App   
          </Typography>

          <IconButton color="secondary">
            <LoginOutlined/>
          </IconButton>
          
        </Grid2>

      </Toolbar>

    </AppBar>
  )
}
