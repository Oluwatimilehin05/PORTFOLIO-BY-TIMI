import { useState } from 'react';
import { Code, Brain, Wrench, Star } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = {
    technical: {
      title: 'Technical Skills',
      icon: <Code className="w-6 h-6" />,
      color: 'primary',
      skills: [
        { name: 'HTML & CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 60, isLearning: true },
        { name: 'Figma', level: 85 },
        { name: 'Git & GitHub', level: 75 },
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: <Brain className="w-6 h-6" />,
      color: 'secondary',
      skills: [
        { name: 'Communication', level: 95 },
        { name: 'Creativity', level: 90 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Adaptability', level: 88 },
        { name: 'Leadership', level: 80 },
        { name: 'Time Management', level: 85 },
      ]
    },
    tools: {
      title: 'Creative & Professional Tools',
      icon: <Wrench className="w-6 h-6" />,
      color: 'primary',
      skills: [
        { name: 'Canva', level: 95 },
        { name: 'CapCut', level: 90 },
        { name: 'Filmora', level: 85 },
        { name: 'ClipChamp', level: 80 },
        { name: 'Microsoft Office', level: 90 },
        { name: 'Freepik', level: 85 },
      ]
    }
  };

  return (
    <section id="skills" className="py-20 bg-navy-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-glow">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A blend of technical proficiency, creative thinking, and professional tools
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r from-${category.color} to-secondary text-primary-foreground shadow-lg scale-105`
                    : 'bg-card text-text-secondary hover:text-foreground hover:scale-105'
                }`}
              >
                {category.icon}
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="card-elegant">
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="space-y-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Skill Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      {skill.isLearning && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                          <Star className="w-3 h-3 mr-1" />
                          Learning
                        </span>
                      )}
                    </div>
                    <span className="text-text-secondary font-medium">{skill.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Badge */}
            {activeCategory === 'technical' && (
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Star className="w-6 h-6 text-secondary" />
                  <h4 className="font-playfair font-semibold text-xl text-foreground">Currently Expanding</h4>
                </div>
                <p className="text-text-secondary">
                  Actively learning Node.js and backend development to become a full-stack developer. 
                  Always exploring new technologies and frameworks to stay current with industry trends.
                </p>
              </div>
            )}
          </div>

          {/* Skill Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center card-elegant">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-3 text-foreground">Frontend Development</h3>
              <p className="text-text-secondary">
                Creating responsive, user-friendly interfaces with modern frameworks and best practices.
              </p>
            </div>

            <div className="text-center card-elegant">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-3 text-foreground">Strategic Thinking</h3>
              <p className="text-text-secondary">
                Combining analytical and creative thinking to solve complex problems and create effective solutions.
              </p>
            </div>

            <div className="text-center card-elegant">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-3 text-foreground">Content Creation</h3>
              <p className="text-text-secondary">
                Proficient in video editing, graphic design, and content strategy across multiple platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;