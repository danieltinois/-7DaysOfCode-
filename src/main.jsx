import { createRoot } from "react-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import CartProvider from "./context/cart";
import { AuthRoutes } from "./routes/auth.routes";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <ThemeProvider theme={theme}>
      <CartProvider>
        <GlobalStyles />
        <AuthRoutes />
      </CartProvider>
    </ThemeProvider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </Router>
);
