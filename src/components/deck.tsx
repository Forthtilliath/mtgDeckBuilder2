import { useDispatch } from 'react-redux'
import styles from './deck.module.scss'
import { useDeck } from '@/utils/hooks/useDeck'
import { removeCard, reset } from '@/lib/redux/slices/deckSlice'

export default function Deck() {
  const cards = useDeck()
  const dispatch = useDispatch()

  return (
    <ul className={styles.deck}>
      <li>
        <button className={styles.btn} onClick={() => dispatch(reset())}>
          Reset the deck
        </button>
      </li>
      {cards.map((card) => (
        <li key={card.id}>
          <button
            className={styles.btn}
            onClick={() => dispatch(removeCard(card.id))}
          >
            -
          </button>
          <span className={styles.cardName}>
            {card.count}x {card.name}
          </span>
        </li>
      ))}
    </ul>
  )
}
