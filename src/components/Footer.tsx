import SignalLogo from '~/assets/signal-logo-white-inline.svg?react'
import WhatsAppLogo from '~/assets/whatsapp-logo-white-inline.svg?react'
import TelegramLogo from '~/assets/telegram-logo-white-inline.svg?react'
import CalendarInline from '~/assets/calendar-white-inline.svg?react'
import { useSetRecoilState } from 'recoil'
import { appState, scrollToFooter } from '~/app-state'
import { useEffect, useRef } from 'react'

const Footer = () => {
  const scrollToFooterState = useSetRecoilState(scrollToFooter)
  const setAppState = useSetRecoilState(appState)
  const ref = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      scrollToFooterState({
        elementToShow: ref.current
      })
    }
  }, [scrollToFooterState])

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null
    const resizeEventHandler = () => {
      if (timerId) {
        clearTimeout(timerId)
      }
      timerId = setTimeout(() => {
        if (contactRef.current) {
          setAppState((current) => {
            if (contactRef.current) {
              return {
                ...current,
                contactHeight: contactRef.current.clientHeight
              }
            }
            return current
          })
        }
      }, 500)
    }
    window.addEventListener('resize', resizeEventHandler)
    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
      window.removeEventListener('resize', resizeEventHandler)
    }
  }, [setAppState])

  useEffect(() => {
    if (contactRef.current) {
      setAppState((current) => {
        if (contactRef.current) {
          return {
            ...current,
            contactHeight: contactRef.current.clientHeight
          }
        }
        return current
      })
    }
  }, [setAppState])

  return (
    <div
      ref={ref}
      className='z-10 mb-0 mt-12 flex w-full scroll-mt-10 flex-col items-center bg-theme-dark-blue'
    >
      <div className='flex w-full max-w-5xl flex-col gap-8 p-8 font-roboto-mono text-base font-light text-white @2xl:flex-row'>
        {/* <div
      className='z-10 mb-0 mt-12 flex w-full scroll-mt-10 flex-col gap-8 bg-theme-dark-blue p-8 font-roboto-mono text-base font-light text-white @2xl:flex-row'
    > */}
        <section className='flex flex-col'>
          <h3 className='mb-4 text-3xl font-bold'>laadpaal.tech</h3>
          <p className='mb-6'>
            KVK: 51982277
            <br />
            BTW: NL002447038B96
            <br />
            Koningskinderen 29
            <br />
            5629KC Eindhoven
          </p>
          <h4 className='mb-2 font-bold'>Bezoekadres (alleen op afspraak):</h4>
          <p>
            Microlab
            <br />
            Kastanjelaan 400
            <br />
            5616LZ Eindhoven
          </p>
        </section>
        <section className='flex flex-col' ref={contactRef}>
          <h3 className='mb-0 text-3xl font-bold'>Contact</h3>
          <section className='mb-2 flex flex-wrap gap-8 py-4'>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://wa.me/message/WRGJMP2QSRXYA1'
            >
              <CalendarInline height={28} width={117} />
            </a>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://signal.me/#eu/ejxg_PgqvcokkxdOrdTHl0JTcdM-kaJkzBLKEjgTbRPSvfP9YvREraiB3S8j7iX4'
            >
              <SignalLogo width={99} height={27} />
            </a>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://t.me/marcinczenko'
            >
              <TelegramLogo width={128} height={28} />
            </a>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://wa.me/message/WRGJMP2QSRXYA1'
            >
              <WhatsAppLogo width={117} height={27} />
            </a>
          </section>
          <p>info@laadpaal.tech</p>
        </section>
      </div>
    </div>
  )
}

export { Footer }
