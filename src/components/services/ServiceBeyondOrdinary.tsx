const ServiceBeyondOrdinary = () => (
  <div className='flex h-full w-full items-start justify-center'>
    <div className='relative flex h-full w-full flex-col gap-6 bg-theme-blue p-6 @3xl:h-[500px] @3xl:flex-row @5xl:h-[450px]'>
      <div className='absolute bottom-0 left-0 right-0 top-0'>
        <img
          className='h-full w-full object-cover'
          src='/img/workingdesk.jpg'
        />
      </div>
      {/* <div className='absolute bottom-0 left-0 right-0 top-0 hidden @3xl:block'>
        <img
          className='h-full w-full object-cover'
          src='/img/workingdesk.jpg'
        />
      </div> */}
      <section className='absolute left-0 right-0 top-[250px] z-10 flex flex-col bg-black bg-opacity-80 p-0 pt-10 text-lg font-extralight text-white @xl:top-[150px] @xl:px-10 @2xl:px-10 @3xl:top-0 @3xl:m-20 @3xl:mb-0 @3xl:p-0 @3xl:text-xl'>
        <h2 className='p-6 pb-0 text-3xl font-bold @5xl:text-4xl'>
          Buiten gewoon
        </h2>
        <p className='p-6'>
          Ik werk aan mijn eigen onderneming op het gebied van
          energiemanagement, decentralisatie en privacybescherming. Dus in de
          eerste plaats ben ik een ontwikkelaar met jarenlang ervaring met
          embedded systems, web en mobile applicaties. Ik probeer dus altijd
          goede begrip te hebben over mijn werk en ik ben bereid om alles ook
          naar jouw zo makkelijk als mogelijk te maken zodat je altijd begrijpt
          “waarom”. Bovendien, leer ik altijd graag ook van jouw. Het luisteren
          naar de eindgebruikers helpt me om hun behoeften en problemen beter te
          begrijpen.
        </p>
      </section>
    </div>
  </div>
)

export { ServiceBeyondOrdinary }
