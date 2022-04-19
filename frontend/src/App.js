import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarScreen from './Screen/NavbarScreen';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import NotFoundScreen from './Screen/NotFoundScreen';
import RegisterScreen from './Screen/RegisterScreen';
import LoginScreen from './Screen/LoginSceen';
import FavoriteScreen from './Screen/FavoriteScreen';
import ChapterSelScreen from './Screen/ChapterSelScreen';
import AddNovel from './Screen/AddNovel';

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
          <Route path='/ChapterSel' element={<ChapterSelScreen></ChapterSelScreen>}></Route>
          <Route path='/addNovel' element={<AddNovel></AddNovel>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
