import { MakeAppointmentButton } from './MakeAppointmentButton'

const MeerWeten = () => (
  <div className='flex w-full flex-col items-center bg-theme-dark-blue'>
    <section className='w-full max-w-5xl bg-theme-dark-blue p-6 text-lg text-white'>
      <h2 className='my-6 text-center text-4xl font-bold'>
        Jouw laadpaal zelf installeren?
      </h2>
      <p>
        Zelf een laadpaal installeren lijkt op het eerste gezicht niet moeilijk,
        maar dat is het niet. Ben je al jaren een klusser en werk je vaak aan
        elektrische installaties? Zelfs als het antwoord op bovenstaande{' '}
        <i>ja</i> is, moet je hier toch extra opletten.
      </p>
      <p className='mt-2'>
        Bij het plaatsen van een laadpaal werk je met hoge vermogens. De
        installatie moet dus veilig zijn, anders bestaat er brandgevaar.
        Waarschijnlijk voer je ook werkzaamheden uit aan je groepenkast.
        Misschien moet je jouw oude groepenkast vervangen. Ben je goed
        voorbereid? Beschik je al over het juiste gereedschap? Ben je bekend met
        termen als selectiviteit, soorten lekstroom en RCD-verblinding? Zelfs
        voor een ervaren klusser zijn deze termen vaak niet zo bekend en zonder
        ervaring krijg je jouw laadpaal werkend maar toch een onveilige
        installatie.
      </p>
      <p className='mt-2 bg-theme-blue p-2 italic'>
        Veel laadpaalfabrikanten weigeren jouw garantierechten als je de
        laadpaal zelf installeert. Om de installatiekosten te verlagen kan je
        soms sommige werkzaamheden zelf uitvoeren maar het is verstandig om dit
        door een gecertificeerd elektricien te laten inschakelen en controleren.
        Wil je een deel van de werkzaamheden zelf uitvoeren om de
        installatiekosten te beperken, dan adviseer ik je graag. Plan nu online
        een afspraak en leer meer over de mogelijkheden.
      </p>
      <div className='mt-6 flex w-full items-center justify-center'>
        <MakeAppointmentButton variant='yellow' />
      </div>
    </section>
  </div>
)

export { MeerWeten }
