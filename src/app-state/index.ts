import { atom } from 'recoil'

type ReadMoreState = {
  elementToShow?: HTMLElement
}

const readMoreState = atom<ReadMoreState>({
  key: 'readMoreState',
  default: {}
})

export { readMoreState }
