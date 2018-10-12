
import React from 'react';
import { NavLink } from 'react-router-dom';



const MobileNav = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
     <nav className={drawerClasses} onClick={props.click}>
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 603 1730">
    <defs>
        <linearGradient id="MyGradient">
          <stop offset="5%" stopColor="#0f2027" />
          <stop offset="35%" stopColor="#203a43" />
          <stop offset="60%" stopColor="#2c5364" />
          
        </linearGradient>
      </defs>
    <path className="st0" d="M503,751" />
    <rect x="28" y="108" className="st1" width="548" height="1446" />
    <path className="st2" d="M131.8,125.7h171.7c112.7,0,149.3,46.6,149.3,99.1s-34.8,91.4-92.6,105.6c36.6,13,62.5,40.1,62.5,82.6 c0,71.4-59.6,125.7-187.6,125.7H20.9L131.8,125.7z M243.9,446.7c39.5,0,63.7-17.7,63.7-43.7c0-21.2-17.1-32.4-50.7-32.4h-79.1 l-20.6,76.1H243.9z M277,290.3c40.7,0,62.5-15.9,62.5-41.9c0-18.9-14.8-30.7-49.6-30.7h-71.4l-18.9,72.6H277z"
    />
    <path className="st2" d="M131.8,676.7h115.6l54.9,159.9l140.4-159.9h128.6l-110.9,413h-115l63.1-237.2l-148.1,161.7h-2.4l-60.8-160.5 l-63.1,236H20.9L131.8,676.7z"
    />
</svg>
     <div className='close' onClick={props.click}>
     {/* <div className="x"></div>
     <div className="x-"></div> */}
     </div>
      <ul>
        <li>
          <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
        <NavLink to="/join">JOIN</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;