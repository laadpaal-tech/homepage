import { Link } from 'react-router-dom'
import { SmallConfigurator } from './small-configurator/SmallConfigurator'

const HowMuchDoesItCost = () => (
  <div className='flex w-full flex-col items-center bg-theme-very-light-yellow'>
    <section className='w-full max-w-5xl bg-theme-very-light-yellow p-6 text-lg'>
      <h2 className='my-6 text-center text-4xl font-bold'>
        Wat kost een laadpaal installatie?
      </h2>
      <p>
        De kosten van een laadpaalinstallatie hangen af van je huidige
        energieaansluiting, de staat van je elektrische installatie en de
        bereikbaarheid vanuit je groepenkast. Hoewel de prijs van de laadpaal
        zelf makkelijk te vinden is, zijn er veel variabele factoren. In de
        interactieve tabel hieronder kun je de meest voorkomende
        prijscomponenten zien en een indicatieve totaalprijs berekenen.
      </p>
      <p className='mb-2 mt-2 bg-theme-light-yellow p-2 italic'>
        Let op: de getoonde prijzen zijn niet uitputtend en slechts een
        indicatie. Wil je meer leren over de prijsopbouw en de
        installatiekosten, zie{' '}
        <Link className='link' to='/price'>
          Kosten laadpaal installatie
        </Link>
      </p>
      <SmallConfigurator />
    </section>
  </div>
)

export { HowMuchDoesItCost }
