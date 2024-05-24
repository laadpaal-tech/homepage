import SignalLogo from '~/assets/signal.svg?react'
import WhatsAppLogo from '~/assets/whatsapp.svg?react'

const Footer = () => (
  <div className='z-10 mb-0 mt-12 flex w-full flex-col gap-8 bg-theme-dark-blue p-8 font-roboto-mono text-base font-light text-white @2xl:flex-row'>
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
    <section className='flex flex-col'>
      <h3 className='mb-0 text-3xl font-bold'>Contact</h3>
      <section className='mb-2 flex items-center gap-12 py-4'>
        <SignalLogo width={99} height={27} />
        <WhatsAppLogo width={117} height={27} />
      </section>
      <p>info@laadpaal.tech</p>
    </section>
  </div>
)

export { Footer }
