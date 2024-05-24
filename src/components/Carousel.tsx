import React, { ReactNode, useEffect, useRef, useState } from 'react'

const NavigationDot = ({ active }: { active: boolean }) => (
  <div
    className={`h-[16px] w-[16px] rounded-full ${active ? 'bg-theme-yellow opacity-100' : 'bg-white opacity-50'}`}
  ></div>
)

const Carousel = ({ children }: { children: ReactNode }) => {
  const el = useRef<HTMLDivElement>(null)
  const numOfItems = React.Children.count(children)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  const onNext = () => {
    console.log('onNext', el.current?.clientWidth)
    el.current?.scrollBy(el.current?.clientWidth, 0)
  }
  const onPrev = () => {
    console.log('onPrev')
    el.current?.scrollBy(-1 * el.current?.clientWidth, 0)
  }

  const onScroll = () => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current)
    }
    scrollTimeout.current = setTimeout(() => {
      if (el.current) {
        const index = Math.round(el.current.scrollLeft / el.current.clientWidth)
        if (index !== currentIndex) {
          setCurrentIndex(index)
        }
      }
    }, 100)
  }

  const goTo = (index: number) => {
    if (el.current) {
      const currentPosition = el.current.scrollLeft
      const newPosition = index * el.current.clientWidth
      console.log('scrollWidth=', el.current.scrollWidth)
      if (
        newPosition < currentPosition - 1 ||
        newPosition > currentPosition + 1
      ) {
        el.current?.scrollTo({
          left: newPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  })

  return (
    <div className='relative mt-4 w-full'>
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
        onScroll={onScroll}
        className='[--scrollbar-color-thumb: hotpink] flex w-full snap-x snap-mandatory overflow-x-scroll scroll-smooth scrollbar-theme *:w-full *:flex-shrink-0 *:snap-center'
      >
        {children}
      </div>
      <div className='mt-6 flex items-center justify-center gap-8'>
        {new Array(numOfItems).fill(0).map((_, index) => (
          <button key={index} onClick={() => goTo(index)}>
            <NavigationDot active={currentIndex === index} />
          </button>
        ))}
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
