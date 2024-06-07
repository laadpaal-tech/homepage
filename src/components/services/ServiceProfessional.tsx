const ServiceProfessional = () => (
  <div className='flex w-full items-center justify-center'>
    <div className='relative flex w-full flex-col gap-6 bg-theme-blue p-6 @3xl:h-[500px] @3xl:flex-row @5xl:h-[450px] '>
      <div className='mr-4 flex w-full items-center justify-center @3xl:hidden'>
        {/* <img className='w-[80%]' src='/img/rccbs.jpg' /> */}
        <img className='w-[50%] @2xl:w-[30%]' src='/img/chint.jpg' />
      </div>
      <section className='flex-[2_0_0] text-lg font-extralight text-white @3xl:mt-0 @3xl:text-xl'>
        <h2 className='mb-4 text-3xl font-bold @5xl:text-4xl'>
          Zorgeloos en professioneel
        </h2>
        <p className='@3xl:mt-4'>
          Zorgeloos of in ieder geval met minder zorgen. Elke keer als ik iemand
          moet inhuren, denk ik van tevoren na of het niet beter is om de taak
          zelf te doen. Dus ik begrijp het. Maar ik zorg goed voor mijn werk en
          heb er ook veel plezier in...
        </p>
        <p className='mt-4'>
          Ik kom dus goed voorbereid. Alles wordt netjes gemonteerd en getest
          geleverd. Je hoef zich geen zorgen te maken over welke
          aardlekschakelaars of installastieautomaten nodig zijn en hoe jouw
          groepenkast in elkaar moet worden gezet zodat alles veilig en goed
          functioneert volgens de Nederlandse normen.
        </p>
        {/* <p className='mt-4'>
          Ik ben opgeleid en gecertificeerd om de benodigde
          installatiewerkzaamheden vakkundig uit te voeren. Bij
          garantieaanvragen of problemen met jouw laadpaal kan je altijd contact
          met mij opnemen.
        </p> */}
      </section>
      <div className='mr-4 hidden flex-[1_0_0] self-center @3xl:block'>
        <img className='w-full' src='/img/chint.jpg' />
      </div>
    </div>
  </div>
)

export { ServiceProfessional }
