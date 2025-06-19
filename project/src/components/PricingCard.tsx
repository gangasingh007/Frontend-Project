import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

const PricingCard: React.FC<PricingProps> = ({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  buttonText
}) => {
  return (
    <div className={`pricing-card animate-on-scroll ${popular ? 'popular' : ''}`}>
      {popular && <div className="pricing-badge">Most Popular</div>}
      <div className="pricing-header">
        <h3 className="pricing-name">{name}</h3>
        <div className="pricing-price">
          <span className="price-amount">{price}</span>
          <span className="price-period">/{period}</span>
        </div>
        <p className="pricing-description">{description}</p>
      </div>
      <ul className="pricing-features">
        {features.map((feature, index) => (
          <li key={index} className="pricing-feature">
            <Check size={16} className="feature-check" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`pricing-button ${popular ? 'primary' : 'secondary'}`}>
        {buttonText}
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default PricingCard;