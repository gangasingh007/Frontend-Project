import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  company,
  content,
  rating,
  avatar
}) => {
  return (
    <div className="testimonial-card animate-on-scroll">
      <div className="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'star-filled' : 'star-empty'}
          />
        ))}
      </div>
      <blockquote className="testimonial-content">
        "{content}"
      </blockquote>
      <div className="testimonial-author">
        <div className="testimonial-avatar" style={{ backgroundColor: avatar }}>
          {name.charAt(0)}
        </div>
        <div className="testimonial-info">
          <div className="testimonial-name">{name}</div>
          <div className="testimonial-role">{role} at {company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;