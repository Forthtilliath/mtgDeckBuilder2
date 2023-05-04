import styles from './aside.module.scss'

export default function Aside({ children }: PropsWithChildren) {
  return <aside className={styles.aside}>{children}</aside>
}
