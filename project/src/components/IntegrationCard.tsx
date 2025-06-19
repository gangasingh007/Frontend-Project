import React from 'react';

interface IntegrationProps {
  name: string;
  logo: string;
  description: string;
  category: string;
  connected?: boolean;
}

const IntegrationCard: React.FC<IntegrationProps> = ({
  name,
  logo,
  description,
  category,
  connected = false
}) => {
  return (
    <div className="integration-card animate-on-scroll">
      <div className="integration-header">
        <div className="integration-logo" style={{ backgroundColor: logo }}>
          {name.charAt(0)}
        </div>
        <div className="integration-info">
          <h4 className="integration-name">{name}</h4>
          <span className="integration-category">{category}</span>
        </div>
        <div className={`integration-status ${connected ? 'connected' : 'available'}`}>
          {connected ? 'Connected' : 'Available'}
        </div>
      </div>
      <p className="integration-description">{description}</p>
    </div>
  );
};

export default IntegrationCard;