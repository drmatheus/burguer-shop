import { GlobalStyle } from "./GlobalStyle";
import { MyRoutes as Routes } from "./routes";
import { UserProvider } from "./context/userContext";
import { ToastContainer } from "react-toastify";
import "@reach/dialog/styles.css";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer autoClose={5000} />
      <GlobalStyle />
      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}

export default App;
