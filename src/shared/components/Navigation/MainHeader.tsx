import React from 'react'
import './MainHeader.css';

export interface MainHeaderProps {
  children: React.ReactNode;
}

const MainHeader: React.FC<MainHeaderProps> = ({children}) => {
  return (
    <header className="main-header">
      {children}
    </header>
  )
}

export default MainHeader
