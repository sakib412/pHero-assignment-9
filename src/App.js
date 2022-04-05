import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.comp';
import Header from './components/Header/Header.comp';
import Home from './components/Home/Home.comp';
import NotFound from './components/NotFound/NotFound.comp';
import ReviewPage from './components/Reviews/ReviewPage.comp';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reviews' element={<ReviewPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
