import React, { ReactNode, useEffect, useRef, useState } from 'react'
import NavPrevIcon from '~/assets/nav-prev-icon.svg?react'
import NavNextIcon from '~/assets/nav-next-icon.svg?react'

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
    if (el.current) {
      const newPosition = (currentIndex + 1) * el.current.clientWidth
      scrollToPosition(newPosition)
    }
    // console.log('onNext', el.current?.clientWidth)
    // el.current?.scrollBy(el.current?.clientWidth + 1, 0)
  }
  const onPrev = () => {
    if (el.current) {
      const newPosition = (currentIndex - 1) * el.current.clientWidth
      scrollToPosition(newPosition)
    }
    // console.log('onPrev')
    // el.current?.scrollBy(-1 * el.current?.clientWidth, 0)
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

  const scrollToPosition = (position: number) => {
    if (el.current) {
      const currentPosition = el.current.scrollLeft
      if (position < currentPosition - 1 || position > currentPosition + 1) {
        el.current?.scrollTo({
          left: position,
          behavior: 'smooth'
        })
      }
    }
  }

  const goTo = (index: number) => {
    if (el.current) {
      const newPosition = index * el.current.clientWidth
      scrollToPosition(newPosition)
      // const currentPosition = el.current.scrollLeft
      // const newPosition = index * el.current.clientWidth
      // console.log('scrollWidth=', el.current.scrollWidth)
      // if (
      //   newPosition < currentPosition - 1 ||
      //   newPosition > currentPosition + 1
      // ) {
      //   el.current?.scrollTo({
      //     left: newPosition,
      //     behavior: 'smooth'
      //   })
      // }
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
    <div className='relative mt-4 w-full @5xl:w-4/5'>
      <div className='relative'>
        <div className='absolute left-1 top-0 z-50 flex h-full w-[48px] items-center @3xl:w-[56px] @5xl:-left-20'>
          <button
            aria-label='previous'
            className={`${currentIndex === 0 ? 'hidden' : 'block'} w-full -translate-y-[84px] opacity-50 disabled:cursor-not-allowed disabled:opacity-25 @5xl:-translate-y-[11px]`}
            disabled={currentIndex === 0}
            onClick={onPrev}
          >
            <NavPrevIcon width='100%' />
          </button>
        </div>
        <div className='absolute right-1 top-0 z-50 flex h-full w-[48px] items-center @3xl:w-[56px] @5xl:-right-20'>
          <button
            aria-label='next'
            disabled={currentIndex === numOfItems - 1}
            className={`${currentIndex === numOfItems - 1 ? 'hidden' : 'block'} w-full -translate-y-[84px] opacity-50 disabled:cursor-not-allowed disabled:opacity-25 @5xl:-translate-y-[11px]`}
            onClick={onNext}
          >
            <NavNextIcon width='100%' />
          </button>
        </div>
        <div
          ref={el}
          onScroll={onScroll}
          className='scroll flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth scrollbar-theme *:w-full *:flex-shrink-0 *:snap-center'
        >
          {children}
        </div>
      </div>
      <div className='mt-6 flex items-center justify-center gap-8'>
        {new Array(numOfItems).fill(0).map((_, index) => (
          <button
            aria-label={`slide number ${index}`}
            key={index}
            onClick={() => goTo(index)}
          >
            <NavigationDot active={currentIndex === index} />
          </button>
        ))}
      </div>
    </div>
  )
}

const CarouselItem = ({ children }: { children: ReactNode }) => (
  <div className='flex min-h-[200px] w-full items-center justify-center bg-theme-blue'>
    {children}
  </div>
)

export { Carousel, CarouselItem }
