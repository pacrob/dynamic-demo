import './App.css'

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import MintPage from './pages/MintPage';
import SendPage from './pages/SendPage';
import ChainsPage from './pages/ChainsPage';
import SecurityPage from './pages/SecurityPage';
import AaExplainerPage from './pages/AaExplainerPage';

function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mint" element={<MintPage />} />
          <Route path="/chains" element={<ChainsPage />} />
          <Route path="/aa" element={<AaExplainerPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/send" element={<SendPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App
