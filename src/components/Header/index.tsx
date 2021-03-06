import { SingInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="../images/logo.svg" alt="IG News"/>
        <nav>
          <a className={styles.active}>Home</a>
          <a >Post</a>
        </nav>
        
        <SingInButton />
      </div>
    </header>
  );
}