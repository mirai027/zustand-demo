import { memo } from 'react'

export const CatController = memo(() => {
  //const { increaseBigCats, increaseSmallCats } = useCatStore()
  //const increaseBigCats = useCatStore.use.increaseBigCats()
  //const increaseSmallCats = useCatStore.use.increaseSmallCats()
  //const setTestTextarea = useCatStore.use.setTestTextarea()
  //const testTextarea = useCatStore.use.testTextarea()
  console.log(2)

  return (
    <div className="box">
      <h1>Cat Controller</h1>
      <p>{Math.random()}</p>
      <div>
        <button>add big cats</button>
        <button>add small cats</button>
        <button>set test textarea</button>
      </div>
    </div>
  )
})
