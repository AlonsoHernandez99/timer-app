import "./App.css";
import Navbar from "./components/Navbar";
import { Card, CardContent, Container } from "@material-ui/core";
import Timer from "./components/Timer";
function App() {
  return (
    <div>
      <Container>
        <Navbar></Navbar>
        <Card>
          <CardContent>
            <Timer></Timer>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
