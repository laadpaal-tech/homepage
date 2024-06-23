import { NavbarMenu, NavbarMenuItem } from '@nextui-org/react'
import { NavigationFooter } from './NavigationFooter'

const NavigationMenu = () => (
  <NavbarMenu
    className='flex w-full flex-col items-center justify-between overflow-y-auto bg-theme-dark-blue/90 text-white backdrop-blur-xl backdrop-saturate-150'
    // portalContainer={document.getElementById('layout') ?? undefined}
  >
    <section className='flex flex-[1_0_auto] flex-col items-center justify-center gap-4 text-theme-yellow'>
      <NavbarMenuItem key='price' className='text-xl'>
        <button className='hover:opacity-70'>
          Kosten laadpaal installatie
        </button>
      </NavbarMenuItem>
    </section>
    <section className='flex-[0_0_auto]'>
      <NavigationFooter />
    </section>
  </NavbarMenu>
)

export { NavigationMenu }
