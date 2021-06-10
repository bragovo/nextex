import  { RootStore } from "../pages/store";

const rootStore = new RootStore()

export const useRootStore = (): RootStore => {
  return rootStore
}
