const ServiceExperiment = () => (
  <div className='flex w-full items-center justify-center'>
    <div className='relative flex w-full flex-col gap-6 bg-theme-blue p-6 @3xl:h-[500px] @3xl:flex-row @5xl:h-[450px] '>
      <div className='mr-4 flex w-full items-center justify-center @3xl:hidden'>
        {/* <img className='w-[80%]' src='/img/rccbs.jpg' /> */}
        <img className='w-[50%] @2xl:w-[40%]' src='/img/laadpaal-tools.jpg' />
      </div>
      <section className='flex-[2_0_0] text-lg font-extralight text-white @3xl:mt-0 @3xl:text-xl'>
        <h2 className='mb-4 text-3xl font-bold @5xl:text-4xl'>
          Jouw eigen LAB?
        </h2>
        <p className='@3xl:mt-4'>
          Ben je bereid om iets te experimenteren? Naast de populaire laadpalen
          van bekende fabrikanten kan ik je ook adviseren hoe je jouw
          laadpaalinstallatie meer modulaire en gedecentraliseerd kan maken en
          binnenkort hoop ik ook mijn eigen laadpalen in offerte te hebben die
          modulaire en goed voorbereid zijn op slimme, privacybewust oplossingen
          samen met mijn eigen energiemanagementsysteem voor thuis.
        </p>
        <p className='mt-4'>
          Zin in bouwen van jouw eigen laadpaal? Hulp nodig met jouw
          netwerkconfiguratie? Ook daar kan ik je helpen. Maak nu een afspraak
          voor gratis advies.
        </p>
      </section>
      <div className='mr-4 hidden flex-[1_0_0] self-center @3xl:block'>
        <img className='w-full' src='/img/laadpaal-tools.jpg' />
      </div>
    </div>
  </div>
)

export { ServiceExperiment }
