const ServiceBeyondOrdinary = () => (
  <div className='flex h-full w-full items-start justify-center'>
    <div className='relative flex w-full flex-col gap-6 bg-theme-blue p-6 @3xl:h-[500px] @3xl:flex-row @5xl:h-[450px] '>
      <div className='absolute left-0 right-0 top-0 @3xl:hidden'>
        <img className='w-full' src='/img/workingdesk.jpg' />
        <div className='absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-theme-blue to-[rgba(66,97,128,0.7)] @md:h-[200px] @lg:h-[240px] @xl:h-[220px] @2xl:h-[300px]'></div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 top-0 hidden @3xl:block'>
        <img
          className='max-h-[450px] w-full object-cover'
          src='/img/workingdesk.jpg'
        />
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-black opacity-70'></div>
      </div>
      <section className='z-10 mt-[120px] text-lg font-extralight text-white @lg:px-10 @xl:mt-[200px] @3xl:mt-0 @3xl:text-xl'>
        <h2 className='mb-4 text-3xl font-bold @5xl:text-4xl'>Buiten gewoon</h2>
        <p className='@3xl:mt-4'>
          Het Research White Paper: European EV Charging Infrastructure
          Masterplan (maart 2022) verwacht in 2030 2,3 miljoen niet-openbare
          laadpunten in Nederland. We hebben dus niet alleen veel laadpalen
          nodig, maar ook veel installateurs, goede installateurs. Anders blijf
          je zitten met een overvloed aan verschillende apparaten die niet goed
          samenwerken, moeilijk te upgraden en te vervangen zijn (omdat je naast
          je laadpunt ook een deel van jouw groepenkast moet weggooien), en
          omdat de markt erg dynamisch is, moet je er rekening mee houden dat je
          over een paar jaar wellicht jouw laadpaal moet vervangen.
        </p>
        <p className='mt-4'>
          Ik werk voor mijn eigen bedrijf op het gebied van energiemanagement,
          decentralisatie en privacybescherming. Dus in de eerste plaats ben ik
          een ontwikkelaar. Ik weet hoe het laadstation werkt en kan het je ook
          uitleggen zodat je een beter inzicht krijgt in de beschikbare
          mogelijkheden.
        </p>
      </section>
      {/* <div className='mr-4 hidden flex-[1_0_0] self-center @3xl:block'>
        <img className='w-full' src='/img/workingdesk.jpg' />
      </div> */}
    </div>
  </div>
)

export { ServiceBeyondOrdinary }
