import { makeAutoObservable } from "mobx"

export class RootStore {
  name = 'Root Store'

  constructor () {
    console.log('RS INIT')

    makeAutoObservable(this)
  }

  setName = (name: string) => {
    this.name = name
  }
}
