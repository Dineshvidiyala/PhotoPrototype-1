import React from 'react';
import { Camera, Heart, Baby, User } from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const services = [
    {
      id: 'wedding',
      title: 'Wedding Photography',
      description: 'Capturing your most precious moments with timeless elegance',
      icon: Heart,
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'baby-shoot',
      title: 'Baby Photography',
      description: 'Gentle and loving portraits of your little ones',
      icon: Baby,
      image: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'model-shoots',
      title: 'Model Photography',
      description: 'Professional portraits that showcase natural beauty',
      icon: User,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex justify-center mb-6">
            <Camera size={64} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            UV Shutters
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Photography
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Capturing life's most beautiful moments with timeless elegance and artistic vision
          </p>
          <button
            onClick={() => onPageChange('wedding')}
            className="bg-white text-gray-900 px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Our Work
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in capturing the essence of life's most precious moments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group cursor-pointer"
                  onClick={() => onPageChange(service.id)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center mb-3">
                        <IconComponent size={24} className="mr-3" />
                        <h3 className="text-xl font-medium">{service.title}</h3>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            About UV Shutters
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            With years of experience in capturing life's most beautiful moments, UV Shutters Photography 
            brings a unique blend of artistic vision and technical expertise to every shoot. We believe 
            that every photograph should tell a story, evoke emotion, and preserve memories that will 
            last a lifetime.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our approach is simple: we focus on natural, authentic moments while maintaining the highest 
            standards of professionalism and creativity. Whether it's your wedding day, a precious family 
            moment, or a professional portrait session, we're here to capture it beautifully.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;