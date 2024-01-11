import { useAIDrawStore } from '../stores/AIDrawStore'

interface PromptProps {}

const Prompt: React.FC<PromptProps> = () => {
  const prompt = useAIDrawStore((state) => state.prompt)
  const setPrompt = useAIDrawStore((state) => state.setPrompt)

  const onValueChange = (value: string) => {
    console.log('🚀 ~ onValueChange ~ value:', value)
    setPrompt(value)
  }

  return (
    <div className="box">
      Prompt: {prompt}
      <div>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          onChange={(e) => onValueChange(e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default Prompt
