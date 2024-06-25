// import { CustomEvent } from '@piwikpro/react-piwik-pro'

import SignalLogo from '~/assets/signal-logo-white.svg?react'
import WhatsAppLogo from '~/assets/whatsapp-logo-white.svg?react'
import TelegramLogo from '~/assets/telegram-logo-white.svg?react'
import SignalLogoInline from '~/assets/signal-logo-white-inline.svg?react'
import WhatsAppLogoInline from '~/assets/whatsapp-logo-white-inline.svg?react'
import TelegramLogoInline from '~/assets/telegram-logo-white-inline.svg?react'
import Calendar from '~/assets/calendar-white.svg?react'
import CalendarInline from '~/assets/calendar-white-inline.svg?react'
import { useLocation } from 'react-router-dom'

type ContactEventType = 'cal.com' | 'signal' | 'telegram' | 'whatsapp'

const NavigationFooter = () => {
  const { pathname } = useLocation()

  const onClick = async (eventType: ContactEventType) => {
    if (import.meta.env.PROD) {
      const { CustomEvent } = await import('@piwikpro/react-piwik-pro')
      CustomEvent.trackEvent(
        'Contact',
        `${eventType}:${pathname.replace('/', '')}:MENU`
      )
    }
  }

  return (
    <div className='z-10 mb-20 flex w-full scroll-mt-10 flex-col gap-8 border-t-1 p-8 font-roboto-mono text-base font-light text-white @2xl:flex-row'>
      <section className='flex flex-col items-center gap-2'>
        <section className='mb-2 flex flex-wrap justify-center gap-8 py-4'>
          <a
            aria-label='make appointment using Cal.com'
            onClick={() => onClick('cal.com')}
            rel='noreferrer'
            target='_blank'
            href='https://cal.com/laadpaal.tech'
          >
            <div className='h-[30px] w-[30px] sm:hidden'>
              <Calendar height='100%' width='100%' />
            </div>
            <div className='hidden h-[28px] w-[117px] sm:block'>
              <CalendarInline height='100%' width='100%' />
            </div>
          </a>
          <a
            aria-label='get in touch using Signal'
            onClick={() => onClick('signal')}
            rel='noreferrer'
            target='_blank'
            href='https://signal.me/#eu/ejxg_PgqvcokkxdOrdTHl0JTcdM-kaJkzBLKEjgTbRPSvfP9YvREraiB3S8j7iX4'
          >
            <div className='h-[30px] w-[30px] sm:hidden'>
              <SignalLogo width='100%' height='100%' />
            </div>
            <div className='hidden h-[27px] w-[99px] sm:block'>
              <SignalLogoInline width='100%' height='100%' />
            </div>
          </a>
          <a
            aria-label='get in touch using Telegram'
            onClick={() => onClick('telegram')}
            rel='noreferrer'
            target='_blank'
            href='https://t.me/marcinczenko'
          >
            <div className='h-[30px] w-[30px] sm:hidden'>
              <TelegramLogo width='100%' height='100%' />
            </div>
            <div className='hidden h-[28px] w-[128px] sm:block'>
              <TelegramLogoInline width='100%' height='100%' />
            </div>
          </a>
          <a
            aria-label='get in touch using WhatsApp'
            onClick={() => onClick('whatsapp')}
            rel='noreferrer'
            target='_blank'
            href='https://wa.me/message/WRGJMP2QSRXYA1'
          >
            <div className='h-[30px] w-[30px] sm:hidden'>
              <WhatsAppLogo height='100%' />
            </div>
            <div className='hidden h-[28px] w-[120px] sm:block'>
              <WhatsAppLogoInline height='100%' width='100%' />
            </div>
          </a>
        </section>
        <p className='text-xs sm:text-base'>info@laadpaal.tech</p>
      </section>
    </div>
  )
}

export { NavigationFooter }
