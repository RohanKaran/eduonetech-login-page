import {
  Alert,
  Button,
  Card,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Link, styled, Typography
} from "@mui/material";
import {useState} from "react";
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import {purple} from "@mui/material/colors";
import * as PropTypes from "prop-types";
export default function Signup() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [error, setError] = useState("")
  const nav = useNavigate()
  const {signup} = useAuth()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword){
      return setError("Password do not match!")
    }
    await signup(email, password)
      .then(() => nav(`/`))
      .catch(error => {
      setError((error.code))
      console.log((error))
    })
  }

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
                    Hey there!
                  </h1>
                  <img src={'back.jpg'} width={'80%'} alt={'background'}/>
                  <Typography variant={'caption'} display={'inline-flex'}>
                    <span>
                      Already have an account?&nbsp;
                    </span>
                    <Link href={`/login`}>
                       {' '}Login
                    </Link>
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={'right-grid'} >
                  <h1 className={'heading'}>
                    Sign up
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
                    <FormControl fullWidth onChange={e => setConfirmPassword(e.target.value)}>
                      <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
                      <Input id="my-input" type={'password'} required aria-describedby="my-helper-text" />
                    </FormControl>
                    <ColorButton variant={'contained'} type={'submit'}>
                      Register
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