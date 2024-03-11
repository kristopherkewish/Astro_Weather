import styles from "./NavBarLink.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBarLink({text, icon, isNavBarHovered, handleNavClick}) {
    return (
        <a href="#" className={styles.navLink} onClick={handleNavClick}>
            <FontAwesomeIcon className={styles.icon} icon={icon} />
            <span className={`${styles.linkText} ${isNavBarHovered ? styles.visibleText : styles.invisibleText}`}>{text}</span>
        </a>
    )
}