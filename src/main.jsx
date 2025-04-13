import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Include Bootstrap CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);

// ✅ Register service worker with complete success & error handling
if ('serviceWorker' in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => {
        console.log("Service worker registered.", reg);
      })
      .catch((err) => {
        console.error("Service worker registration failed:", err);
      });
  });
}
































// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { ThemeProvider, createTheme } from "@mui/material";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#060a0d",
//       blue: "#184974",
//       darkBlue: "#001d35",
//       white: "#d6ebfe",
//     },
//   },
//   components: {
//     MuiTypography: {
//       defaultProps: {
//         color: "primary.white",
//         fontFamily: "Montserrat",
//       },
//     },
//   },
// });

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <ThemeProvider theme={theme}>
//     <App />
//   </ThemeProvider>
// );
