import Box from "./components/box";
import Container from "./components/container";
import Form from "./components/form";
import AuthProvider from "./context/auth-context";

import MyProvider from "./context/my-context";

function App() {
  return (
    <MyProvider>
      <AuthProvider>
        {/* REACT ROUTER DOM */}
        <main>
          <h1>Hello World</h1>
          <Box />
          <Container />
          <Form />
        </main>
      </AuthProvider>
    </MyProvider>
  );
}

export default App;
