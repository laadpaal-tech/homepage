import { ReactNode, useRef } from 'react'

const Carousel = ({ children }: { children: ReactNode }) => {
  const el = useRef<HTMLDivElement>(null)

  const onNext = () => {
    console.log('onNext', el.current?.clientWidth)
    el.current?.scrollBy(el.current?.clientWidth, 0)
  }
  const onPrev = () => {
    console.log('onPrev')
    el.current?.scrollBy(-1 * el.current?.clientWidth, 0)
  }

  const goTo = (index: number) => {
    if (el.current) {
      const newPosition = index * el.current.clientWidth
      console.log('scrollWidth=', el.current.scrollWidth)
      if (el.current.scrollWidth !== newPosition) {
        el.current?.scrollTo({
          left: newPosition,
          behavior: 'smooth'
        })
      }
    }
  }
  return (
    <div className='relative w-full'>
      <button className='absolute left-4 top-0 z-50 h-[200px]' onClick={onPrev}>
        prev
      </button>
      <button
        className='absolute right-4 top-0 z-50 h-[200px]'
        onClick={onNext}
      >
        next
      </button>
      <div
        ref={el}
        className='flex w-full snap-x snap-mandatory overflow-x-scroll scroll-smooth *:w-full *:flex-shrink-0 *:snap-center'
      >
        {children}
      </div>
      <div className='flex justify-around'>
        <button onClick={() => goTo(0)}>1</button>
        <button onClick={() => goTo(1)}>2</button>
        <button onClick={() => goTo(2)}>3</button>
      </div>
    </div>
  )
}

const CarouselItem = ({ children }: { children: ReactNode }) => (
  <div className='flex min-h-[200px] w-full items-center justify-center'>
    {children}
  </div>
)

export { Carousel, CarouselItem }
