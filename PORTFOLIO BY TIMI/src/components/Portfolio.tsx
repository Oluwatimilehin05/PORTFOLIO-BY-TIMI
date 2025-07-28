import { useState } from 'react';
import { ExternalLink, Github, Code, Palette } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'PiggyVest Clone',
      type: 'clone',
      category: 'tech',
      description: 'A pixel-perfect clone of the PiggyVest savings platform, focusing on responsive design and user experience.',
      techStack: ['React', 'CSS', 'JavaScript'],
      image: '/placeholder-piggyvest.jpg',
      github: 'https://github.com/Oluwatimilehin05',
      demo: '#',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Kuda Clone',
      type: 'clone',
      category: 'tech',
      description: 'Recreation of Kuda Bank\'s landing page with modern banking interface and smooth animations.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      image: '/placeholder-kuda.jpg',
      github: 'https://github.com/Oluwatimilehin05',
      demo: '#',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Moove Clone',
      type: 'clone',
      category: 'tech',
      description: 'Ride-sharing platform interface clone with booking functionality and driver tracking features.',
      techStack: ['React', 'CSS', 'JavaScript'],
      image: '/placeholder-moove.jpg',
      github: 'https://github.com/Oluwatimilehin05',
      demo: '#',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Coolors Clone',
      type: 'clone',
      category: 'tech',
      description: 'Color palette generator inspired by Coolors.co, featuring dynamic color generation and export functionality.',
      techStack: ['JavaScript', 'CSS', 'HTML'],
      image: '/placeholder-coolors.jpg',
      github: 'https://github.com/Oluwatimilehin05',
      demo: '#',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Meta AI Clone',
      type: 'clone',
      category: 'tech',
      description: 'AI chat interface clone with modern design and interactive conversation features.',
      techStack: ['React', 'CSS', 'JavaScript'],
      image: '/placeholder-meta-ai.jpg',
      github: 'https://github.com/Oluwatimilehin05',
      demo: '#',
      status: 'completed'
    },
    {
      id: 6,
      title: 'JavaScript Grade Converter',
      type: 'personal',
      category: 'tech',
      description: 'A practical tool for converting numerical grades to letter grades with GPA calculation.',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      image: '/placeholder-grade-converter.jpg',
      github: 'https://github.com/Oluwatimilehin05',
      demo: '#',
      status: 'completed'
    },
    {
      id: 7,
      title: 'Moniepoint Clone',
      type: 'group',
      category: 'tech',
      description: 'Collaborative project recreating Moniepoint\'s fintech platform with team members.',
      techStack: ['React', 'CSS', 'JavaScript'],
      image: '/placeholder-moniepoint.jpg',
      github: 'https://github.com/Oluwatimilehin05',
      demo: '#',
      status: 'completed'
    },
    {
      id: 8,
      title: 'Brand Identity Package',
      type: 'creative',
      category: 'creative',
      description: 'Complete brand identity design for The Legacy Plate including logo, color palette, and marketing materials.',
      techStack: ['Canva', 'Freepik', 'Design'],
      image: '/placeholder-branding.jpg',
      status: 'completed'
    },
    {
      id: 9,
      title: 'Social Media Campaign',
      type: 'creative',
      category: 'creative',
      description: 'Multi-platform social media campaign with engaging visual content and strategic planning.',
      techStack: ['Canva', 'CapCut', 'Strategy'],
      image: '/placeholder-social-campaign.jpg',
      status: 'completed'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: <Code className="w-4 h-4" /> },
    { key: 'tech', label: 'Tech Projects', icon: <Code className="w-4 h-4" /> },
    { key: 'creative', label: 'Creative Work', icon: <Palette className="w-4 h-4" /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case 'clone': return 'bg-primary/20 text-primary';
      case 'personal': return 'bg-secondary/20 text-secondary';
      case 'group': return 'bg-accent/20 text-accent';
      case 'creative': return 'bg-gradient-to-r from-primary to-secondary text-primary-foreground';
      default: return 'bg-muted/20 text-muted-foreground';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-navy-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-glow">
              My <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A showcase of technical projects and creative work demonstrating my growth and expertise
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card text-text-secondary hover:text-foreground hover:scale-105'
                }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="card-elegant group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative mb-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl h-48 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl text-primary/30 font-playfair font-bold">
                    {project.title.split(' ')[0][0]}
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent"></div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-playfair font-semibold text-xl text-foreground mb-2">
                        {project.title}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getProjectTypeColor(project.type)}`}>
                        {project.type.charAt(0).toUpperCase() + project.type.slice(1)} Project
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-muted/20 text-text-secondary text-xs rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-xl text-text-secondary hover:text-foreground transition-colors duration-300"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl hover:scale-105 transition-transform duration-300"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-16 text-center">
            <div className="card-elegant bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <h3 className="font-playfair font-semibold text-2xl md:text-3xl mb-4 text-foreground">
                Explore More on GitHub
              </h3>
              <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                Check out my GitHub profile for more projects, code samples, and contributions to open source.
              </p>
              <a
                href="https://github.com/Oluwatimilehin05"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex items-center space-x-2"
              >
                <Github size={20} />
                <span>Visit GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;