import { MakeAppointmentButton } from './MakeAppointmentButton'

const MeerWeten = () => (
  <section className='bg-theme-very-light-yellow w-full p-6 text-lg'>
    <h2 className='my-6 text-center text-4xl font-bold'>
      Jouw laadpaal zelf installeren?
    </h2>
    <p>
      Zelf een laadpaal installeren lijkt op het eerste gezicht niet moeilijk,
      maar dat is het niet. Ben je al jaren een klusser en werk je vaak aan
      elektrische installaties? Zelfs als het antwoord op bovenstaande <i>ja</i>{' '}
      is, moet je hier toch extra opletten.
    </p>
    <p className='mt-2'>
      Bij het plaatsen van een laadpaal werk je met hoge vermogens. De
      installatie moet dus veilig zijn, anders bestaat er brandgevaar.
      Waarschijnlijk voer je ook werkzaamheden uit aan je groepenkast. Misschien
      moet u uw oude groepenkast vervangen. Ben jij goed voorbereid? Beschik je
      al over het juiste gereedschap? Ben je bekend met termen als
      selectiviteit, soorten lekstroom en RCD-verblinding? Zelfs voor een
      ervaren klusser zijn deze termen vaak niet zo bekend en zonder ervaring
      krijg je uw laadpaal werkend maar toch een onveilige installatie.
    </p>
    <p className='mt-2 bg-theme-light-yellow p-2 italic'>
      Veel laadpaalfabrikanten weigeren jouw garantierechten als je de laadpaal
      zelf installeert. Om de installatiekosten te verlagen kan je soms sommige
      werkzaamheden zelf uitvoeren maar het is verstandig om dit door een
      gecertifieerd elektricien te laten inschakelen en controleren. Wilt u een
      deel van de werkzaamheden zelf uitvoeren om de installatiekosten te
      beperken, dan sta ik u graag met advies bij. Plan nu online een afspraak
      leer meer over de mogelijkheden.
    </p>
    <div className='mt-6 flex w-full items-center justify-center'>
      <MakeAppointmentButton variant='yellow' />
    </div>
  </section>
)

export { MeerWeten }
