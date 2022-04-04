import "./App.css";
import Layout from './components/Layout/index.js'
import { createTheme, ThemeProvider } from "@mui/material";
import Sidebar from "./components/Sidebar/index.js";
import { Routes, Route} from "react-router-dom";
import { Home } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {main: '#1D2731',},
    secondary: {main: '#0B3C5D',},
    info: {main: '#D9B310',},
  },
});

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout theme={theme} />} />
    </Routes>
    </>

  );
}

export default App;
