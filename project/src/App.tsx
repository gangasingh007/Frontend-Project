import React, { useEffect, useState } from 'react';
import { 
  BarChart3, 
  TrendingDown, 
  Leaf, 
  Users, 
  PieChart, 
  Activity,
  ArrowRight,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  Settings,
  Cloud,
  Shield,
  Zap,
  Globe,
  Target,
  Award,
  Bell,
  Calendar,
  FileText,
  Smartphone,
  Database,
  Lock
} from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import TestimonialCard from './components/TestimonialCard';
import PricingCard from './components/PricingCard';
import IntegrationCard from './components/IntegrationCard';

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Animate elements on scroll
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', animateElements);
    animateElements(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', animateElements);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const statsData = [
    {
      title: "Managed portfolio carbon footprint",
      value: "45,048",
      unit: "tCO₂e",
      change: "+16%",
      positive: false,
      period: "from 2019",
      bars: [
        { year: "2022", value: "45,048", percentage: 85 },
        { year: "2021", value: "41,111", percentage: 78 },
        { year: "2020", value: "32,813", percentage: 62 },
        { year: "2019", value: "38,673", percentage: 73 }
      ]
    },
    {
      title: "Managed portfolio energy intensity",
      value: "123",
      unit: "kWh/m²",
      change: "-22%",
      positive: true,
      period: "from 2019",
      bars: [
        { year: "2022", value: "123", percentage: 78 },
        { year: "2021", value: "128", percentage: 82 },
        { year: "2020", value: "135", percentage: 86 },
        { year: "2019", value: "157", percentage: 100 }
      ]
    },
    {
      title: "Managed portfolio energy consumption",
      value: "47,790,662",
      unit: "kWh",
      change: "-27%",
      positive: true,
      period: "from 2019",
      bars: [
        { year: "2022", value: "47,790,662", percentage: 73 },
        { year: "2021", value: "49,324,077", percentage: 76 },
        { year: "2020", value: "48,784,205", percentage: 75 },
        { year: "2019", value: "65,198,706", percentage: 100 }
      ]
    },
    {
      title: "Carbon reduction achieved",
      value: "12,847",
      unit: "tCO₂e",
      change: "-34%",
      positive: true,
      period: "this year",
      bars: [
        { year: "Q4", value: "3,421", percentage: 95 },
        { year: "Q3", value: "3,156", percentage: 87 },
        { year: "Q2", value: "3,089", percentage: 85 },
        { year: "Q1", value: "3,181", percentage: 88 }
      ]
    }
  ];

  const features = [
    {
      icon: <BarChart3 size={24} />,
      title: "Advanced Analytics",
      description: "Comprehensive carbon footprint tracking with real-time insights and predictive modeling to help you make data-driven sustainability decisions.",
      link: "Learn more"
    },
    {
      icon: <TrendingDown size={24} />,
      title: "Emission Reduction",
      description: "Identify key areas for improvement and track your progress towards net-zero goals with our intelligent reduction recommendations.",
      link: "Explore features"
    },
    {
      icon: <PieChart size={24} />,
      title: "Portfolio Management",
      description: "Manage multiple properties and assets with detailed breakdowns of energy consumption, emissions, and sustainability metrics.",
      link: "View dashboard"
    },
    {
      icon: <Users size={24} />,
      title: "Team Collaboration",
      description: "Work together with your team using brand kits, shared dashboards, and collaborative tools for sustainability reporting.",
      link: "Start collaborating"
    },
    {
      icon: <Shield size={24} />,
      title: "Compliance Tracking",
      description: "Stay compliant with global environmental regulations and standards with automated reporting and audit trails.",
      link: "View compliance"
    },
    {
      icon: <Zap size={24} />,
      title: "Real-time Monitoring",
      description: "Monitor your carbon emissions in real-time with IoT integrations and automated data collection from your facilities.",
      link: "See monitoring"
    },
    {
      icon: <Globe size={24} />,
      title: "Global Standards",
      description: "Align with international frameworks like GHG Protocol, CDP, and TCFD for comprehensive sustainability reporting.",
      link: "Learn standards"
    },
    {
      icon: <Target size={24} />,
      title: "Goal Setting",
      description: "Set science-based targets and track progress with milestone tracking and automated progress reports.",
      link: "Set goals"
    }
  ];

  const brandKits = [
    { name: "ECorp", logo: "E", color: "#10B981", selected: false },
    { name: "ICorp", logo: "I", color: "#F59E0B", selected: false },
    { name: "The Agency", logo: "A", color: "#EF4444", selected: true },
    { name: "GreenTech", logo: "G", color: "#06B6D4", selected: false }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Sustainability Director",
      company: "TechCorp",
      content: "CarbonTrack has transformed how we approach sustainability. The insights are incredible and the platform is so intuitive to use.",
      rating: 5,
      avatar: "#10B981"
    },
    {
      name: "Michael Rodriguez",
      role: "Environmental Manager",
      company: "BuildCo",
      content: "The real-time monitoring and automated reporting have saved us countless hours while improving our environmental performance.",
      rating: 5,
      avatar: "#F59E0B"
    },
    {
      name: "Emma Thompson",
      role: "Chief Operations Officer",
      company: "RetailPlus",
      content: "Finally, a carbon management platform that scales with our business. The portfolio management features are game-changing.",
      rating: 5,
      avatar: "#EF4444"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for small businesses starting their sustainability journey",
      features: [
        "Up to 5 facilities",
        "Basic carbon tracking",
        "Monthly reports",
        "Email support",
        "Standard integrations"
      ],
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Advanced features for growing organizations",
      features: [
        "Up to 50 facilities",
        "Advanced analytics",
        "Real-time monitoring",
        "Custom reports",
        "Priority support",
        "API access",
        "Team collaboration"
      ],
      popular: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited facilities",
        "White-label options",
        "Custom integrations",
        "Dedicated support",
        "Advanced security",
        "SLA guarantee",
        "Training & onboarding"
      ],
      buttonText: "Contact Sales"
    }
  ];

  const integrations = [
    {
      name: "Salesforce",
      logo: "#00A1E0",
      description: "Sync sustainability data with your CRM",
      category: "CRM",
      connected: true
    },
    {
      name: "Microsoft Azure",
      logo: "#0078D4",
      description: "Cloud infrastructure monitoring",
      category: "Cloud",
      connected: false
    },
    {
      name: "SAP",
      logo: "#0FAAFF",
      description: "Enterprise resource planning integration",
      category: "ERP",
      connected: true
    },
    {
      name: "Tableau",
      logo: "#E97627",
      description: "Advanced data visualization",
      category: "Analytics",
      connected: false
    },
    {
      name: "Slack",
      logo: "#4A154B",
      description: "Team notifications and alerts",
      category: "Communication",
      connected: true
    },
    {
      name: "Power BI",
      logo: "#F2C811",
      description: "Business intelligence dashboards",
      category: "Analytics",
      connected: false
    }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="#" className="logo">
              <Leaf size={28} />
              CarbonTrack
            </a>
            <ul className="nav-links">
              <li><a href="#features" className="nav-link">Features</a></li>
              <li><a href="#analytics" className="nav-link">Analytics</a></li>
              <li><a href="#pricing" className="nav-link">Pricing</a></li>
              <li><a href="#integrations" className="nav-link">Integrations</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><ThemeToggle isDark={isDarkMode} onToggle={toggleTheme} /></li>
              <li><a href="#contact" className="cta-button">Get Started</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-on-scroll">
              <Award size={16} />
              Trusted by 500+ organizations worldwide
            </div>
            <h1>Manage Your Carbon Footprint with Precision</h1>
            <p>
              Track, analyze, and reduce your environmental impact with our comprehensive 
              sustainability platform. Get real-time insights and make data-driven decisions 
              for a greener future.
            </p>
            <div className="hero-buttons">
              <a href="#demo" className="cta-button">Start Free Trial</a>
              <a href="#features" className="secondary-button">Watch Demo</a>
            </div>
            <div className="hero-stats animate-on-scroll">
              <div className="hero-stat">
                <div className="hero-stat-number">2.5M+</div>
                <div className="hero-stat-label">Tons CO₂ Tracked</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">500+</div>
                <div className="hero-stat-label">Organizations</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">99.9%</div>
                <div className="hero-stat-label">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" id="analytics">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Portfolio Performance Overview</h2>
            <p className="section-subtitle">
              Track your sustainability metrics across your entire portfolio with detailed 
              year-over-year comparisons and trend analysis.
            </p>
          </div>
          
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-card animate-on-scroll">
                <div className="stat-header">
                  <div className="stat-title">{stat.title}</div>
                  <div className="stat-unit">{stat.unit}</div>
                </div>
                
                <div className="stat-value">{stat.value}</div>
                
                <div className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                  {stat.positive ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
                  {stat.change}
                  <span className="stat-period">{stat.period}</span>
                </div>
                
                <div className="stat-bars">
                  {stat.bars.map((bar, barIndex) => (
                    <div key={barIndex} className="stat-bar">
                      <div className="stat-bar-year">{bar.year}</div>
                      <div className="stat-bar-visual">
                        <div 
                          className="stat-bar-fill" 
                          style={{ width: `${bar.percentage}%` }}
                        ></div>
                      </div>
                      <div className="stat-bar-value">{bar.value.split(',')[0]}k</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Powerful Features for Sustainability</h2>
            <p className="section-subtitle">
              Everything you need to track, analyze, and reduce your carbon footprint 
              with professional-grade tools and insights.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card animate-on-scroll">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <a href="#" className="feature-link">
                  {feature.link} <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section" id="integrations">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Seamless Integrations</h2>
            <p className="section-subtitle">
              Connect with your existing tools and platforms for a unified 
              sustainability management experience.
            </p>
          </div>
          
          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <IntegrationCard key={index} {...integration} />
            ))}
          </div>
          
          <div className="integrations-cta animate-on-scroll">
            <p>Need a custom integration?</p>
            <a href="#" className="secondary-button">Contact our API team</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Trusted by Industry Leaders</h2>
            <p className="section-subtitle">
              See what our customers are saying about their sustainability transformation.
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Choose Your Plan</h2>
            <p className="section-subtitle">
              Flexible pricing options to match your organization's sustainability goals.
            </p>
          </div>
          
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
          
          <div className="pricing-footer animate-on-scroll">
            <p>All plans include a 14-day free trial. No credit card required.</p>
          </div>
        </div>
      </section>

      {/* Brand Kits Section */}
      <section className="brand-kits-section">
        <div className="container">
          <div className="brand-kits-content">
            <div className="section-header animate-on-scroll">
              <h2 className="section-title">Brand Kits</h2>
              <p className="section-subtitle">
                Manage multiple organizations and maintain brand consistency 
                across all your sustainability reporting.
              </p>
            </div>
            
            <div className="brand-kits-grid animate-on-scroll">
              {brandKits.map((kit, index) => (
                <div key={index} className={`brand-kit-item ${kit.selected ? 'selected' : ''}`}>
                  <div className="brand-kit-checkbox">
                    {kit.selected && <CheckCircle size={16} />}
                  </div>
                  <div 
                    className="brand-kit-logo" 
                    style={{ backgroundColor: kit.color }}
                  >
                    {kit.logo}
                  </div>
                  <div className="brand-kit-name">{kit.name}</div>
                  <div className="brand-kit-actions">
                    <Settings size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="security-section">
        <div className="container">
          <div className="security-content">
            <div className="security-text animate-on-scroll">
              <h2 className="section-title">Enterprise-Grade Security</h2>
              <p className="section-subtitle">
                Your sustainability data is protected with bank-level security 
                and compliance with global standards.
              </p>
              <div className="security-features">
                <div className="security-feature">
                  <Lock size={20} />
                  <span>End-to-end encryption</span>
                </div>
                <div className="security-feature">
                  <Shield size={20} />
                  <span>SOC 2 Type II certified</span>
                </div>
                <div className="security-feature">
                  <Database size={20} />
                  <span>Regular security audits</span>
                </div>
                <div className="security-feature">
                  <Globe size={20} />
                  <span>GDPR compliant</span>
                </div>
              </div>
            </div>
            <div className="security-visual animate-on-scroll">
              <div className="security-shield">
                <Shield size={64} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="animate-on-scroll">
            <h2 className="section-title">Ready to Start Your Sustainability Journey?</h2>
            <p className="section-subtitle">
              Join thousands of organizations already using CarbonTrack to 
              reduce their environmental impact and achieve their net-zero goals.
            </p>
            <div className="cta-buttons">
              <a href="#signup" className="cta-button">Get Started Today</a>
              <a href="#demo" className="secondary-button-white">Schedule Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Product</h3>
              <ul className="footer-links">
                <li><a href="#">Features</a></li>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Mobile App</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Company</h3>
              <ul className="footer-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Partners</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Resources</h3>
              <ul className="footer-links">
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Webinars</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <ul className="footer-links">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Compliance</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-logo">
              <Leaf size={24} />
              <span>CarbonTrack</span>
            </div>
            <p>&copy; 2024 CarbonTrack. All rights reserved.</p>
            <div className="footer-social">
              <a href="#" aria-label="Twitter">
                <Globe size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Users size={20} />
              </a>
              <a href="#" aria-label="GitHub">
                <Activity size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;