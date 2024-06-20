const ServiceBeyondOrdinary = () => (
  <div className='flex h-full w-full items-start justify-center'>
    <div className='relative flex w-full flex-col gap-6 bg-theme-blue p-6 @3xl:h-[500px] @3xl:flex-row @5xl:h-[450px] '>
      <div className='absolute left-0 right-0 top-0 @3xl:hidden'>
        <img className='w-full' src='/img/workingdesk.jpg' />
        <div className='absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-theme-blue to-[rgba(66,97,128,0.7)] @md:h-[200px] @lg:h-[240px] @xl:h-[220px] @2xl:h-[300px]'></div>
      </div>
      <div className='absolute left-0 right-0 top-0 hidden @3xl:block'>
        <img
          className='max-h-[450px] w-full object-cover'
          src='/img/workingdesk.jpg'
        />
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-black opacity-70'></div>
      </div>
      <section className='z-10 mt-[120px] text-lg font-extralight text-white @lg:px-10 @xl:mt-[200px] @3xl:mt-0 @3xl:text-xl'>
        <h2 className='mb-4 text-3xl font-bold @5xl:text-4xl'>Buiten gewoon</h2>
        <p className='@3xl:mt-4'>
          Ik ben geen gewone installateur. Ik werk aan mijn eigen onderneming op
          het gebied van energiemanagement, decentralisatie en
          privacybescherming. Dus in de eerste plaats ben ik een ontwikkelaar
          met jarenlang ervaring met embedded systems, web en mobile
          applicaties. Ik probeer dus altijd goede begrip te hebben over mijn
          werk en ik ben bereid om alles ook naar jouw zo makkelijk als mogelijk
          maken zodat je altijd begrijp “waarom”. Bovendien, leer ik altijd
          graag ook van jouw. Ik vind dat leren van de eindgebruikers de beste
          manier is om hun behoeften en problemen te begrijpen.
        </p>
      </section>
      {/* <div className='mr-4 hidden flex-[1_0_0] self-center @3xl:block'>
        <img className='w-full' src='/img/workingdesk.jpg' />
      </div> */}
    </div>
  </div>
)

export { ServiceBeyondOrdinary }
