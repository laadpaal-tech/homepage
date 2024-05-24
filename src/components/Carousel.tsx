import { useRef } from 'react'

const Carousel = () => {
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
        className='flex w-full snap-x snap-mandatory overflow-x-scroll scroll-smooth'
      >
        <div className='flex h-[200px] w-full flex-shrink-0 snap-center items-center justify-center bg-lime-700'>
          Item 1
        </div>
        <div className='flex h-[200px] w-full flex-shrink-0 snap-center items-center justify-center bg-slate-500'>
          Item 2
        </div>
        <div className='flex h-[200px] w-full flex-shrink-0 snap-center items-center justify-center bg-orange-600'>
          Item 3
        </div>
      </div>
      <div className='flex justify-around'>
        <button onClick={() => goTo(0)}>1</button>
        <button onClick={() => goTo(1)}>2</button>
        <button onClick={() => goTo(2)}>3</button>
      </div>
    </div>
  )
}

export { Carousel }
