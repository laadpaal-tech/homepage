import { MakeAppointmentButton } from '~/components/MakeAppointmentButton'

const Partner = () => (
  <div className='flex w-full flex-col items-center bg-theme-very-light-yellow'>
    <section className='w-full max-w-5xl bg-theme-very-light-yellow p-6 text-lg'>
      <h2 className='my-6 text-center text-4xl font-bold'>Partner worden?</h2>
      <p>
        Ik ben op zoek naar partners! Wil je met mij samenwerken aan de
        installatie van laadpalen en zorgen voor een nette en schone installatie
        bij de klant?
      </p>
      <p className='mt-2'>
        Of ben je een software- of hardwareontwikkelaar met ondernemersambities?
        Wil je samen werken aan het hervormen van thuis energie management?
      </p>
      <p className='mt-2'>Neem contact op!</p>
    </section>
    <div className='my-6 flex w-full items-center justify-center'>
      <MakeAppointmentButton variant='yellow' />
    </div>
  </div>
)

export { Partner }
