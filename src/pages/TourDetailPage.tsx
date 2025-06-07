import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import TourDetail from '../components/TourDetail';
import Footer from '../components/Footer';

const TourDetailPage = () => {
  const { tourId } = useParams<{ tourId: string }>();

  const validTourIds = ['nomad-life', 'song-kul', 'winter-tien-shan'];

  if (!tourId || !validTourIds.includes(tourId)) {
    return <Navigate to="/\" replace />;
  }

  return (
    <>
      <Header />
      <TourDetail tourId={tourId} />
      <Footer />
    </>
  );
};

export default TourDetailPage;