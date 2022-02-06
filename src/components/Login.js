import {
  Alert,
  Button,
  Card,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel, Link,
  styled, Typography
} from "@mui/material";
import "../App.css"
import {useState} from "react";
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import * as PropTypes from "prop-types";
import {purple} from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

ColorButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node
};

export default function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState("")
  const nav = useNavigate()
  const {login} = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    await login(email, password)
      .then(() => nav(`/`))
      .catch(err => {
        setError((err.code))
        console.log((err))
      })
  }

  return(
    <>
      <div align={'center'}>
        <div className={'mainLog'}>
          <Card className={"log"}>
            <Grid container className={'gridlog'}>
              <Grid item xs={12} md={6}>
                <div className={'left-grid'} >
                  <h1 className={'company'}>
                    Organization
                  </h1>
                  <h1 className={'msg'}>
                    Welcome back!
                  </h1>
                  <img src={'back.jpg'} width={'80%'} alt={'back'}/>
                  <Typography variant={'caption'} display={'inline-flex'}>
                    <span>
                      Don't have an account?&nbsp;
                    </span>
                    <Link href={`/signup`}>
                       {' '}Signup
                    </Link>
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={'right-grid'} >
                  <h1 className={'heading'}>
                  Log in
                  </h1>
                  { error!=="" && <Alert severity="error">{error}</Alert>}
                  <form onSubmit={handleSubmit}>
                    <FormControl fullWidth onChange={e => setEmail(e.target.value)}>
                      <InputLabel htmlFor="my-input">Email address</InputLabel>
                      <Input id="my-input" type={'email'} required aria-describedby="my-helper-text"
                      />
                    </FormControl>
                    <FormControl fullWidth onChange={e => setPassword(e.target.value)}>
                      <InputLabel htmlFor="my-input">Password</InputLabel>
                      <Input id="my-input" type={'password'} required aria-describedby="my-helper-text" />
                    </FormControl>
                    <ColorButton variant={'contained'} type={'submit'}>
                      Login
                    </ColorButton>
                  </form>
                </div>

              </Grid>
            </Grid>


      </Card>
        </div>
      </div>


    </>
  )
}