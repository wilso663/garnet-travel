import React from 'react'
import { createPortal } from 'react-dom';
import './Backdrop.css'

export interface BackdropProps {
  onClick: React.MouseEventHandler;
}

const Backdrop: React.FC<BackdropProps> = ({onClick}) => {
  const backdrop = document.getElementById('backdrop-hook')!
  const content = <div className="backdrop" onClick={onClick}></div>
  return createPortal(content, backdrop);
}

export default Backdrop