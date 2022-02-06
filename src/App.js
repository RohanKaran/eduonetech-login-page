import './App.css'
import {Button, Card, Container, Link} from "@mui/material";
import {useAuth} from "./contexts/AuthContext";
function App() {
  const {currentUser} = useAuth()
  const {logout} = useAuth()
  console.log(currentUser)
  return (
      <>
        <Container
          style={{height:'100vh', justifyContent:'center', alignItems:'center', paddingTop:'20%'}}
        >
          {currentUser ?
            <div align={'center'}>
              <Card style={{maxWidth:'200px', textAlign:'left', padding:'2rem'}}>
                <b>Current Status: </b>Logged in
                <br/>
                <b>Email: </b>{currentUser.email}
                <br/>
                <b>Account Verified:</b>{currentUser.emailVerified ? ' Yes' : ' No'}
              </Card>

              <Button onClick={() => logout()} style={{color:'whitesmoke'}}>
                Logout
              </Button>
            </div> :
            <div>
              You are not logged in. Please <Link href={'/login'} style={{color:'whitesmoke'}}>login</Link>
            </div>}


        </Container>
      </>
  );
}

export default App;
