import { Questionnaire } from './Questionnaire'

const Price = () => {
  return (
    <div className='flex w-full flex-col items-start justify-start gap-4 p-6 text-black'>
      <h2 className='w-[340px] text-center text-4xl font-bold @3xl:w-auto @5xl:mb-14  @5xl:text-6xl'>
        Wat kost een laadpaal?
      </h2>
      <Questionnaire stepsNames={['connection']} language='nl' />
    </div>
  )
}

export { Price }
