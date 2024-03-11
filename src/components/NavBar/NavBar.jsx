import styles from "./NavBar.module.css";
import NavBarLink from "../NavBarLink/NavBarLink";
import { useState } from 'react';
import { faM, faS, faA, faP, faC, faH, faD, faCity } from '@fortawesome/free-solid-svg-icons';

export default function NavBar({handleNavClick}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverChange = () => {
    setIsHovered(!isHovered);
  };

  return (
    <nav className={styles.navbar} onMouseEnter={handleHoverChange} onMouseLeave={handleHoverChange}>
      <ul className={styles.navbarNav}>
        <li className={styles.logo}>
          <NavBarLink 
            text="Astro Weather" 
            icon={faCity} 
            isNavBarHovered={isHovered} 
            handleNavClick={() => handleNavClick("MELBOURNE")} 
          />
        </li>
        <li className={styles.logo}>
          <NavBarLink 
            text="Melbourne" 
            icon={faM} 
            isNavBarHovered={isHovered} 
            handleNavClick={() => handleNavClick("MELBOURNE")} 
          />
        </li>
        <li className={styles.logo}>
          <NavBarLink 
            text="Sydney" 
            icon={faS} 
            isNavBarHovered={isHovered} 
            handleNavClick={() => handleNavClick("SYDNEY")} 
          />
        </li>
        <li className={styles.logo}>
          <NavBarLink 
            text="Adelaide" 
            icon={faA} 
            isNavBarHovered={isHovered} 
            handleNavClick={() => handleNavClick("ADELAIDE")} 
          />
        </li>
        <li className={styles.logo}>
          <NavBarLink 
            text="Perth" 
            icon={faP} 
            isNavBarHovered={isHovered} 
            handleNavClick={() => handleNavClick("PERTH")} 
          />
        </li>
        <li className={styles.logo}>
          <NavBarLink 
            text="Canberra" 
            icon={faC} 
            isNavBarHovered={isHovered} 
            handleNavClick={() => handleNavClick("CANBERRA")} 
          />
        </li>
        <li className={styles.logo}>
          <NavBarLink 
            text="Darwin" 
            icon={faD} 
            isNavBarHovered={isHovered} 
            handleNavClick={() => handleNavClick("DARWIN")} 
          />
        </li>
        <li className={styles.logo}>
          <NavBarLink 
            text="Hobart" 
            icon={faH} 
            isNavBarHovered={isHovered} 
            handleNavClick={() => handleNavClick("HOBART")} 
          />
        </li>
      </ul>
    </nav>
  )
}