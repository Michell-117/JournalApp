import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {


    return (
        <Grid2 
            container
            direction='row'
            justifyContent='space-between'
            sx={{ mb:1 }}
        >
            <Grid2>
                <Typography fontSize={39} fontWeight='light' >28 de agosto, 2024</Typography>
            </Grid2>

            <Grid2>
                <Button 
                    color="primary"
                    sx={{ padding:2 }}
                >
                    <SaveOutlined
                        sx={{ fontSize:30, mr:1 }}
                    />
                    Guardar
                </Button>
            </Grid2>

            <Grid2 size={12}>
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label='Título'
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    minRows={5}
                    placeholder="¿Qué sucedió el día de hoy?"
                    label='Entrada'
                    
                />
            </Grid2>

            <ImageGallery/>

        </Grid2>
    )
}
