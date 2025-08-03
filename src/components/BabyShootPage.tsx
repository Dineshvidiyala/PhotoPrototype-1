import React from 'react';
import ImageCarousel from './ImageCarousel';

const BabyShootPage: React.FC = () => {
  const babyImages = [
    'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1648378/pexels-photo-1648378.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1648376/pexels-photo-1648376.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1648378/pexels-photo-1648378.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1648376/pexels-photo-1648376.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1648379/pexels-photo-1648379.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
              Baby Photography
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Capturing the innocence, wonder, and pure joy of your little ones. Our gentle approach 
              ensures comfortable sessions that preserve these fleeting moments of childhood.
            </p>
          </div>

          {/* Main Carousel */}
          <div className="mb-16">
            <ImageCarousel images={babyImages} />
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Precious Little Moments
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Every baby is unique, and our photography sessions are tailored to capture their individual 
              personality and charm. We work at your baby's pace, ensuring they are comfortable and happy 
              throughout the session, resulting in natural, heartwarming photographs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From newborn sessions that capture those first precious days to milestone sessions that 
              document their growth, we create timeless portraits that families will treasure forever. 
              Our studio is equipped with safe, comfortable props and settings perfect for little ones.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-gray-900 text-center mb-8">
              Baby Photography Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={image}
                    alt={`Baby photo ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-light text-gray-900 text-center mb-8">
              Baby Photography Services
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Newborn Sessions</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• 0-14 days old sessions</li>
                  <li>• Safe posing techniques</li>
                  <li>• Studio and home sessions</li>
                  <li>• Family and sibling photos</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Milestone Sessions</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• 3, 6, 9, and 12-month sessions</li>
                  <li>• First birthday celebrations</li>
                  <li>• Cake smash sessions</li>
                  <li>• Growth documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BabyShootPage;