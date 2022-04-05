import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Sidebar from "./components/Sidebar/index.js";
import { Routes, Route} from "react-router-dom";
import { Home, HPlusMobiledata } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import Homepage from "./components/Home/index.js";
import Layout from "./components/Layout";
import Contactme from "./components/Contact";
import Aboutpage from "./components/About";
import Blogs from "./components/Blog";
import Projects from "./components/Projects";

const theme = createTheme({
  palette: {
    primary: {main: '#1D2731',},
    secondary: {main: '#ABACAD',},
    info: {main: '#D9B310',},
  },
});

function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
      {/* <Sidebar /> */}
    
      <Routes>
        <Route path="/" element={<Layout theme={theme}/>}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactme />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>

    </ThemeProvider>
    </div>

  );
}

export default App;
