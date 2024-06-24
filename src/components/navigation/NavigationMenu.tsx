import { NavbarMenu, NavbarMenuItem } from '@nextui-org/react'
import { NavigationFooter } from './NavigationFooter'
import { Link, NavLink } from 'react-router-dom'

type NavigationMenuProps = {
  onClose: () => void
}

const NavigationMenu = ({ onClose }: NavigationMenuProps) => (
  <NavbarMenu
    onClick={onClose}
    className='flex w-full flex-col items-center justify-between overflow-y-auto bg-theme-dark-blue/90 text-white backdrop-blur-xl backdrop-saturate-150'
    // portalContainer={document.getElementById('layout') ?? undefined}
  >
    <section className='flex flex-[1_0_auto] flex-col items-center justify-center gap-4 text-theme-yellow'>
      <NavbarMenuItem key='home' className='text-xl'>
        <Link to='/' className='hover:opacity-70'>
          Thuis
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem key='price' className='text-xl'>
        <NavLink to='/price' className='hover:opacity-70'>
          Kosten laadpaal installatie
        </NavLink>
      </NavbarMenuItem>
      <NavbarMenuItem key='step-by-step' className='text-xl'>
        <NavLink to='/step-by-step' className='hover:opacity-70'>
          Laadpaal installatie stap voor stap
        </NavLink>
      </NavbarMenuItem>
      <NavbarMenuItem key='partner' className='text-xl'>
        <NavLink to='/partner' className='hover:opacity-70'>
          Partner worden?
        </NavLink>
      </NavbarMenuItem>
      <NavbarMenuItem key='about' className='text-xl'>
        <NavLink to='/about' className='hover:opacity-70'>
          Over mij...
        </NavLink>
      </NavbarMenuItem>
    </section>
    <section className='flex-[0_0_auto]'>
      <NavigationFooter />
    </section>
  </NavbarMenu>
)

export { NavigationMenu }
