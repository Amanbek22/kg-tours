import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TourDetailPage from './pages/TourDetailPage';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tours/:tourId" element={<TourDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;