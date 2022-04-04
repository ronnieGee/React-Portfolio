import "./App.css";
import Layout from './components/Layout/Layout.js'
import { createTheme, ThemeProvider } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar.js";
import { Routes, Route} from "react-router-dom";
import { Home } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#1D2731",
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Sidebar theme={theme}></Sidebar>
    </ThemeProvider>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
    </>

  );
}

export default App;
