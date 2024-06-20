import { atom } from 'recoil'

type ReadMoreState = {
  elementToShow?: HTMLElement
}

const readMoreState = atom<ReadMoreState>({
  key: 'readMoreState',
  default: {}
})

type ScrollToFooter = {
  elementToShow?: HTMLElement
}

const scrollToFooter = atom<ScrollToFooter>({
  key: 'scrollToFooter',
  default: {}
})

export { readMoreState, scrollToFooter }
