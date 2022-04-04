import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home.comp';

function App() {
  return (
    <>
      <header className=''>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
