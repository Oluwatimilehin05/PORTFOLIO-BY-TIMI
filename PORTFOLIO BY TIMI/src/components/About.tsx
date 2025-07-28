import { GraduationCap, Lightbulb, Heart, Code } from 'lucide-react';

const About = () => {
  const educationData = [
    {
      year: '2018-2022',
      title: 'Mass Communication',
      institution: 'Joseph Ayo Babalola University',
      description: 'Developed strong communication and storytelling skills'
    },
    {
      year: '2024-Present',
      title: 'Graduate Training Program',
      institution: 'Sail Innovation Lab',
      description: 'Full-stack development with focus on modern web technologies',
      isCurrent: true
    }
  ];

  const funFacts = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: 'Clone Enthusiast',
      description: 'I love cloning popular platforms to understand how they work under the hood'
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-secondary" />,
      title: 'Creative Problem Solver',
      description: 'I approach technical challenges with creative solutions'
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: 'User-Focused',
      description: 'I believe great applications start with understanding user needs'
    }
  ];

  return (
    <section id="about" className="py-20 bg-navy-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-glow">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A passionate storyteller who found her way into code, bringing creativity and logic together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Professional Bio */}
            <div className="space-y-8">
              <div className="card-elegant">
                <h3 className="font-playfair font-semibold text-2xl md:text-3xl mb-6 text-primary">
                  My Journey
                </h3>
                <div className="space-y-6 text-text-secondary leading-relaxed">
                  <p>
                    My path into technology began with a love for communication and storytelling. 
                    After completing my degree in Mass Communication, I discovered the power of 
                    combining creative thinking with logical problem-solving through programming.
                  </p>
                  <p>
                    Currently training at Sail Innovation Lab, I'm expanding my full-stack 
                    development skills while bringing my unique perspective from mass communication, 
                    social media management, and entrepreneurship to every project I work on.
                  </p>
                  <p>
                    I'm particularly passionate about building user-focused web applications 
                    and understanding the intricacies of popular platforms by recreating them. 
                    This hands-on approach helps me learn not just the "how" but the "why" 
                    behind great user experiences.
                  </p>
                </div>
              </div>

              {/* Fun Facts */}
              <div className="card-elegant">
                <h3 className="font-playfair font-semibold text-2xl mb-6 text-secondary">
                  Fun Facts About Me
                </h3>
                <div className="space-y-6">
                  {funFacts.map((fact, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="mt-1">{fact.icon}</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{fact.title}</h4>
                        <p className="text-text-secondary">{fact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-8">
              <div className="card-elegant">
                <h3 className="font-playfair font-semibold text-2xl md:text-3xl mb-8 text-primary flex items-center">
                  <GraduationCap className="mr-3 text-secondary" size={32} />
                  Education & Training
                </h3>

                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

                  {educationData.map((item, index) => (
                    <div key={index} className="relative mb-12 last:mb-0">
                      {/* Timeline Dot */}
                      <div className={`absolute left-6 w-4 h-4 rounded-full border-2 ${
                        item.isCurrent 
                          ? 'bg-secondary border-secondary animate-glow' 
                          : 'bg-primary border-primary'
                      }`}></div>

                      {/* Content */}
                      <div className="ml-16 pb-8">
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                          item.isCurrent 
                            ? 'bg-secondary/20 text-secondary' 
                            : 'bg-primary/20 text-primary'
                        }`}>
                          {item.year}
                        </div>
                        <h4 className="font-playfair font-semibold text-xl mb-2 text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-text-secondary font-medium mb-3">
                          {item.institution}
                        </p>
                        <p className="text-text-secondary">
                          {item.description}
                        </p>
                        {item.isCurrent && (
                          <div className="mt-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                              Currently Learning Node.js
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Philosophy */}
              <div className="card-elegant">
                <h3 className="font-playfair font-semibold text-2xl mb-6 text-secondary">
                  My Philosophy
                </h3>
                <blockquote className="text-lg text-text-secondary leading-relaxed italic">
                  "Great technology solutions start with understanding people. 
                  My background in communication helps me build applications 
                  that don't just work well, but feel intuitive and delightful to use."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;