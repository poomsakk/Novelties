import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarScreen from './Screen/NavbarScreen';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import NotFoundScreen from './Screen/NotFoundScreen';
import RegisterScreen from './Screen/RegisterScreen';
import LoginScreen from './Screen/LoginSceen';
import FavoriteScreen from './Screen/FavoriteScreen';
import ForgetPasswordScreen from './Screen/ForgetPasswordScreen';
import ChangePasswordScreen from './Screen/ChangePasswordScreen'
import NovelScreen from './Screen/NovelScreen';


function App() {
  return (
    <>
      <NavbarScreen></NavbarScreen>
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
          <Route path='/register' element={<RegisterScreen></RegisterScreen>}></Route>
          <Route path='/login' element={<LoginScreen></LoginScreen>}></Route>
          <Route path='*' element={<NotFoundScreen />} />
          <Route path='/favorite' element={<FavoriteScreen></FavoriteScreen>}></Route>
          <Route path='/forgetpassword' element={<ForgetPasswordScreen></ForgetPasswordScreen>}></Route>
          <Route path='/changepassword' element={<ChangePasswordScreen></ChangePasswordScreen>}></Route>
          <Route path="/novel/:id" element={<NovelScreen></NovelScreen>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
