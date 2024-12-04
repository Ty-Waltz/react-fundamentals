import styles from './Header.module.css'

function Header() { 
    return (
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1>Ty Waltz</h1>
          </div>
        </header>
      );
    };
    
    export default Header;
