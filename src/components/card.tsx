import Image from 'next/image'
import styles from './card.module.scss'
import { addCard } from '@/lib/redux/slices/deckSlice'
import { useDispatch } from 'react-redux'
import { useDeck } from '@/utils/hooks/useDeck'

// Forth: Ici le type c'est directement une CardAPI
type Props = CardAPI

// Forth: J'ai fix le nom de la prop imageUrl
export default function Card({ name, id, imageUrl }: Props) {
  const cards = useDeck()
  const dispatch = useDispatch()

  const card = cards.find(c => c.id === id)

  return (
    <button
      className={styles.card}
      onClick={() => dispatch(addCard({ name, id }))}
      disabled={card && card.count >= 4}
    >
      {/* Width et height a override dans le module scss */}
      <Image
        src={imageUrl}
        alt={name}
        width={63 * 3}
        height={88 * 3}
        unoptimized
      />
    </button>
  )
}
