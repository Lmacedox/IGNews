import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn,signOut, useSession } from 'next-auth/client'

export function SingInButton(){

  const [session] = useSession();
  // AQUI JÁ VERIFICO SE ESTÁ LOGADO OU NÃO 
  return session ? (
    <button
      type="button"
      className={styles.singInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04D361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
     <button 
      type="button"
      className={styles.singInButton}
      onClick={() => signIn('github')} 
    >
      <FaGithub color="#EBA417" />
      Sing In With GitHub
    </button>
  )
}