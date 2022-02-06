import {Alert, Button, Container, FormControl, FormHelperText, Input, InputLabel} from "@mui/material";
import {useState} from "react";
import {useAuth} from "../contexts/AuthContext";
export default function Signup() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [error, setError] = useState("")
  const {signup} = useAuth()
  console.log(email)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword){
      return setError("Password do not match!")
    }
    signup(email, password).catch(error => {
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
          <FormControl fullWidth onChange={e => setConfirmPassword(e.target.value)}>
            <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
            <Input type={'password'} required aria-describedby="my-input" />
          </FormControl>
          <Button type={'submit'}>
            Signup
          </Button>
        </form>
      </Container>
    </>
  )
}