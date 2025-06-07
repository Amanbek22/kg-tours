import React from 'react';
import { Calendar, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Tours = () => {
  const navigate = useNavigate();

  const tours = [
    {
      id: 'nomad-life',
      title: "7-Day Nomad Life Experience",
      description: "Live like a true nomad with local families, learn traditional crafts, and sleep under the stars in authentic yurts.",
      image: "https://images.pexels.com/photos/8828835/pexels-photo-8828835.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "7 days",
      groupSize: "4-8 people",
      rating: 4.9,
      price: "From $850"
    },
    {
      id: 'song-kul',
      title: "Horseback Trek to Song-Kul",
      description: "Ride through alpine meadows to the pristine Song-Kul lake, one of Kyrgyzstan's most beautiful high-altitude destinations.",
      image: "https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "5 days",
      groupSize: "2-6 people",
      rating: 4.8,
      price: "From $650"
    },
    {
      id: 'winter-tien-shan',
      title: "Winter Adventures in Tien Shan",
      description: "Discover the magical winter landscape of Tien Shan mountains with skiing, snow hiking, and cozy yurt experiences.",
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "6 days",
      groupSize: "4-10 people",
      rating: 4.7,
      price: "From $750"
    }
  ];

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Popular Tours</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted adventures that showcase the best of Kyrgyzstan's 
            natural beauty and cultural heritage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{tour.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{tour.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">{tour.price}</span>
                  <button 
                    onClick={() => navigate(`/tours/${tour.id}`)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            See All Tours
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tours;