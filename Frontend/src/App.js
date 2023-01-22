import "./App.css";
import MainRoutes from "./AllRoutes/MainRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";




function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />

    </div>
  );
}

export default App;
