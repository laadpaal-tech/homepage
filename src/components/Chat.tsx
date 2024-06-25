import { useState, useEffect, useRef, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
// import { CustomEvent } from '@piwikpro/react-piwik-pro'

import ChatIcon from '~/assets/chat.svg?react'
import Calendar from '~/assets/calendar-icon.svg?react'
import SignalLogo from '~/assets/signal-logo-black.svg?react'
import WhatsAppLogo from '~/assets/whatsapp-logo-black.svg?react'
import TelegramLogo from '~/assets/telegram-logo-black.svg?react'
import { useRecoilValue } from 'recoil'
import { appState } from '~/app-state'

type ContactEventType = 'cal.com' | 'signal' | 'telegram' | 'whatsapp'

const Chat = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState<boolean>(false)
  const [hideChat, setHideChat] = useState(false)
  const { contactHeight } = useRecoilValue(appState)
  const timerId = useRef<NodeJS.Timeout | null>(null)

  const onClick = async (eventType: ContactEventType) => {
    if (import.meta.env.PROD) {
      const { CustomEvent } = await import('@piwikpro/react-piwik-pro')
      CustomEvent.trackEvent(
        'Contact',
        `${eventType}:${pathname.replace('/', '')}:MENU`
      )
    }
  }

  const showContactOptions = () => {
    setOpen((prev) => {
      return !prev
    })
  }

  const scrollAndResizeHandler = useCallback(() => {
    if (timerId.current) {
      clearTimeout(timerId.current)
    }
    timerId.current = setTimeout(() => {
      const clientHeight = document.body.clientHeight
      const viewHeight = window.innerHeight
      if (window.scrollY >= clientHeight - viewHeight - contactHeight) {
        setHideChat(true)
      } else {
        setHideChat(false)
      }
    }, 500)
  }, [contactHeight])

  // SAFARI does not support "scrollend" event
  useEffect(() => {
    document.addEventListener('scroll', scrollAndResizeHandler)
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current)
      }
      document.removeEventListener('scroll', scrollAndResizeHandler)
    }
  }, [scrollAndResizeHandler])

  useEffect(() => {
    window.addEventListener('resize', scrollAndResizeHandler)
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current)
      }
      window.removeEventListener('resize', scrollAndResizeHandler)
    }
  }, [scrollAndResizeHandler])

  const renderButtons = () => {
    return (
      <div className='flex flex-col gap-2'>
        <a
          aria-label='make appointment with cal.com'
          onClick={() => onClick('cal.com')}
          rel='noreferrer'
          target='_blank'
          href='https://cal.com/laadpaal.tech'
          className='flex h-[60px] w-[60px] items-center justify-center rounded-3xl border-2 border-white bg-theme-yellow'
        >
          <Calendar height='70%' width='70%' />
        </a>
        <a
          aria-label='get in touch using Signal'
          onClick={() => onClick('signal')}
          rel='noreferrer'
          target='_blank'
          href='https://signal.me/#eu/ejxg_PgqvcokkxdOrdTHl0JTcdM-kaJkzBLKEjgTbRPSvfP9YvREraiB3S8j7iX4'
          className='flex h-[60px] w-[60px] items-center justify-center rounded-3xl border-2 border-white bg-theme-yellow'
        >
          <SignalLogo width='70%' height='70%' />
        </a>
        <a
          aria-label='get in touch using Telegram'
          onClick={() => onClick('telegram')}
          rel='noreferrer'
          target='_blank'
          href='https://t.me/marcinczenko'
          className='flex h-[60px] w-[60px] items-center justify-center rounded-3xl border-2 border-white bg-theme-yellow'
        >
          <TelegramLogo width='70%' height='70%' className='text-black' />
        </a>
        <a
          aria-label='get in touch using WhatsApp'
          onClick={() => onClick('whatsapp')}
          rel='noreferrer'
          target='_blank'
          href='https://wa.me/message/WRGJMP2QSRXYA1'
          className='flex h-[60px] w-[60px] items-center justify-center rounded-3xl border-2 border-white bg-theme-yellow'
        >
          <WhatsAppLogo width='70%' height='70%' />
        </a>
      </div>
    )
  }

  if (hideChat) {
    return null
  }

  return (
    <div
      className={`fixed bottom-4 right-4 z-10 flex h-[340px] flex-col items-end justify-end gap-4`}
    >
      <div
        className={`${open ? 'flex-[1]' : 'flex-[0]'} h-auto overflow-hidden transition-all duration-300 ease-out`}
      >
        {renderButtons()}
      </div>
      <button
        aria-label='show chat options'
        onClick={showContactOptions}
        className='flex h-[60px] w-[60px] animate-appearance-in items-center justify-center self-end rounded-3xl border-2 border-white bg-theme-yellow shadow-xl'
      >
        {open ? <div className='text-3xl'>X</div> : <ChatIcon width='70%' />}
      </button>
    </div>
  )
}

export { Chat }
