import { Video, Users, Palette, FileText, Calendar, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: 'Video Editing & Production',
      description: 'Professional video editing services using CapCut, Filmora, and ClipChamp. From concept to final cut, creating engaging visual content.',
      features: [
        'Mobile video production',
        'Social media content',
        'Promotional videos',
        'Story-driven editing'
      ],
      gradient: 'from-primary to-secondary'
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: 'Social Media Management',
      description: 'Complete social media strategy and management. Building brand presence, engaging communities, and driving growth across platforms.',
      features: [
        'Content strategy development',
        'Community management',
        'Performance analytics',
        'Brand voice development'
      ],
      gradient: 'from-secondary to-primary'
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Content Strategy',
      description: 'Strategic content planning that aligns with business goals. Creating compelling narratives that resonate with target audiences.',
      features: [
        'Content audits',
        'Audience research',
        'Editorial calendars',
        'Performance optimization'
      ],
      gradient: 'from-primary to-secondary'
    },
    {
      icon: <Palette className="w-8 h-8 text-secondary" />,
      title: 'Graphic Design & Branding',
      description: 'Visual identity creation using Canva and Freepik. Designing cohesive brand elements that tell your story effectively.',
      features: [
        'Brand identity design',
        'Social media graphics',
        'Marketing materials',
        'Visual storytelling'
      ],
      gradient: 'from-secondary to-primary'
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: 'Scriptwriting & Storytelling',
      description: 'Compelling scripts and stories for various media. Combining communication expertise with creative narrative development.',
      features: [
        'Video scripts',
        'Social media copy',
        'Brand storytelling',
        'Content writing'
      ],
      gradient: 'from-primary to-secondary'
    },
    {
      icon: <Calendar className="w-8 h-8 text-secondary" />,
      title: 'Content Calendar Planning',
      description: 'Strategic content planning and scheduling. Ensuring consistent, timely, and relevant content across all platforms.',
      features: [
        'Editorial calendar creation',
        'Content scheduling',
        'Campaign planning',
        'Multi-platform coordination'
      ],
      gradient: 'from-secondary to-primary'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-glow">
              Services & <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Comprehensive creative and strategic services to elevate your brand and engage your audience
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-elegant group hover:scale-[1.02] transition-all duration-500"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="font-playfair font-semibold text-xl md:text-2xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="card-elegant bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <h3 className="font-playfair font-semibold text-2xl md:text-3xl mb-4 text-foreground">
                Ready to Work Together?
              </h3>
              <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how my creative and strategic expertise can help bring your vision to life. 
                I'm passionate about creating content that not only looks great but drives real results.
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gradient"
              >
                Let's Start a Project
              </button>
            </div>
          </div>

          {/* Service Process */}
          <div className="mt-16">
            <h3 className="font-playfair font-semibold text-2xl md:text-3xl text-center mb-12 text-foreground">
              My <span className="text-primary">Process</span>
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your goals and audience' },
                { step: '02', title: 'Strategy', desc: 'Developing a tailored approach' },
                { step: '03', title: 'Creation', desc: 'Bringing ideas to life with precision' },
                { step: '04', title: 'Optimization', desc: 'Refining based on performance data' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;