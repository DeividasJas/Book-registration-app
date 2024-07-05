import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div data-theme="dark" className='container m-auto pb-20'>
      <nav className='navbar bg-base-100 grid grid-cols-2'>
        <p className='btn btn-ghost text-4xl max-w-32 ml-5'><NavLink>Books</NavLink></p>
        <div>
          <p className='btn btn-ghost text-xl'><NavLink to={'/registration'}>Books registration</NavLink></p>
          <p className='btn btn-ghost text-xl'><NavLink to={'/reviews'}>Books reviews</NavLink></p>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
