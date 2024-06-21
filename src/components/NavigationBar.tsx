import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
import Logo from '~/assets/logo-white.svg?react'
import { scrollToFooter } from '~/app-state'
import { Link, useLocation } from 'react-router-dom'

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { elementToShow } = useRecoilValue(scrollToFooter)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const { pathname } = useLocation()

  const onContact = () => {
    setIsMenuOpen(false)
    elementToShow?.scrollIntoView({ behavior: 'smooth' })
  }
  const onScrollTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
  }

  // SAFARI does not support "scrollend" event
  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null
    const scrollEventHandler = () => {
      if (timerId) {
        clearTimeout(timerId)
      }
      timerId = setTimeout(() => {
        console.log('scrollend:', window.scrollY)
        if (window.scrollY > 1000) {
          setShowScrollToTop(true)
        } else {
          setShowScrollToTop(false)
        }
      }, 500)
    }
    document.addEventListener('scroll', scrollEventHandler)
    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
      document.removeEventListener('scroll', scrollEventHandler)
    }
  }, [])

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=''
      classNames={{ base: 'bg-black opacity-80 text-white', brand: '' }}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        // className='sm:hidden'
      />
      <NavbarBrand>
        {pathname !== '/' ? (
          <Link to='/' className='flex items-center'>
            <Logo width={50} />
            <p className='ml-2 font-bold text-inherit'>laadpaal.tech</p>
          </Link>
        ) : (
          <>
            <Logo width={50} />
            <p className='ml-2 font-bold text-inherit'>laadpaal.tech</p>
          </>
        )}
      </NavbarBrand>
      <NavbarContent justify='center'>
        {showScrollToTop && (
          <NavbarItem>
            <button
              onClick={onScrollTop}
              className='flex flex-col items-center justify-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6'
              >
                <path
                  fillRule='evenodd'
                  d='M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z'
                  clipRule='evenodd'
                />
              </svg>
              <div className='text-xs'>scroll to top</div>
            </button>
          </NavbarItem>
        )}
      </NavbarContent>
      {/* <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify='end'>
        <NavbarItem>
          <button className='hover:opacity-70' onClick={onContact}>
            Contact
          </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem key='contact'>
          <button className='hover:opacity-70' onClick={onContact}>
            Contact
          </button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export { NavigationBar }
