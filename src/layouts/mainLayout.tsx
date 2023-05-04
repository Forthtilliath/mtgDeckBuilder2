import Deck from '../components/deck'
import styles from './mainLayout.module.scss'

// Forth: J'ai crée un type PropsWithChildren qui fait utilise le PropsWithChildren de React
export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.layout}>
      <header className={styles.Titre}>
        <h1>ValhallaCode</h1>
      </header>
      <aside className={styles.Deck}>
        <Deck />
      </aside>
      <main className={styles.Main}>{children}</main>
    </div>
  )
}
