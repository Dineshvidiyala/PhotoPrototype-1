import React from 'react';
import ImageCarousel from './ImageCarousel';

const WeddingPage: React.FC = () => {
  const weddingImages = [
    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1445527/pexels-photo-1445527.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
              Wedding Photography
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your wedding day is one of the most important days of your life. We capture every precious 
              moment with elegance, emotion, and artistry that will be treasured for generations.
            </p>
          </div>

          {/* Main Carousel */}
          <div className="mb-16">
            <ImageCarousel images={weddingImages} />
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Timeless Wedding Memories
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              From the intimate moments of preparation to the joyous celebration with family and friends, 
              we document your wedding story with a blend of photojournalistic and artistic approaches. 
              Our goal is to capture not just how your wedding looked, but how it felt.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We work closely with couples to understand their vision and ensure that every important 
              moment is beautifully preserved. Our unobtrusive style allows you to enjoy your day 
              naturally while we capture the magic as it unfolds.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-gray-900 text-center mb-8">
              Wedding Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={image}
                    alt={`Wedding photo ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-light text-gray-900 text-center mb-8">
              Wedding Photography Services
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Pre-Wedding</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Engagement sessions</li>
                  <li>• Bridal portraits</li>
                  <li>• Venue visits and planning</li>
                  <li>• Save the date photography</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Wedding Day</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Full day coverage</li>
                  <li>• Ceremony and reception</li>
                  <li>• Family and group portraits</li>
                  <li>• Candid moments and details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingPage;