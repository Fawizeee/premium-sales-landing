import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send, Star, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Premium Sales NG Landing Page
 * Design: Bold Premium Showcase
 * - Dark background (#0f0f0f) with gold accents (#ffd700)
 * - Modern sans-serif typography (Montserrat + Open Sans)
 * - Card-based layout with depth and hover effects
 * - Smooth animations and transitions
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const services = [
    {
      title: "ChatGPT Plus",
      description: "Advanced AI conversations with GPT-4 access. Instant delivery with 24hr replacement guarantee.",
      icon: "💬",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663568831975/c7tbLzArU8cuKkAp8HWMCd/chatgpt-card-visual-P7GPfbQdgVRETDM4sjGPHy.webp",
      features: ["GPT-4 Access", "Priority Support", "Custom GPT"],
    },
    {
      title: "Claude Pro",
      description: "Anthropic's most capable AI. Perfect for complex tasks and creative projects.",
      icon: "🧠",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663568831975/c7tbLzArU8cuKkAp8HWMCd/claude-card-visual-ntvgmGPYmhsAsuoJEhZaHQ.webp",
      features: ["100K Context", "Advanced Analysis", "Code Generation"],
    },
    {
      title: "Midjourney",
      description: "Create stunning AI-generated art and images. Unlimited creativity at your fingertips.",
      icon: "🎨",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663568831975/c7tbLzArU8cuKkAp8HWMCd/midjourney-card-visual-WZ446CGksP5sFet9K2yTgr.webp",
      features: ["Unlimited Generations", "High Quality", "Fast Processing"],
    },
    {
      title: "Gemini Advanced",
      description: "Google's multimodal AI. Process text, images, and more with advanced reasoning.",
      icon: "✨",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663568831975/c7tbLzArU8cuKkAp8HWMCd/hero-background-2oo6gKZxX7YsD94NngyVRK.webp",
      features: ["Multimodal", "Real-time Data", "Advanced Reasoning"],
    },
    {
      title: "Adobe Photoshop",
      description: "Professional image editing and design software. Industry standard for creators.",
      icon: "🖼️",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663568831975/c7tbLzArU8cuKkAp8HWMCd/hero-background-2oo6gKZxX7YsD94NngyVRK.webp",
      features: ["Full Suite", "Cloud Sync", "AI Tools"],
    },
    {
      title: "Canva Pro",
      description: "Design anything. From social media to presentations with ease.",
      icon: "🎭",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663568831975/c7tbLzArU8cuKkAp8HWMCd/hero-background-2oo6gKZxX7YsD94NngyVRK.webp",
      features: ["Templates", "Brand Kit", "Magic Design"],
    },
  ];

  const testimonials = [
    {
      name: "Chukwu M.",
      role: "Content Creator",
      comment: "Best service! Instant delivery and excellent support. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amara T.",
      role: "Digital Marketer",
      comment: "Premium quality accounts at affordable prices. Worth every naira!",
      rating: 5,
    },
    {
      name: "David O.",
      role: "Software Developer",
      comment: "Reliable and trustworthy. Been using for months without issues.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground font-bold">PS</span>
            </div>
            <span className="font-bold text-lg">Premium Sales NG</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#services" className="text-sm hover:text-accent transition">Services</a>
            <a href="#contact" className="text-sm hover:text-accent transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663568831975/c7tbLzArU8cuKkAp8HWMCd/hero-background-2oo6gKZxX7YsD94NngyVRK.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />

        <div className="container relative z-20 text-center">
          <div className="mb-8 inline-block">
            <div className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5">
              <span className="text-accent text-sm font-semibold">🏆 Premium Quality Guaranteed</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium AI Tools & Software
            <span className="block text-accent">At Your Fingertips</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Access the world's best AI tools and premium software. Instant delivery, 24-hour replacement guarantee, and 24/7 support via WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent/50 text-accent hover:bg-accent/10"
              onClick={() => window.open("https://chat.whatsapp.com/Eg30HmGTwDm8egaHibg6Gr")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-sm">
            <div className="p-3 rounded-lg bg-card/50 border border-border/50">
              <div className="text-accent font-bold text-lg">100%</div>
              <div className="text-muted-foreground">Original Accounts</div>
            </div>
            <div className="p-3 rounded-lg bg-card/50 border border-border/50">
              <div className="text-accent font-bold text-lg">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
            <div className="p-3 rounded-lg bg-card/50 border border-border/50">
              <div className="text-accent font-bold text-lg">Instant</div>
              <div className="text-muted-foreground">Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully curated selection of premium AI tools and software
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-card border-border/50 hover:border-accent/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/10 to-transparent">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="p-6">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Order Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Premium Sales NG?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8 text-accent" />,
                title: "Instant Delivery",
                description: "Get your accounts within minutes of purchase",
              },
              {
                icon: <Star className="w-8 h-8 text-accent" />,
                title: "24hr Guarantee",
                description: "Free replacement if any issue within 24 hours",
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-accent" />,
                title: "24/7 Support",
                description: "Dedicated support team on WhatsApp and Telegram",
              },
              {
                icon: <Mail className="w-8 h-8 text-accent" />,
                title: "Original Accounts",
                description: "100% genuine and verified accounts only",
              },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border/50 p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get Your Premium Account Today</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below or reach out via WhatsApp for instant support
            </p>
          </div>

          <Card className="bg-card border-border/50 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Tell us which service you're interested in..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground min-h-32"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-center text-muted-foreground mb-4">Or reach out directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-accent/50 text-accent hover:bg-accent/10"
                  onClick={() => window.open("https://chat.whatsapp.com/Eg30HmGTwDm8egaHibg6Gr")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="border-accent/50 text-accent hover:bg-accent/10"
                  onClick={() => window.open("https://t.me/+2WISnXihroFkN2Q0")}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Telegram
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-card/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Premium Sales NG</h3>
              <p className="text-sm text-muted-foreground">
                Your trusted source for premium AI tools and software with instant delivery and 24/7 support.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-accent transition">Services</a></li>
                <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
                <li><a href="#" className="hover:text-accent transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://chat.whatsapp.com/Eg30HmGTwDm8egaHibg6Gr"
                    className="text-accent hover:text-accent/80 transition"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/+2WISnXihroFkN2Q0"
                    className="text-accent hover:text-accent/80 transition"
                  >
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Premium Sales NG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
