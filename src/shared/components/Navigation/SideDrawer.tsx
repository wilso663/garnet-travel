import React from 'react'
import { createPortal } from 'react-dom';
import './SideDrawer.css';

export interface SideDrawerProps {
  children: React.ReactNode;
}

const SideDrawer: React.FC<SideDrawerProps> = ({children}) => {

  const content = <aside className="side-drawer">{children}</aside>
  const drawerHook = document.getElementById('drawer-hook')!
  return createPortal(content, drawerHook);

}

export default SideDrawer