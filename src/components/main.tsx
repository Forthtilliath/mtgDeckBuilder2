import styles from './main.module.scss'

export default function Main({ children }: PropsWithChildren) {
  return <main className={styles.main}>{children}</main>
}
