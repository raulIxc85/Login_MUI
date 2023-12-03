import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Cuenta from '@mui/icons-material/Person';
import Contraseña from '@mui/icons-material/Lock';
import Usuario from '@mui/icons-material/VerifiedUser';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';

const estudio = [
    {
        value: '1',
        label: 'Primaria',
    },
    {
        value: '2',
        label: 'Basicos',
    },
    {
        value: '3',
        label: 'Diversificado',
    },
    {
        value: '4',
        label: 'Universidad',
    },
];

export default function FormUsuario() {

    return (
        <Container maxWidth="xl"
            sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vw', 
        }}>
            <Typography gutterBottom variant="h4" align="center">
                Ingreso de usuarios
            </Typography>
            <Grid>
                <Card style={{ 
                    maxWidth: 450, 
                    padding: "15px 5px",
                    margin: "0 auto",
                }}>
                    <CardContent>
                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} item>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <TextField 
                                            fullWidth
                                            id="nombre" 
                                            label="Nombre" 
                                            variant="standard" 
                                        />
                                        <Cuenta sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    </Box>
                                </Grid>
                                <Grid xs={12} item>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <TextField 
                                            fullWidth
                                            id="apellido" 
                                            label="Apellido" 
                                            variant="standard" 
                                        />
                                        <Cuenta sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    </Box>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <TextField 
                                            id="edad" 
                                            label="edad" 
                                            type='number'
                                            variant="standard" 
                                        />
                                        <Cuenta sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormGroup>
                                        <FormLabel component="legend">Sexo</FormLabel>
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Mujer"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Hombre"
                                        />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="estudios"
                                        select
                                        fullWidth
                                        label="Nivel de estudios"
                                    >
                                        {estudio.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <TextField 
                                            fullWidth
                                            id="usuario" 
                                            label="Usuario" 
                                            variant="standard" 
                                        />
                                        <Usuario sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    </Box>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <TextField 
                                            fullWidth
                                            id="pwd" 
                                            label="Contraseña" 
                                            variant="standard" 
                                        />
                                        <Contraseña sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    </Box>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <TextField 
                                            fullWidth
                                            id="conf_pwd" 
                                            label="Confirmar contraseña" 
                                            variant="standard" 
                                        />
                                        <Contraseña sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: 5 }}>
                                    <Button 
                                        type="submit" 
                                        variant="contained" 
                                        color="primary" fullWidth
                                    >
                                        Enviar
                                    </Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    );
}