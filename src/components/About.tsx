export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600 rounded-lg opacity-20"></div>
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Company
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2015, our company has been at the forefront of technological innovation, helping businesses across various industries streamline their operations and achieve growth.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team of experts brings together decades of experience in software development, business strategy, and customer service to deliver solutions that truly make a difference.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">200+</p>
                <p className="text-gray-600">Clients Worldwide</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">15+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};