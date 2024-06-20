const AlwaysNearby = () => (
  <div className='flex h-full w-full items-start justify-center'>
    <div className='relative flex h-full w-full flex-col gap-6 bg-theme-blue p-6 @3xl:h-[500px] @3xl:flex-row @5xl:h-[450px] '>
      <div className='absolute bottom-0 left-0 right-0 top-0 @3xl:hidden'>
        <img className='h-full w-full object-cover' src='/img/me-2.jpg' />
      </div>
      <div className='absolute bottom-0 left-0 right-0 top-0 hidden @3xl:block'>
        <img className='h-full w-full object-cover' src='/img/me-1.jpg' />
      </div>
      <section className='absolute left-0 right-0 top-[350px] z-10 flex flex-col bg-black bg-opacity-60 text-lg font-extralight text-white @3xl:left-[30%] @3xl:right-0 @3xl:top-16 @3xl:pr-14 @3xl:text-xl @4xl:left-[320px] @5xl:left-[250px]'>
        <h2 className='p-6 pb-0 text-3xl font-bold @5xl:text-4xl'>
          Altijd in de buurt
        </h2>
        <p className='p-6 @3xl:mt-4'>
          Ik ben een lokale ondernemer gevestigd bij Microlab in Eindhoven. Woon
          je in Eindhoven of omgeving? Dan ben ik altijd in de buurt.
          Makkelijker, sneller en goedkoper! En ook al kunnen sommige grotere
          opdrachten beter door mijn grote concurrenten worden uitgevoerd, toch
          bied ik vaak een meer persoonlijke, klantgerichte en agile aanpak aan.
          Door samen te werken met <i>laadpaal.tech</i> steun je dus een lokale
          onderneming in jouw regio. Alvast bedankt!
        </p>
      </section>
    </div>
  </div>
)

export { AlwaysNearby }
