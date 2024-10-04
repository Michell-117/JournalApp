import {Link as ReactLink} from 'react-router-dom'

import { Google } from "@mui/icons-material"
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {

  return (
    <AuthLayout title='Crear cuenta'>

      <form>

        <Grid2 container>

          <Grid2 size={12} sx={ {mt:2} }>
            <TextField 
              label="Nombre completo" 
              type="text"
              placeholder="Derek Shepard"
              fullWidth
            />
          </Grid2>

          <Grid2 size={12} sx={ {mt:2} }>
            <TextField 
              label="Correo" 
              type="email"
              placeholder="Email"
              fullWidth
            />
          </Grid2>

          <Grid2 size={12}  sx={ {mt:2} }>
            <TextField 
              label="Contraseña" 
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid2>

          <Grid2 container direction='row' justifyContent="center"  size={{ xs: 12,sm:12}} spacing={2} sx={ {mt:2} }>

            <Grid2 size={{ xs:12, sm:12}} >
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid2>

          </Grid2>

          <Grid2 container direction='row' justifyContent='end' sx={{mt:2}}> 
            <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
            <Link component={ReactLink} to="/auth/login">ingresa</Link>
          </Grid2>

        </Grid2>

      </form>

    </AuthLayout>
  )
}
