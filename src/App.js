import './App.css'
import {Container, Link} from "@mui/material";
import {useAuth} from "./contexts/AuthContext";
function App() {
  const {currentUser} = useAuth()
  const {logout} = useAuth()
  console.log(currentUser)
  return (
      <>
        <Container>
          {currentUser ?
            <div>
              {currentUser.email}
              {JSON.stringify(currentUser.emailVerified)}
              <Link onClick={() => logout()}>
                Logout
              </Link>
            </div> :
            <div>
              You are not logged in. Please <Link href={'/login'}>login</Link>
            </div>}


        </Container>
      </>
  );
}

export default App;
