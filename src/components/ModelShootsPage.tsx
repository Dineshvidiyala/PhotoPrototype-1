import React from 'react';
import ImageCarousel from './ImageCarousel';

const ModelShootsPage: React.FC = () => {
  const modelImages = [
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
              Model Photography
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional portrait sessions that showcase natural beauty and personality. 
              We create stunning images that capture confidence, elegance, and individual style.
            </p>
          </div>

          {/* Main Carousel */}
          <div className="mb-16">
            <ImageCarousel images={modelImages} />
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Professional Portrait Sessions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our model photography sessions are designed to bring out the best in every individual. 
              Whether you're building a portfolio, updating professional headshots, or celebrating 
              your unique style, we create images that are both striking and authentic.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We work with professional lighting, carefully chosen locations, and provide guidance 
              on posing and expression to ensure you feel confident and look your absolute best. 
              Every session is tailored to reflect your personality and goals.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-gray-900 text-center mb-8">
              Model Photography Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={image}
                    alt={`Model photo ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-light text-gray-900 text-center mb-8">
              Model Photography Services
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Portfolio Development</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Fashion and beauty portraits</li>
                  <li>• Commercial headshots</li>
                  <li>• Creative artistic sessions</li>
                  <li>• Multiple looks and styles</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Professional Sessions</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Corporate headshots</li>
                  <li>• Personal branding photos</li>
                  <li>• Social media content</li>
                  <li>• Lifestyle portraits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModelShootsPage;