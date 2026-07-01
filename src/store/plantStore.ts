import { create } from "zustand";

type PlantState = {
  name: string;
  age: number;
  health: number;
  hydration: number;
  stage: string;

  water: () => void;
};

export const usePlantStore = create<PlantState>((set) => ({
  name: "Living Tulip",
  age: 36,
  health: 82,
  hydration: 78,
  stage: "Healthy",

  water: () =>
  set((state) => {
    const hydration = Math.min(state.hydration + 10, 100);

    return {
      hydration,
      health:
        hydration >= 80
          ? Math.min(state.health + 2, 100)
          : state.health,
    };
  }),
}));