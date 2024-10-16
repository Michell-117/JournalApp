import {Link as ReactLink} from 'react-router-dom'

import { Google } from "@mui/icons-material"
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'

export const LoginPage = () => {
  const {onInputChange, onResetForm, email,password}=useForm({
    email:'',
    password: ''
  })

  const setFormulario = (event)=>{
    event.preventDefault();
    console.log({email});
    console.log({password});
    onResetForm();
  }

  const onGoogleSignIn = ()=>{

  }

  return (
    <AuthLayout title='Iniciar Sesión'>

      <form>

        <Grid2 container>

          <Grid2 size={12} sx={ {mt:2} }>
            <TextField 
              label="Correo" 
              type="email"
              placeholder="correro@google.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              />
          </Grid2>

          <Grid2 size={12}  sx={ {mt:2} }>
            <TextField 
              label="Contraseña" 
              type="password"
              placeholder="Contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid2>

          <Grid2 container direction='row' justifyContent="center"  size={{ xs: 12,sm:12}} spacing={2} sx={ {mt:2} }>

            <Grid2 size={{ xs:12, sm:12}} >
              <Button type='submit' variant="contained" fullWidth onClick={setFormulario}>
                Login
              </Button>
            </Grid2>

            <Grid2 size={{ xs:12, sm:12}} >
              <Button variant="contained" fullWidth>
                <Google/>
              </Button>
            </Grid2>

          </Grid2>

          <Grid2 container direction='row' justifyContent='end' sx={{mt:2}}> 
            <Link component={ReactLink} to="/auth/register">Crea una cuenta</Link>
          </Grid2>

        </Grid2>

      </form>

    </AuthLayout>
  )
}
