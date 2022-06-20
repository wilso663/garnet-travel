import React from 'react'
import './Card.css';

export interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({className, style, children}) => {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  )
  
}

export default Card;