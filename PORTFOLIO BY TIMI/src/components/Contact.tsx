import { useState } from 'react';
import { Mail, Phone, Instagram, Github, MapPin, Send, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      label: 'Email',
      value: 'oluwatimilehinagbejobi7@gmail.com',
      href: 'mailto:oluwatimilehinagbejobi7@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-secondary" />,
      label: 'Phone',
      value: '+234 802 704 9876',
      href: 'tel:+2348027049876'
    },
    {
      icon: <Instagram className="w-6 h-6 text-primary" />,
      label: 'Instagram',
      value: '@_thimmy_blue',
      href: 'https://instagram.com/_thimmy_blue'
    },
    {
      icon: <Github className="w-6 h-6 text-secondary" />,
      label: 'GitHub',
      value: '@Oluwatimilehin05',
      href: 'https://github.com/Oluwatimilehin05'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-glow">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Ready to collaborate? I'd love to hear about your project and discuss how we can work together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="card-elegant">
              <h3 className="font-playfair font-semibold text-2xl md:text-3xl mb-6 text-foreground">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-foreground font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-foreground font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-gradient w-full flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info & CTA */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="card-elegant">
                <h3 className="font-playfair font-semibold text-2xl md:text-3xl mb-6 text-foreground">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 bg-muted/10 rounded-xl hover:bg-muted/20 transition-all duration-300 group"
                    >
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-text-secondary text-sm">{info.label}</div>
                        <div className="text-foreground font-medium">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location & Availability */}
              <div className="card-elegant">
                <h3 className="font-playfair font-semibold text-xl mb-4 text-foreground flex items-center">
                  <MapPin className="mr-3 text-primary" size={24} />
                  Location & Availability
                </h3>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    <strong className="text-foreground">Based in:</strong> Nigeria
                  </p>
                  <p>
                    <strong className="text-foreground">Timezone:</strong> West Africa Time (WAT)
                  </p>
                  <p>
                    <strong className="text-foreground">Availability:</strong> Open to both local and remote collaborations
                  </p>
                  <div className="flex items-center space-x-2 mt-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">Available for new projects</span>
                  </div>
                </div>
              </div>

              {/* Quick Connect */}
              <div className="card-elegant bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <h3 className="font-playfair font-semibold text-xl mb-4 text-foreground">
                  Prefer a Quick Chat?
                </h3>
                <p className="text-text-secondary mb-6">
                  For urgent inquiries or quick questions, feel free to reach out directly via WhatsApp or email.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/2348027049876"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-glow flex-1 text-center"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="mailto:oluwatimilehinagbejobi7@gmail.com"
                    className="btn-gradient flex-1 text-center"
                  >
                    Email Me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center space-x-2 text-text-secondary">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-secondary" fill="currentColor" />
              <span>by Oluwatimilehin Agbejobi Deborah</span>
            </div>
            <p className="text-text-secondary text-sm mt-2">
              © 2024 All rights reserved. Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;