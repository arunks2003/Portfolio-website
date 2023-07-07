import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Lyout/index'
import Home from './components/Homepage';
// import About from './components/Homepage/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          {/* <Route index path='about' element={<About />}></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
