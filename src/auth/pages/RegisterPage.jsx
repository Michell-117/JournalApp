import {Link as ReactLink} from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {

  const formData = {
    email: 'michell.117@gmail.com',
    password: 'michellR',
    displayName:'Michell Ruiz Arredondo'
  }

  const {displayName, onInputChange, onResetForm, email,password, formState}=useForm(formData)

  const onSubmit = (event)=>{
    event.preventDefault()
    console.log(formState)
  }

  return (
    <AuthLayout title='Crear cuenta'>

      <form onSubmit={onSubmit}>

        <Grid2 container>

          <Grid2 size={12} sx={ {mt:2} }>
            <TextField 
              label="Nombre completo" 
              type="text"
              placeholder="Derek Shepard"
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              fullWidth
            />
          </Grid2>

          <Grid2 size={12} sx={ {mt:2} }>
            <TextField 
              label="Correo" 
              type="email"
              placeholder="Email"
              name='email'
              value={email}
              onChange={onInputChange}
              fullWidth
            />
          </Grid2>

          <Grid2 size={12}  sx={ {mt:2} }>
            <TextField 
              label="Contraseña" 
              type="password"
              placeholder="Contraseña"
              name='password'
              value={password}
              onChange={onInputChange}
              fullWidth
            />
          </Grid2>

          <Grid2 container direction='row' justifyContent="center"  size={{ xs: 12,sm:12}} spacing={2} sx={ {mt:2} }>

            <Grid2 size={{ xs:12, sm:12}} >
              <Button type='submit' variant="contained" fullWidth >
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
