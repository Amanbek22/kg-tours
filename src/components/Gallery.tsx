import React from 'react';

const Gallery = () => {
  const images = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=500",
      alt: "Tien Shan mountains"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/8828835/pexels-photo-8828835.jpeg?auto=compress&cs=tinysrgb&w=500",
      alt: "Traditional yurt"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=500",
      alt: "Horseback riding"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/8129831/pexels-photo-8129831.jpeg?auto=compress&cs=tinysrgb&w=500",
      alt: "Local guide with horses"
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=500",
      alt: "Mountain lake reflection"
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=500",
      alt: "Traditional food"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience Kyrgyzstan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into the incredible landscapes, culture, and adventures waiting for you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className={`relative group overflow-hidden rounded-lg ${
                index === 0 || index === 3 ? 'md:row-span-2' : ''
              }`}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;