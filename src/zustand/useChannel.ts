import { create } from 'zustand';

export type DateState = {
  idChannel: number | null;
  idUser: number | null;
  setIdChannel: (newChannel: number) => void;
  setIdUser: (newUser: number) => void;
};

const useStore = create<DateState>((set) => ({
  idChannel: 1,
  setIdChannel: (idChannel: number) =>
    set((state) => ({ ...state, idUser: null, idChannel })),
  idUser: null,
  setIdUser: (idUser: number) =>
    set((state) => ({ ...state, idUser, idChannel: null })),
}));

export default useStore;
/*
  const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
 */

/*
function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}

*/
