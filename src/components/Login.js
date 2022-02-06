import {Alert, Button, Container, FormControl, FormHelperText, Input, InputLabel} from "@mui/material";
import {useState} from "react";
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";
export default function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState("")
  const nav = useNavigate()
  const {login} = useAuth()
  console.log(email)
  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
      .then(nav(`/`))
      .catch(error => {
      setError((error.code))
      console.log((error))
    })
  }
  return(
    <>
      <Container>
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
          <Button type={'submit'}>
            Login
          </Button>
        </form>
      </Container>
    </>
  )
}