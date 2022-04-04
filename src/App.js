import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarScreen from './Screen/NavbarScreen';
import HomeScreenContent from './Screen/HomeScreenContent';
import ProductScreen from './Screen/ProductScreen';

function App() {
  return (
    <div >
      <NavbarScreen></NavbarScreen>
      <HomeScreenContent></HomeScreenContent>
      <ProductScreen></ProductScreen>
    </div>
  );
}

export default App;
