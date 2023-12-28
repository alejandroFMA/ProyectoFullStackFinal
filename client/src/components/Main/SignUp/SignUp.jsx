import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import{ useNavigate } from "react-router-dom";
import axios from "axios";

const defaultTheme = createTheme();

const signUp = () =>{

  const navigate = useNavigate();

const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);


  try {
    await axios.post('http://localhost:3000/signup', {
      email: data.get('email'),
      password: data.get('password'),
      username: data.get('username'),
    });

    navigate('/signin');
  } catch (error) {
    console.error('Error en el registro:', error.response.data.message);
  }
};

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid item xs={12} >
                <TextField
                   sx={{backgroundColor: '#f0f0f0'}}
                  margin='normal'
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                   sx={{backgroundColor: '#f0f0f0'}}
                  margin='normal'
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  floatingLabelStyle={{color: '#000000' }}
                  inputProps={{ color: 'black' } }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                   sx={{backgroundColor: '#f0f0f0'}}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  ¿Tienes una cuenta? Entra aquí
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default signUp;