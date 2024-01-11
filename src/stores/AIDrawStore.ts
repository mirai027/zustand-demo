import { create } from 'zustand'

enum AIDrawShapeType {
  HORIZONTAL = 2,
  VERTICAL = 3,
}

type TAIDrawState = {
  /** 描述词条 */
  prompt: string
  /** 风格id */
  modelConfigId: number
  /** 图片形状 */
  shape: AIDrawShapeType
  /** 设备ID */
  deviceIdentifier?: number | undefined
  setPrompt: (prompt: string) => void
}

export const useAIDrawStore = create<TAIDrawState>()((set) => ({
  prompt: 'prompt',
  modelConfigId: -1,
  shape: AIDrawShapeType['HORIZONTAL'],
  deviceIdentifier: -1,
  setPrompt: (prompt) => set({ prompt }),
}))
