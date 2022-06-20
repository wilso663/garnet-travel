import './Avatar.css';

import React from 'react'

export interface AvatarProps {
  className?: string;
  image: string;
  alt: string;
  style?: React.CSSProperties;
  width?: string;
}


const Avatar: React.FC<AvatarProps> = ({className, style, image, alt, width}) => {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img
        src={image}
        alt={alt}
        style={{ width: width, height: width}}
      />
    </div>
  )
}

export default Avatar