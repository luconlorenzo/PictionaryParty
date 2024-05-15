import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ScrollToTop from "./lib/ScrollToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import LoginPage from "./pages/LoginPage";

function App() {

  return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={ <LoginPage/>} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </ThemeProvider>
  );
}

export default App;
