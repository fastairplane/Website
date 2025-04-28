import { Zap, Shield, BarChart, RefreshCw, CheckCircle, Search } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Lightning Fast',
      description: 'Our solutions are optimized for speed, ensuring your business operates efficiently without delays.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Secure & Reliable',
      description: 'Security is our priority. We implement the latest standards to keep your data safe.'
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-600" />,
      title: 'Data Analytics',
      description: 'Gain valuable insights with our advanced analytics tools and make data-driven decisions.'
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-blue-600" />,
      title: 'Continuous Updates',
      description: 'We constantly improve our solutions with the latest technology and industry best practices.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: 'Quality Assured',
      description: 'Every feature undergoes rigorous testing to ensure the highest quality standards.'
    },
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: 'Advanced Search',
      description: 'Find what you need instantly with our powerful and intuitive search capabilities.'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-xl text-gray-600">
            Discover how our innovative solutions can help you achieve your business goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};