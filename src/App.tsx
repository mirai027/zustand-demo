import Device from './components/Device'
import Prompt from './components/Prompt'
import Shape from './components/Shape'
import { useAIDrawStore } from './stores/AIDrawStore'

function App() {
  const setPrompt = useAIDrawStore((state) => state.setPrompt)
  return (
    <div className="container" style={{ margin: '20px' }}>
      <h1>Zustand Tutorial</h1>
      <Prompt />
      <Device />
      <Shape />
      <button onClick={() => setPrompt('button')}>button</button>
    </div>
  )
}

export default App
