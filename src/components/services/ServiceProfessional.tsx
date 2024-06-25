const ServiceProfessional = () => (
  <div className='flex w-full items-center justify-center'>
    <div className='relative flex w-full flex-col gap-6 bg-theme-blue p-6 @3xl:h-[500px] @3xl:flex-row @5xl:h-[450px]'>
      <div className='mr-4 flex w-full items-center justify-center @3xl:hidden'>
        <img
          alt='image of an RCD'
          className='w-[50%] @2xl:w-[30%]'
          src='/img/chint.jpg'
        />
      </div>
      <section className='flex-[2_0_0] text-lg font-extralight text-white @3xl:mt-0 @3xl:text-xl'>
        <h2 className='mb-4 text-3xl font-bold @5xl:text-4xl'>
          Zorgeloos en professioneel
        </h2>
        <p className='@3xl:mt-4'>
          Zorgeloos of ten minste met wat minder zorgen. Laadpaal installatie
          kan soms overweldigend zijn, omdat er mogelijk veel dingen in korte
          tijd moeten gebeuren voordat je jouw auto kan gaan opladen.
        </p>
        <p className='mt-4'>
          Ik kom dus goed voorbereid en ik zorg goed voor mijn werk. Alles wordt
          netjes gemonteerd en getest geleverd. Je heb zich geen zorgen te maken
          over welke installatieautomaten of aardlekschakelaars nodig zijn en
          hoe jouw groepenkast moet worden samengesteld zodat alles veilig en
          goed functioneert volgens de Nederlandse normen. Je krijgt altijd
          direct van mij een eerlijk advies, ook als ik iets niet kan, zeg ik
          het gewoon.
        </p>
        {/* <p className='mt-4'>
          Ik ben opgeleid en gecertificeerd om de benodigde
          installatiewerkzaamheden vakkundig uit te voeren. Bij
          garantieaanvragen of problemen met jouw laadpaal kan je altijd contact
          met mij opnemen.
        </p> */}
      </section>
      <div className='mr-4 hidden flex-[1_0_0] self-center @3xl:block'>
        <img alt='image of an RCD' className='w-full' src='/img/chint.jpg' />
      </div>
    </div>
  </div>
)

export { ServiceProfessional }
