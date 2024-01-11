import { useAIDrawStore } from '../stores/AIDrawStore'

interface ShapeProps {}

const Shape: React.FC<ShapeProps> = () => {
  const shape = useAIDrawStore((state) => state.shape)
  return <div className="box">Shape: {shape}</div>
}

export default Shape
