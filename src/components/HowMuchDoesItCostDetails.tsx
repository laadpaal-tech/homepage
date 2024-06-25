import { Link } from 'react-router-dom'
import { MakeAppointmentButton } from './MakeAppointmentButton'
import { SmallConfigurator } from './small-configurator/SmallConfigurator'

const HowMuchDoesItCostDetails = () => (
  <div className='flex w-full flex-col items-center bg-theme-very-light-yellow'>
    <section className='w-full max-w-5xl bg-theme-very-light-yellow p-6 text-lg'>
      <h2 className='my-6 text-center text-4xl font-bold'>
        Wat kost een laadpaal installatie?
      </h2>
      <p>
        Dit is waarschijnlijk de vraag die je eerst wilt stellen en ik kan me
        voorstellen hoe frustrerend het is om te horen dat het antwoord niet zo
        eenvoudig is.
      </p>
      <p className='mt-2'>
        Ook al is de prijs van de laadpaal zelf makkelijk te vinden, en
        misschien heb je zelf al een klein onderzoekje gedaan, er is nog veel
        meer waar je rekening mee moet houden. De onzekerheid komt uit drie
        vlakken: (1) jouw huidige energieaansluiting, (2) de staat van jouw
        elektrische installatie, en (3) hoe moeilijk het is om vanuit uw
        groepenkast jouw laadpaal te bereiken.
      </p>
      <p className='mt-2'>
        In onderstaande interactieve tabel zie je de meest voorkomende
        prijscomponenten bij het installeren van een laadpaal. Daar kan je de
        artikelen selecteren die je nodig hebt en de totaalprijs bekijken.{' '}
      </p>
      <p className='mb-2 mt-2 bg-theme-light-yellow p-2 font-bold'>
        Let op: de getoonde prijzen zijn niet uitputtend en slechts een
        indicatie. Lees aub de onderstaande beschrijving voor een meer
        gedetailleerde uitleg.
      </p>
      <SmallConfigurator />
      <h3 className='my-6 text-2xl font-bold'>Aansluiting</h3>
      <p className='mt-2'>
        Als je een 1-fase aansluiting hebt, raad ik sterk aan om te upgraden
        naar 3-fasen. Overstappen van de meest voorkomende <i>1x25A</i> of{' '}
        <i>1x35A</i> aansluiting naar <i>3x25A</i> zal je kosten ongeveer{' '}
        <strong>€310,-</strong> als eenmalige betaling aan jouw
        netwerkbeheerder, zonder enige wijziging in uw maandelijkse
        netwerkkosten (ongeveer <strong>€36,-</strong>). Als jouw startpunt{' '}
        <i>1x6A</i> is, kost het upgraden naar <i>3x25A</i>
        je ongeveer <strong>€604,-</strong> (en verhoging van jouw maandelijkse
        kosten van ongeveer <strong>€11,-</strong> naar de hierboven genoemde{' '}
        <strong>€36,-</strong>).
      </p>
      <p className='mt-2 bg-theme-light-yellow p-2 italic'>
        Er zijn meer mogelijkheden en je kunt makkelijk verdwalen. Daarom werk
        ik aan een staap-voor-staap configurator die je door het proces gaat
        begeleiden. Stay tunned!
      </p>
      <p className='mt-2'>
        Waarom niet direct upgraden naar <i>3x35A</i> of meer? Hoewel de
        eenmalige betaling vaak hetzelfde blijft, stijgen uw maandelijkse kosten
        dramatisch. Voor een <i>3x35A</i> aansluiting bedragen jouw maandelijkse
        netwerkkosten bijvoorbeeld ongeveer <strong>€150,-</strong>. Alle
        besparingen die je hoopte te realiseren door b.v. thuis je auto opladen
        tegen een laag tarief, gaat op aan die hoge netwerkkosten. Bovendien kan
        de wachttijd voor een sterkere verbinding lang zijn, rekening houdend
        met de huidige uitdagingen waarmee veel netwerkbeheerders worden
        geconfronteerd.
      </p>
      <p className='mt-2 bg-theme-light-yellow p-2 italic'>
        Veel klanten worden al geconfronteerd met lange wachttijden (soms
        maanden) bij het upgraden van hun installatie naar 3-fasen. In zo'n
        geval moeten we zoeken naar een tijdelijke oplossing zonder de kosten
        onnodig te verhogen.
      </p>
      <h3 className='my-6 text-2xl font-bold'>
        De staat van jouw elektrische installatie
      </h3>
      <p className='mt-2'>
        Dit komt meestal neer op de conditie van jouw groepenkast. Is jouw
        groepenkast oud? Nog steeds kom ik groepenkast tegen met oude
        smeltzekeringen en zonder hoofdschakelaar (verplicht in elke nieuwe
        installatie). Die groepenkasten zijn aan vervanging toe. Als je besluit
        om te upgraden naar 3-fasen, moet je jouw kastje wel vervangen. Ook als
        jouw groepenkast te klein is om het te uitbreiden met een nieuwe groep,
        is het de moeite waard om een update te overwegen (soms kan je een extra
        kleine kastje naast de bestaande groepenkast plaatsen - een beetje
        goedkoper maar niet erg pragmatisch en elegant). Het goede nieuws is dat
        het vervangen van de groepenkast voorspelbaar is en niet duur hoeft te
        zijn.
      </p>
      <p className='mt-2'>
        De prijs van een verdeelkast is sterk afhankelijk van het merk: er zijn
        zogenoemd A-merken, maar goedkopere alternatieven zijn ook prima
        geschikt voor thuisinstallaties. Het is ook de moeite waard om te
        overwegen om de combinatie van de reguliere
        aardlekschakelaars/installatieautomaten te vervangen met
        aardlekautomaten. Een installatieautomaat beschermt jouw installatie (en
        jouw) tegen overbelasting en kortsluiting, terwijl een aardlekschakelaar
        schakelt automatisch af als er lekstroom wordt gedetecteerd en dus
        beschermt tegen gevaren van indirect contact en directe aanraking met de
        fase onder spanning. Volgens de NEN1010-regels een aardlekschakelaar kan
        beschermen maximaal vier groepen. Het betekent ook dat als een
        aardlekschakelaar een lekstroom detecteert, alle vier afhankelijke
        groepen worden uitgeschakeld. Een aardlekautomaat combineert een
        aardlekschakelaar en aardlekautomaat in één apparaat. Het is een beetje
        duurder maar heeft voordelen. Niet alleen bespaart het wat ruimte in de
        groepenkast (je hoeft deze losse aardlekschakelaars niet meer te
        installeren), maar ook verbetert selectiviteit: door een lekstroom in
        één van de groepen wordt alleen die groep uitgeschakeld.
      </p>
      <p className='mt-2'>
        De kosten van een 3-fase groepenkast met 8 reguliere groepen, één
        krachtgroep voor een inductiekookplaat en één krachtgroep voor het
        laadpunt kunnen variëren van <strong>€420,-</strong> voor de variant met
        aardlekschakelaars tot <strong>€550,-</strong> voor de variant met
        aardlekautomaten. Hierbij gaan we ervan uit dat jouw laadpaal een
        ingebouwde bescherming tegen DC-lekken biedt (de meeste laadpunten op de
        markt hebben dat wel). Als dit niet het geval is, moet je voor jouw
        laadpaal groep een aardlekschakelaar <i>Type B</i> gebruiken (meer
        hierover kan je op pagina{' '}
        <Link
          target='_blank'
          aria-label='Read more about using RCD Type B'
          to='/step-by-step#RCD-DC-TypeB'
          className='link'
        >
          Laadpaal installatie stap voor stap
        </Link>{' '}
        lezen), die aanzienlijk duurder is dan een aardlekschakelaar{' '}
        <i>Type A</i>: in dit geval moet je ongeveer <strong>€100,-</strong>{' '}
        toevoegen op de bovengenoemde prijzen. Ga je voor A-merk componenten,
        zoals Schneider Electric, zullen de prijzen zelfs hoger zijn: een
        Schneider Electric groepenkast voor de bovenstaande configuratie kost
        ongeveer <strong>€920,-</strong> voor de optie met aardlekschakelaars en
        installatieautomaten en (verrassend genoeg) <i>slechts</i>{' '}
        <strong>€900,-</strong> voor de optie met aardlekautomaten.
      </p>
      <p className='mt-2'>
        De installatiekosten voor het vervangen van de gehele groepenkast
        bedragen <strong>€200,-</strong>. Dit is inclusief van het spreiden van
        uw apparaten over de fasen voor de optimale laadervaring. Wanneer je
        slechts één groep voor het laadpunt hoeft toe te voegen, bedragen de
        installatiekosten maximaal <strong>€100,-</strong> (zonder de kosten van
        de groep en benodigde bekabeling).
      </p>
      <h3 className='my-6 text-2xl font-bold'>De kosten van de laadpaal</h3>
      <p className='mt-2'>
        De kosten van een laadpaal kunnen per merk altijd variëren, maar het is
        redelijk om aan te nemen dat de prijs van een laadpaal samen met
        benodigde energiemeter voor de load balancing rond{' '}
        <strong>€1100,-</strong> ligt (lees meer over load balancing op pagina{' '}
        <Link
          target='_blank'
          aria-label='Read more about load balancing'
          to='/step-by-step#load-balancing'
          className='link'
        >
          Laadpaal installatie stap voor stap
        </Link>
        ). Er zijn minder bekende, maar ook zeer betrouwbare oplossingen waarmee
        jij deze kosten met minstens 50% kan verlagen. Neem contact op voor meer
        informatie.
      </p>
      <h3 className='my-6 text-2xl font-bold'>
        De laadpaal aansluiten op jouw groepenkast
      </h3>
      <p className='mt-2'>
        Tot slot het laatste stap: het laadpunt aansluiten op jouw groepenkast.
        Wanneer het laadpunt dichtbij de groepenkast staat en het (subjectief)
        eenvoudig is om de kabel aan te leggen, dan kost het aansluiten van het
        laadpunt op uw groepenkast tussen <strong>€100,-</strong> en{' '}
        <strong>€200,-</strong>. Wanneer er meer werkzaamheden gedaan moeten
        worden (graven in de tuin, boren in het beton waarvoor waterkoeling
        nodig is), zal de prijs variëren. Ik raad altijd aan om even een snelle
        check op de locatie te doen (het is nu gratis en vrijblijvend). Dit is
        ook het gebied waarop je kan besparen door zelf wat werk te doen.
      </p>
      <p className='mt-2'>
        Deze ruwe kostenvergelijking is geenszins bedoeld om uitputtend te zijn,
        maar ik hoop dat het jij een idee geeft van wat kan je verwachten.
      </p>
      <p className='mt-2'>
        Ik hoop dat nu begrijp je waarom het zo moeilijk is om je een
        nauwkeurige kostenraming te geven zonder jouw situatie te kennen. Het
        goedkoopste geval is wanneer je al een 3-fase aansluiting hebt, een
        redelijk nieuwe groepenkast waarbij we alleen een nieuwe groep voor het
        laadpunt hoeven toe te voegen, en wanneer het laadpunt eenvoudig aan te
        sluiten is op de groepenkast. Dan zijn de kosten ongeveer{' '}
        <strong>€1300,-</strong>. Wil je jouw aansluiting upgraden van 1-fase
        naar 3-fase en heb je een nieuwe groepenkast nodig, dan ben je minimaal{' '}
        <strong>€1710,-</strong> kwijt.
      </p>
      <p className='mt-2 bg-theme-light-yellow p-2 italic'>
        Ik hoop binnenkort een meer interactieve configurator op mijn site te
        hebben, zodat je op een handigere manier zelf verschillende opties kan
        testen.
      </p>
      <div className='mt-6 flex w-full items-center justify-center'>
        <MakeAppointmentButton
          variant='yellow'
          sourceId='HowMuchDoesItCostDetails'
        />
      </div>
    </section>
  </div>
)

export { HowMuchDoesItCostDetails }
