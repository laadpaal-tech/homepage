const AboutMe = () => (
  <div className='z-10 mt-0 flex w-full flex-col items-center justify-start bg-theme-light-yellow'>
    <h2 className='mt-6 text-center text-4xl font-bold @5xl:self-start'>
      Iets over mij...
    </h2>
    <div className='flex flex-col flex-nowrap items-center @5xl:flex-row @5xl:items-start @5xl:justify-start'>
      <img className='mt-6 w-11/12 @5xl:hidden' src='/img/me-mobile.jpg' />
      <section className='mt-6 w-11/12 text-lg @5xl:mr-8 @5xl:w-auto @5xl:flex-[3_0_0]'>
        <p>
          Jarenlang ben ik bezig met het onderzoeken van gedecentraliseerde
          systemen in verbinding met digitale identiteit en computerbeveiliging.
          Nu er steeds meer gebruik wordt gemaakt van verschillende slimme
          energieoplossingen, wordt de bescherming van onze
          energieverbruiksgegevens steeds relevanter. Met name het slim opladen
          van elektrische auto’s in combinatie met dynamische energiecontracten
          en thuisbatterijen vereist een hoge mate van synergie tussen lokale
          apparaten en de cloud. Vanaf mijn eerste ervaringen met mijn eigen
          elektrische auto en thuisladen werd het mij duidelijk dat we de
          energie thuis beter moeten beheren, met speciale aandacht voor privacy
          en een overweldigende afhankelijkheid van verschillende
          cloudoplossingen. Zo werd op de grens van computerbeveiliging, privacy
          en energiebeheer het idee van een eigen bedrijf geboren.
        </p>
        <p className='mt-3'>
          Ik heb jarenlange ervaring in verschillende engineeringprojecten, van
          embedded systemen tot web- en mobiele applicaties. Op mijn zoektocht
          naar betere slimme energieoplossingen biedt het leveren van
          laadpaalinstallatiediensten een unieke kans om in contact te komen met
          mijn potentiële toekomstige eindgebruikers en van hun behoeften en
          problemen te leren.
        </p>
        <p className='mt-3'>
          Ik hoop dat met mijn brede ervaring en inzichten kan ik voor jouw een
          goede dienst leveren: beginnend met het vinden van de juiste
          laadoplossing voor jouw thuis en verder met slimme energieoplossingen
          in de toekomst. Graag tot ziens!
        </p>
        <p className='my-3'>
          Op 28 maart 2024 heb ik het examen{' '}
          <i>NEN3140 VP Installatie laadpalen</i> met goed gevolg afgelegd bij
          Dirksen Opleidingen te Elst.
        </p>
      </section>
      <div className='hidden @5xl:block @5xl:flex-[1_0_100px]'>
        <img width='100%' src='/img/me-desktop.jpg' />
      </div>
    </div>
  </div>
)

export { AboutMe }
