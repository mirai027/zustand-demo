import { create } from 'zustand'

type TCatStoreState = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

export const useStore = create<TCatStoreState>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
