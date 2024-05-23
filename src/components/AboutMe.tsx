const AboutMe = () => (
  <div className='bg-theme-light-yellow z-10 mt-0 flex w-full flex-col items-center justify-start'>
    <h2 className='@5xl:self-start mt-6 text-center text-4xl font-bold'>
      Iets over mij...
    </h2>
    <div className='@5xl:flex-row @5xl:justify-start @5xl:items-start flex flex-col flex-nowrap items-center'>
      <img className='@5xl:hidden mt-6 w-11/12' src='/img/me-mobile.jpg' />
      <p className='@5xl:flex-[3_0_0] @5xl:w-auto @5xl:mr-8 mt-6 w-11/12 text-lg'>
        Ik heb expertise op het gebied van elektronica en informatica. Ik heb
        meer dan 25 jaar ervaring in verschillende software engineering
        projecten, variërend van embedded systemen tot web en mobiel. Ik behaal
        mijn masterdiploma in Software Engineering en Ph.D. op het gebied van
        computerbeveiliging. De afgelopen 10 jaar heb ik bij Philips
        doorgebracht als senior software engineer en senior software architect.
        Nu bouw ik mijn eigen startup op het gebied van privacy, beveiliging en
        energiemanagement. Om de behoeften van de markt beter te begrijpen en
        een relatie bouwen met mijn potentiële toekomstige klanten (en om ook te
        helpen gefinancierd te blijven) geef ik ook advies en ondersteuning bij
        de installatie van laadpunten.
      </p>
      <div className='@5xl:block @5xl:flex-[1_0_100px] hidden'>
        <img width='100%' src='/img/me-desktop.jpg' />
      </div>
    </div>
  </div>
)

export { AboutMe }
