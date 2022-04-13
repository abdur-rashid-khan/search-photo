
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HdPhotos from './components/4kPhotos/HdPhotos';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Photos from './components/Photos/Photos';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Photos></Photos>}></Route>
        <Route path='/4k-photos' element={<HdPhotos></HdPhotos>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default App;
