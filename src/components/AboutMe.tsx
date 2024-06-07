const AboutMe = () => (
  <div className='z-10 mt-0 flex w-full flex-col items-center justify-start bg-theme-light-yellow'>
    <h2 className='mt-6 text-center text-4xl font-bold @5xl:self-start'>
      Iets over mij...
    </h2>
    <div className='flex flex-col flex-nowrap items-center @5xl:flex-row @5xl:items-start @5xl:justify-start'>
      <img className='mt-6 w-11/12 @5xl:hidden' src='/img/me-mobile.jpg' />
      <section className='mt-6 w-11/12 text-lg @5xl:mr-8 @5xl:w-auto @5xl:flex-[3_0_0]'>
        <p>
          Ik heb expertise op het gebied van elektronica en informatica. Ik heb
          meer dan 25 jaar ervaring in verschillende software engineering
          projecten, variërend van embedded systemen tot web en mobiel. Ik
          behaalde mijn masterdiploma in Software Engineering en Ph.D. op het
          gebied van computerbeveiliging. De afgelopen 10 jaar heb ik bij
          Philips doorgebracht als senior software engineer en senior software
          architect. Nu bouw ik mijn eigen onderneming op het gebied van
          privacy, beveiliging en energiemanagement.
        </p>
        <p className='mt-3'>
          Ik vind dat leren van de eindgebruikers de beste manier is om hun
          behoeften en problemen te begrijpen. In de toekomst wil ik er ook voor
          zorgen dat mijn installateurs op een soortgelijke manier werken: samen
          met de klant naar de toekomst kijken om de beste oplossing voor{' '}
          <i>nu</i> vinden.
        </p>
        <p className='mt-3'>
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
