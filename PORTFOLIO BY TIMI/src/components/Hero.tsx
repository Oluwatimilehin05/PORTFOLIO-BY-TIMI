import { ArrowDown, Github, Instagram, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-light to-navy-deep opacity-90"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo Placeholder */}
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full p-1">
              <div className="w-full h-full bg-muted rounded-full flex items-center justify-center text-6xl font-playfair text-primary">
                T
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-glow animate-fade-in-up">
            Oluwatimilehin
            <br />
            <span className="text-primary">Agbejobi Deborah</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-inter font-light text-text-secondary mb-8 animate-fade-in-up stagger-1">
            Developer. Strategist. Creator.
          </p>

          {/* Bio */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-secondary leading-relaxed mb-12 animate-fade-in-up stagger-2">
            I'm a passionate software developer currently undergoing graduate training at Sail Innovation Lab. 
            With a background in Mass Communication and hands-on experience in social media management and 
            entrepreneurship, I bring a unique blend of creativity and logic to tech projects.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up stagger-3">
            <button
              onClick={scrollToPortfolio}
              className="btn-gradient group"
            >
              View My Work
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
            </button>
            <button
              onClick={scrollToContact}
              className="btn-outline-glow"
            >
              Let's Connect
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 animate-fade-in-up stagger-4">
            <a
              href="https://github.com/Oluwatimilehin05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://instagram.com/_thimmy_blue"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-secondary transition-colors duration-300 hover:scale-110 transform"
            >
              <Instagram size={24} />
            </a>
            <a
              href="mailto:oluwatimilehinagbejobi7@gmail.com"
              className="text-text-secondary hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;