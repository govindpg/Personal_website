import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { HashLoader

} from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            margin: '0 auto',
            backgroundColor: '#262A56',
          }}
        >
          <HashLoader

 color={'#A084DC'} size={100} speedMultiplier={1} />
        </div>
      ) : (
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
