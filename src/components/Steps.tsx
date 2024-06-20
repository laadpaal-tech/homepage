import { useSetRecoilState } from 'recoil'
import { MakeAppointmentButton } from './MakeAppointmentButton'
import { readMoreState } from '~/app-state'

const CircledNumber = ({ value }: { value: string }) => (
  <div className='flex h-[42px] w-[42px] items-center justify-center rounded-full bg-black text-[28px] font-bold text-white'>
    {value}
  </div>
)

const Steps = () => {
  const setReadMoreState = useSetRecoilState(readMoreState)
  const setRef = (element: HTMLDivElement) => {
    setReadMoreState({
      elementToShow: element
    })
  }

  return (
    <div
      ref={setRef}
      className='z-10 mb-24 mt-24 flex w-full scroll-mt-16 flex-col items-center justify-start bg-theme-yellow @5xl:w-4/5'
    >
      <h2 className='mt-12 w-[340px] text-center text-4xl font-bold @3xl:w-auto'>
        Jouw eigen laadpaal thuis in 3 stappen:
      </h2>
      <ol
        className='flex flex-col items-center justify-start *:mt-8 *:flex *:flex-col *:items-center @5xl:min-w-min *:@5xl:w-full *:@5xl:flex-row
    '
      >
        <li>
          <CircledNumber value='1' />
          <p className='mt-3 w-[340px] text-center text-3xl @5xl:ml-4 @5xl:mt-0 @5xl:w-auto'>
            Aansluiting controleren en aanpassen.
          </p>
        </li>
        <li>
          <CircledNumber value='2' />
          <p className='mt-3 w-[340px] text-center text-3xl @5xl:ml-4 @5xl:mt-0 @5xl:w-auto'>
            Groepenkast controleren en uitbreiden.
          </p>
        </li>
        <li>
          <CircledNumber value='3' />
          <p className='mt-3 w-[340px] text-center text-3xl @5xl:ml-4 @5xl:mt-0 @5xl:w-auto'>
            Laadpaal installeren.
          </p>
        </li>
      </ol>
      <div className='my-6 @5xl:mr-16 @5xl:self-end'>
        <MakeAppointmentButton variant='black' />
      </div>
    </div>
  )
}

export { Steps }
