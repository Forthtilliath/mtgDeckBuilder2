type CardData<T> = { cards: T[] }

type CardAPI = {
  id: string
  name: string
  imageUrl: string
}

// type CardAPIData = { cards: CardAPI[] }
// Solution 2 en passant par un type intermédiare
type CardAPIData = CardData<CardAPI>

type CardDB = Pick<CardAPI, 'id' | 'name'> & {
  count: number
}
// type CardDBData = { cards: CardDB[] }
type CardDBData = CardData<CardDB>
