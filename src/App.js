import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.comp';
import Home from './components/Home/Home.comp';
import ReviewPage from './components/Reviews/ReviewPage.comp';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reviews' element={<ReviewPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
