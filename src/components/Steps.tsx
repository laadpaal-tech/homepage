import { MakeAppointmentButton } from './MakeAppointmentButton'

const CircledNumber = ({ value }: { value: string }) => (
  <div className='flex h-[42px] w-[42px] items-center justify-center rounded-full bg-black text-[28px] font-bold text-white'>
    {value}
  </div>
)

const Steps = () => (
  <div className='bg-theme-yellow z-10 mt-48 flex w-full flex-col items-center justify-start'>
    <h2 className='@3xl:w-auto mt-6 w-[340px] text-center text-4xl font-bold'>
      Uw eigen laadpaal thuis in 3 stappen:
    </h2>
    <ol className='flex flex-col items-center justify-start'>
      <li className='mt-8 flex flex-col items-center'>
        <CircledNumber value='1' />
        <p className='mt-3 w-[340px] text-center text-3xl'>
          Aansluiting controleren en aanpassen.
        </p>
      </li>
      <li className='mt-8 flex flex-col items-center'>
        <CircledNumber value='2' />
        <p className='mt-3 w-[340px] text-center text-3xl'>
          Groepenkast controleren en uitbreiden.
        </p>
      </li>
      <li className='mt-8 flex flex-col items-center'>
        <CircledNumber value='3' />
        <p className='mt-3 w-[340px] text-center text-3xl'>
          Laadpaal installeren.
        </p>
      </li>
    </ol>
    <div className='@5xl:self-end @5xl:mr-16 my-6'>
      <MakeAppointmentButton variant='black' />
    </div>
  </div>
)

export { Steps }
