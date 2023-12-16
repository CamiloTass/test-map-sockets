import "./App.css";
import { AuthProvider } from "./auth/AuthContext";
import { Container } from "./components";
import { SocketProvider } from "./context/socketContext";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <Container>
          <AppRouter />
        </Container>
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;
