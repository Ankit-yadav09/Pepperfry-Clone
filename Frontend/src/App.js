import './App.css';
import MainRoutes from './AllRoutes/MainRoutes';
import Navbar from './Components/Navbar';
import { ProductsPage } from './Components/Product/Productpage';

function App() {
  return (
    <div className="App">
      {/* <MainRoutes /> */}
      <ProductsPage/>
    </div>
  );
}

export default App;