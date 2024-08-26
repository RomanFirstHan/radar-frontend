
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';

import { Auth } from './Pages/Auth';
import { Radar } from './Pages/Radar';
import { Technology } from './Pages/Technology';
import { Score } from './Pages/Score';

import { Layout } from './components/Layout';
import { RequiredAuth } from './components/hoc/RequiredAuth';
import { AuthProvider } from './components/hoc/AuthProvider';
import {React} from 'react';

function App() {
  return (    
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path= '/' element={
            
              <Radar />
            }/> 
          <Route path= '/Technology' element={
            // <RequiredAuth>
              <Technology />
            // </RequiredAuth>
          }/> 
          <Route path= '/Auth' element={<Auth />}/> 
          <Route path= '/Score' element={<Score />}/> 
        </Route>
      </Routes>
    </AuthProvider>    
  );
}

export default App;
