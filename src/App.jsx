
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';

import { Auth } from './Pages/Auth';
import { Radar } from './Pages/Radar';
import { Technology } from './Pages/Technology';
import { Score } from './Pages/Score';

import { Layout } from './components/Layout';

function App() {
  return (    
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path= '/' element={<Radar />}/> 
          <Route path= '/Technology' element={<Technology />}/> 
          <Route path= '/Auth' element={<Auth />}/> 
          <Route path= '/Score' element={<Score />}/> 
        </Route>
      </Routes>
    </>    
  );
}

export default App;
