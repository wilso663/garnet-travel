import React from 'react'
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './SideDrawer.css';

export interface SideDrawerProps {
  children: React.ReactNode;
  isShown: boolean;
  onClick: React.MouseEventHandler;

}

const SideDrawer: React.FC<SideDrawerProps> = ({children, isShown, onClick}) => {

  const content = (
    <CSSTransition in={isShown} timeout={700} classNames="slide-in-left" mountOnEnter unmountOnExit>
      <aside onClick={onClick} className="side-drawer">{children}</aside>
    </CSSTransition>
  );
  const drawerHook = document.getElementById('drawer-hook')!
  return createPortal(content, drawerHook);

}

export default SideDrawer