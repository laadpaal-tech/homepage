import InstallationDiagram from '~/assets/installatie.svg?react'
import { MakeAppointmentButton } from './MakeAppointmentButton'

const StepByStep = () => (
  <section className='bg-theme-very-light-yellow w-full p-6 text-lg'>
    <h2 className='my-6 text-center text-4xl font-bold'>
      Laadpaal installatie stap voor stap
    </h2>
    <h3 className='my-4 text-left text-2xl font-semibold italic'>
      Aansluiting
    </h3>
    <p>
      Het zal misschien een verrassing voor je zijn, maar toch heeft het
      merendeel van de Nederlandse huizen een 1-fase elektrische installatie. In
      de meeste gevallen is dit 1x25A of 1x35A aansluiting. Het opladen van een
      elektrische auto stelt hoge eisen aan uw installatie en wil je
      tegelijkertijd andere huishoudelijke apparaten zoals een oven of magnetron
      te gebruiken, dan kan een 1-fase aansluiting onvoldoende vermogen leveren.
    </p>
    <p className='mt-2'>
      Bijvoorbeeld, bij een aansluiting van 1x25A worden uw groepen in uw
      groepenkast allemaal ingesteld op 16A (om het risico te voorkomen dat de
      hoofdzekering in uw installatie doorbrandt, is het gebruikelijk om de
      maximale belasting voor een groep in te stellen op de waarde van uw
      aansluiting (hier 25A) gedeeld door een factoor van 1,6: dus 25/1,6 = 16A
      - dit wordt selectiviteit genoemd).
    </p>
    <p className='mt-2 bg-theme-light-yellow p-2 italic'>
      De NEN 1010 norm vereist dat selectiviteit wordt geïmplementeerd, maar de
      exacte waarden zijn sterk afhankelijk van de kenmerken van de hoofd
      smeltzekering en installatieautomaten.
    </p>
    <p className='mt-2'>
      Met een aansluiting van 25A zal jouw installatie dus maximaal 16A kunnen
      leveren op elk van de groepen, en je wil nooit dat het totale verbruik van
      al jouw groepen de 25A overschrijdt. Een soortgelijke berekening kan
      worden uitgevoerd voor een 1x35A-aansluiting. Dus, als u besluit uw auto
      op te laden met 16A op groep 1 en tegelijkertijd uw oven te gebruiken die
      9A verbruikt op groep 2, en wasmachine (6A) op groep 3, betekent dit dat
      je in totaal 16A + 9A + 6A = 31A nodig heb. Dit is meer dan 25A toegestaan
      door jouw hoofdzekering.
    </p>
    <p className='mt-2 bg-theme-light-yellow p-2 italic'>
      Je realiseert zich misschien al dat we, om binnen de grenzen van uw
      aansluiting te blijven, een oplossing nodig hebben die de maximale
      laadstroom, die aan uw auto wordt geleverd, aanpast op basis van het
      huidige totale energieverbruik in jouw huis. Deze oplossing wordt
      gewoonlijk load-balancing genoemd (maar verschillende fabrikanten
      gebruiken vaak verschillende namen). Op het probleem van de load-balancing
      komen we nog later terug.
    </p>
    <p className='mt-2'>
      De meeste moderne elektrische auto’s ondersteunen zowel 1-fase als 3-fase
      laden, maar zoals je mag verwachten gaat laden met 3-fasen over het
      algemeen sneller. Met een driefasige aansluiting hebben we meer energie
      die we kunnen gebruiken, maar het vereist wel dat het energieverbruik over
      alle drie de fasen in uw huis in evenwicht is. Zelfs met een moderne
      3-fase aansluiting en relatief nieuwe installaties kan het dus nodig zijn
      dat je enkele wijzigingen in de verdeelkast moet aanbrengen.
    </p>
    <p className='mt-2'>
      Over het algemeen raad ik aan om jouw installatie te upgraden naar 3
      fasen. Het is de duurste optie, maar zorgt ervoor dat je goed voorbereid
      bent op de toekomst.
    </p>
    <h3 className='my-4 text-left text-2xl font-semibold italic'>
      Groepenkast
    </h3>
    <p className='mt-2'>
      De installatie van een laadpunt stelt hogere eisen aan uw elektrische
      installatie. Als er wijzigingen plaatsvinden aan uw huidige installatie,
      moeten wij er ook voor zorgen dat uw installatie voldoet aan de NEN
      1010-regels. Zo beschikken sommige oudere verdeelkasten vaak niet over een
      hoofdschakelaar, wat verplicht is bij alle nieuwe installaties. Volgens
      NEN1010 moet een laadpunt bovendien achter een eigen aardlekschakelaar
      (RCCB) worden geplaatst, gevolgd door een installatieautomaat die
      beschermt tegen overstroom en kortsluiting.
    </p>
    <p className='mt-2'>
      Onderstaande afbeelding toont een voorbeeld van een 3-fase installatie met
      een 3x25A aansluiting:
      <InstallationDiagram />
      Na de slimme meter hebben we een hoofdschakelaar, waarna we onze reguliere
      groepen laten beveiligen door een aardlekschakelaar van Type A
      (weergegeven op een grijze achtergrond, nummer 9). Dan zien we twee
      verschillende laadpunten: één met ingebouwde DC-lekbeveiliging (RDC-DD)
      (7) en één zonder enige bescherming tegen DC-lekken (8). Voor het laadpunt
      met een RDC-DD is het toegestaan om een reguliere Type A aardlekschakelaar
      te gebruiken, terwijl voor het laadpunt zonder DC-lekbeveiliging een Type
      B aardlekschakelaar verplicht is. Een aardlekschakelaar Type B beschermt
      niet alleen tegen DC-lekken, maar detecteert ook aardlekstromen bij
      frequenties hoger dan 50/60 Hz, wat bij een 6mA RDC-DD niet het geval is.
      In beide gevallen zien we dat er sprake is van een aparte
      aardlekschakelaar gevolgd door een installatieautomaat met karakteristiek
      B en nominale stroom 16A.
    </p>
    <h3 className='my-4 text-left text-2xl font-semibold italic'>
      Plaatsing van uw laadpunt
    </h3>
    <p>
      Soms is dit een makkelijke stap, wanneer uw laadpunt dichtbij uw
      verdeelkast staat en het plaatsen van de installatiekabels eenvoudig is.
      In sommige gevallen kan dit een grotere uitdaging zijn en wat meer werk
      vergen om de benodigde kabels aan te leggen. Wij kijken samen wat de beste
      plek is om uw laadpunt te plaatsen.
    </p>
    <h3 className='my-4 text-left text-2xl font-semibold italic'>
      Het laadpunt kiezen
    </h3>
    <p>
      Wanneer uw verdeelkast klaar is en de kabels op hun plaats liggen, is het
      laatste wat u moet doen het kiezen van het juiste laadpunt voor uw
      installatie. Vaak komt het zelfs al eerder in beeld, omdat de keuze van uw
      laadpunt ernstige gevolgen kan hebben voor uw verdeelkast (beschikt het
      laadpunt over ingebouwde bescherming tegen DC-lekken?). Wij helpen u bij
      het vinden van een geschikt laadpunt van onze partners of zoeken naar
      alternatieve oplossingen als u bereid bent een beetje te experimenteren.
      Voor thuisinstallaties zijn de belangrijkste aspecten van een laadpunt het
      vermogen om DC-lekken tegen te gaan en de <i>load balancing</i>, die we
      hieronder kort zullen bespreken.
    </p>
    <h3 className='my-4 text-left text-2xl font-semibold italic'>
      Load balancing
    </h3>
    <p>
      Zoals hierboven al vermeld, gebruiken laadpunten load-balancing om het
      totale energieverbruik in uw huis te monitoren en de maximale laadstroom
      die beschikbaar is voor de auto aan te passen. Om te kunnen werken heeft
      load-balancing een meetapparaat nodig direct na uw hoofdschakelaar om de
      totale stroom in elk van de fasen te meten. Dit apparaat heeft dan een
      manier nodig om de gemeten waarden terug te communiceren naar het
      laadpunt. Dit betekent dat er een extra verbinding (een kabel) moet worden
      voorzien voor een betrouwbare load-balancing. Zo’n meetapparaat kan een
      losse energiemeter zijn die je in je groepenkast stopt, een proxy die via
      de P1-poort de gegevens van je slimme energiemeter uitleest, of (minder
      handige) CT-klemmen.
    </p>
    <p className='mt-2'>
      Ik raad ten zeerste aan om load-balancing in uw installatie toe te passen.
      Het is niet leuk om uw hoofdzekering te laten smelten, omdat er
      tussenkomst van uw netwerkbeheerder nodig is om deze te herstellen, wat u
      uiteindelijk geld zal kosten.
    </p>
    <div className='mt-6 flex w-full items-center justify-center'>
      <MakeAppointmentButton variant='yellow' />
    </div>
  </section>
)

export { StepByStep }
