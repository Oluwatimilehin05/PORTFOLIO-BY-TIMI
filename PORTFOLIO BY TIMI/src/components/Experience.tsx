import { Briefcase, Users, Mic, Video, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Social Media Manager',
      companies: ['Ophir & Dophiras', 'Jenik Logistics', 'Freelance'],
      duration: '2+ years',
      period: '2022 - Present',
      description: 'Led social media strategy and content creation for multiple brands, increasing engagement and building strong online communities.',
      achievements: [
        'Developed comprehensive content strategies',
        'Managed multiple brand accounts',
        'Created engaging visual content',
        'Analyzed performance metrics and optimized campaigns'
      ],
      isOngoing: true
    },
    {
      icon: <Briefcase className="w-8 h-8 text-secondary" />,
      title: 'Entrepreneur',
      companies: ['The Legacy Plate'],
      duration: 'Ongoing',
      period: '2023 - Present',
      description: 'Founded and operate a successful food business, managing all aspects from operations to marketing.',
      achievements: [
        'Built brand from concept to execution',
        'Developed customer acquisition strategies',
        'Managed operations and logistics',
        'Created cohesive brand identity'
      ],
      isOngoing: true
    },
    {
      icon: <Mic className="w-8 h-8 text-primary" />,
      title: 'Radio Presenter',
      companies: ['Local Radio Station'],
      duration: '1 year',
      period: '2021 - 2022',
      description: 'Hosted radio programs, conducted interviews, and created engaging content for diverse audiences.',
      achievements: [
        'Hosted live radio shows',
        'Conducted compelling interviews',
        'Developed strong communication skills',
        'Built rapport with diverse audiences'
      ],
      isOngoing: false
    },
    {
      icon: <Video className="w-8 h-8 text-secondary" />,
      title: 'Mobile Videographer',
      companies: ['Freelance'],
      duration: '1+ year',
      period: '2023 - Present',
      description: 'Specialized in mobile video production, creating compelling visual content for various clients and projects.',
      achievements: [
        'Produced high-quality mobile videos',
        'Developed efficient workflow processes',
        'Collaborated with diverse clients',
        'Stayed current with video trends'
      ],
      isOngoing: true
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-glow">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A diverse journey across media, entrepreneurship, and creative content production
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="card-elegant group hover:scale-[1.02] transition-all duration-500"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="font-playfair font-semibold text-xl md:text-2xl text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {exp.companies.map((company, i) => (
                          <span key={i} className="text-text-secondary text-sm">
                            {company}{i < exp.companies.length - 1 && ', '}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {exp.isOngoing && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                      Active
                    </span>
                  )}
                </div>

                {/* Duration */}
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-text-secondary font-medium">{exp.period}</span>
                  <span className="text-primary">•</span>
                  <span className="text-text-secondary">{exp.duration}</span>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-text-secondary text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-2">2+</div>
              <div className="text-text-secondary">Years in Social Media</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-2">3+</div>
              <div className="text-text-secondary">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-2">1</div>
              <div className="text-text-secondary">Successful Business</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-2">∞</div>
              <div className="text-text-secondary">Creative Ideas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;