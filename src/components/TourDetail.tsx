import React from 'react';
import { ArrowLeft, Calendar, Users, Star, MapPin, Check, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TourDetailProps {
  tourId: string;
}

const TourDetail: React.FC<TourDetailProps> = ({ tourId }) => {
  const navigate = useNavigate();

  const tourData = {
    'nomad-life': {
      title: "7-Day Nomad Life Experience",
      subtitle: "Live Like a True Nomad",
      description: "Immerse yourself in authentic nomadic culture with local families in the heart of Kyrgyzstan. This transformative journey takes you beyond typical tourism to experience the genuine lifestyle of Kyrgyz nomads.",
      image: "https://images.pexels.com/photos/8828835/pexels-photo-8828835.jpeg?auto=compress&cs=tinysrgb&w=1200",
      gallery: [
        "https://images.pexels.com/photos/8828835/pexels-photo-8828835.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8129831/pexels-photo-8129831.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      duration: "7 days / 6 nights",
      groupSize: "4-8 people",
      rating: 4.9,
      price: "$850",
      difficulty: "Easy to Moderate",
      season: "May - October",
      highlights: [
        "Stay with nomadic families in traditional yurts",
        "Learn traditional crafts like felt-making and horse milking",
        "Participate in daily nomadic activities",
        "Enjoy authentic Kyrgyz cuisine",
        "Experience horseback riding across alpine meadows",
        "Sleep under pristine starry skies",
        "Visit local markets and cultural sites"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bishkek",
          description: "Airport pickup, city orientation, traditional dinner, and briefing about the upcoming adventure."
        },
        {
          day: 2,
          title: "Journey to Kochkor Valley",
          description: "Drive to Kochkor Valley, meet your host family, settle into your yurt, and learn about nomadic traditions."
        },
        {
          day: 3,
          title: "Nomadic Life Immersion",
          description: "Participate in daily activities: milking mares, making kumys, felt-making workshop, and horseback riding."
        },
        {
          day: 4,
          title: "Alpine Meadow Trek",
          description: "Horseback trek to high-altitude pastures, picnic lunch with panoramic views, return for traditional dinner."
        },
        {
          day: 5,
          title: "Cultural Exchange Day",
          description: "Visit neighboring nomadic families, learn traditional games, participate in cooking authentic dishes."
        },
        {
          day: 6,
          title: "Farewell Celebration",
          description: "Traditional farewell ceremony, cultural performances, final horseback ride, and celebration dinner."
        },
        {
          day: 7,
          title: "Return to Bishkek",
          description: "Morning departure, scenic drive back to Bishkek, souvenir shopping, and airport transfer."
        }
      ],
      included: [
        "All accommodation (yurts and guesthouse)",
        "All meals during the tour",
        "Professional English-speaking guide",
        "Transportation in comfortable vehicle",
        "Horseback riding equipment",
        "Cultural activities and workshops",
        "Airport transfers"
      ],
      notIncluded: [
        "International flights",
        "Travel insurance",
        "Personal expenses",
        "Alcoholic beverages",
        "Tips for guides and drivers"
      ]
    },
    'song-kul': {
      title: "Horseback Trek to Song-Kul",
      subtitle: "Alpine Lake Adventure",
      description: "Embark on an unforgettable horseback journey to Song-Kul, one of Kyrgyzstan's most pristine high-altitude lakes. This adventure combines stunning landscapes with authentic nomadic experiences.",
      image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSrgaOuiS-drasFckz7H3lfUtjf-vx5XzWKiw7sbA0v_eRq8goKhbGCmgRHVsZuAgBehBYN5GmpAYfczIQsL7crtkqFALNcCMdisiDffA",
      gallery: [
        "https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8828835/pexels-photo-8828835.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      duration: "5 days / 4 nights",
      groupSize: "2-6 people",
      rating: 4.8,
      price: "$650",
      difficulty: "Moderate",
      season: "June - September",
      highlights: [
        "Horseback trek through pristine alpine meadows",
        "Camping at 3,000m altitude Song-Kul lake",
        "Stunning sunrise and sunset views",
        "Traditional yurt accommodation",
        "Eagle hunting demonstration",
        "Fresh trout fishing in the lake",
        "Stargazing in unpolluted skies"
      ],
      itinerary: [
        {
          day: 1,
          title: "Bishkek to Kochkor",
          description: "Drive to Kochkor, meet your horses and guide, equipment check, overnight in guesthouse."
        },
        {
          day: 2,
          title: "Trek to Song-Kul",
          description: "Begin horseback trek through Kalmak-Ashuu pass (3,400m), arrive at Song-Kul lake, set up camp."
        },
        {
          day: 3,
          title: "Song-Kul Exploration",
          description: "Full day exploring the lake area, fishing, visiting shepherd families, traditional lunch by the lake."
        },
        {
          day: 4,
          title: "Return Journey",
          description: "Morning at the lake, horseback return via different route, overnight in Kochkor valley."
        },
        {
          day: 5,
          title: "Return to Bishkek",
          description: "Leisurely morning, drive back to Bishkek with stops at local markets and scenic viewpoints."
        }
      ],
      included: [
        "Horseback riding with equipment",
        "Professional guide and horse handler",
        "Camping equipment and tents",
        "All meals during trek",
        "Transportation to/from Bishkek",
        "Accommodation in Kochkor",
        "Permits and entrance fees"
      ],
      notIncluded: [
        "Personal riding equipment",
        "Sleeping bags",
        "Travel insurance",
        "Personal expenses",
        "Alcoholic beverages"
      ]
    },
    'winter-tien-shan': {
      title: "Winter Adventures in Tien Shan",
      subtitle: "Magical Winter Wonderland",
      description: "Discover the enchanting winter beauty of Tien Shan mountains with skiing, snow hiking, and cozy yurt experiences. Perfect for winter adventure enthusiasts.",
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200",
      gallery: [
        "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8828835/pexels-photo-8828835.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      duration: "6 days / 5 nights",
      groupSize: "4-10 people",
      rating: 4.7,
      price: "$750",
      difficulty: "Moderate to Challenging",
      season: "December - March",
      highlights: [
        "Skiing at Karakol Ski Resort",
        "Snow hiking in pristine valleys",
        "Traditional winter yurt experience",
        "Hot springs relaxation",
        "Winter wildlife spotting",
        "Traditional winter foods",
        "Northern lights viewing opportunities"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival and Karakol",
          description: "Fly to Bishkek, drive to Karakol, check into accommodation, equipment fitting and briefing."
        },
        {
          day: 2,
          title: "Skiing Adventure",
          description: "Full day skiing at Karakol Ski Resort, ski lessons for beginners, evening in traditional Russian banya."
        },
        {
          day: 3,
          title: "Winter Yurt Experience",
          description: "Move to winter yurt camp, snow hiking, traditional winter activities, stargazing session."
        },
        {
          day: 4,
          title: "Altyn Arashan Hot Springs",
          description: "Trek to Altyn Arashan hot springs, relaxation in natural thermal pools, overnight in heated yurt."
        },
        {
          day: 5,
          title: "Winter Wildlife Safari",
          description: "Early morning wildlife spotting, visit to local winter market, traditional cooking class."
        },
        {
          day: 6,
          title: "Return to Bishkek",
          description: "Morning departure, scenic winter drive back to Bishkek, farewell dinner, airport transfer."
        }
      ],
      included: [
        "Ski equipment rental",
        "Professional ski instructor",
        "Winter clothing rental",
        "Heated accommodation",
        "All meals and hot drinks",
        "Transportation in winter vehicles",
        "Hot springs entrance fees"
      ],
      notIncluded: [
        "International flights",
        "Personal winter gear",
        "Travel insurance",
        "Ski lift tickets",
        "Personal expenses"
      ]
    }
  };

  const tour = tourData[tourId as keyof typeof tourData];

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const scrollToBooking = () => {
    navigate('/', { state: { scrollToBooking: true } });
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 mx-auto"
            >
              <ArrowLeft size={20} />
              Back to Tours
            </button>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{tour.title}</h1>
            <p className="text-xl md:text-2xl opacity-90">{tour.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{tour.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{tour.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{tour.groupSize}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-gray-700">{tour.rating} rating</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">{tour.difficulty}</span>
                </div>
              </div>
            </section>

            {/* Highlights */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tour Highlights</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Daily Itinerary</h3>
              <div className="space-y-6">
                {tour.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-6 pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                        {day.day}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">{day.title}</h4>
                    </div>
                    <p className="text-gray-700">{day.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tour.gallery.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`${tour.title} gallery ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Included/Not Included */}
            <section className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                <div className="space-y-2">
                  {tour.included.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Not Included</h3>
                <div className="space-y-2">
                  {tour.notIncluded.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-4 h-4 border border-gray-400 rounded mt-1 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">{tour.price}</div>
                <div className="text-gray-600">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{tour.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Group Size:</span>
                  <span className="font-semibold">{tour.groupSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty:</span>
                  <span className="font-semibold">{tour.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Best Season:</span>
                  <span className="font-semibold">{tour.season}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={scrollToBooking}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Book This Tour
                </button>
                <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Heart size={18} />
                  Add to Wishlist
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="font-bold">{tour.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600">Based on guest reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;