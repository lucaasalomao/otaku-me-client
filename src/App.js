import { Routes, Route } from 'react-router-dom'

/* import PrivateOutlet from './components/PrivateOutlet';

import Header from "./components/Header";
import Todos from './pages/Home'
import Login from './pages/Login'; */

function App() {
  return (
    <>
      <div>Hello!</div>
      {/* <Header /> */}
      <Routes>
{/*         <Route path='/login' element={<Login />} />
        <Route path='/private' element={<PrivateOutlet />} >
          <Route path='/private/todos' element={<Todos />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;