import { useStore } from '../stores/catStore'

export const CatBox = () => {
  const { bears, increasePopulation, removeAllBears } = useStore()
  //const {
  //  cats: { bigCats, smallCats },
  //  increaseBigCats,
  //  increaseSmallCats,
  //  summary,
  //} = useCatStore()

  return (
    <div className="box">
      <h1>Cat Box</h1>
      <p>big cats: {bears}</p>
      <p>small cats: smallCats</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increasePopulation}>add big cats</button>
        <button onClick={removeAllBears}>removeAllBears</button>
      </div>
    </div>
  )
}
