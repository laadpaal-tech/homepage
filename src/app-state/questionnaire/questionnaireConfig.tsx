import type { QuestionnaireConfig } from '~/app-state/questionnaire/QuestionnaireTypes'
import {
  MustUpgradeCapacity1PhaseHeader,
  MustUpgradeCapacity1PhaseYES3PhaseDescription,
  MustUpgradeCapacity1PhaseYES1PhaseDescription
} from './extra-formatting-components/'

const ExampleAdditionalConfigurationComponent = () => <div>ALA MA KONIA</div>

const questionnaireConfig: QuestionnaireConfig = {
  connection: {
    type: 'radio',
    header: 'Wat is jouw huidige aansluiting?',
    isInitial: true,
    options: [
      {
        value: '1PHASE',
        label: '1-fase'
      },
      {
        value: '3PHASE',
        label: '3-fase'
      }
    ]
  },
  upgradeConnection: {
    type: 'radio',
    header: 'Wil je jouw aansluiting upgraden naar 3-fase aansluiting?',
    options: [
      {
        value: 'YES',
        label: 'JA'
      },
      {
        value: 'NO',
        label: 'NEE'
      }
    ]
  },
  upgradeCapactity1Phase: {
    type: 'radio',
    header: 'Wil je jouw huidige 1-fase aansluiting verzwaren?',
    options: [
      {
        value: 'YES',
        label: 'JA',
        description: (
          <span>
            Vanaf jouw huidige aansluiting <strong>1x25A</strong> kan je alleen
            nog <strong>1x35A</strong> aanvragen. Er zijn{' '}
            <strong>geen eenmalige kosten</strong>
            verbonden en jouw maandelijkse netwerkkosten blijven dezelfde
            <strong>€35,59</strong>.
          </span>
        )
      },
      {
        value: 'NO',
        label: 'NEE'
      }
    ]
  },
  mustUpgradeCapactity1Phase: {
    type: 'radio',
    header: '',
    headerComponent: MustUpgradeCapacity1PhaseHeader,
    options: [
      {
        value: 'YES-1phase',
        label: 'JA, ik wil mijn 1-fase aansluiting verzwaren',
        descriptionComponent: MustUpgradeCapacity1PhaseYES1PhaseDescription
      },
      {
        value: 'YES-3phase',
        label: 'Ik ga direct 3-fase aansluiting aanvragen',
        descriptionComponent: MustUpgradeCapacity1PhaseYES3PhaseDescription
      },
      {
        value: 'NO',
        label: 'NEE, Ik moet nog er over nadenken...'
      }
    ]
  },
  currentCapacity1Phase: {
    type: 'select',
    header: 'Wat is jouw huidige 1-fase aansluiting waarde?',
    label: 'aansluiting waarde:',
    options: [
      {
        value: '1x6A',
        label: '1x6A'
      },
      {
        value: '1x10A',
        label: '1x10A'
      },
      {
        value: '1x25A',
        label: '1x25A'
      },
      {
        value: '1x35A',
        label: '1x35A'
      },
      {
        value: '1x40A',
        label: '1x40A'
      }
    ]
  },
  destinationCapacity1Phase: {
    type: 'select',
    header: 'Wat is jouw gewenste 1-fase aansluiting waarde?',
    label: 'aansluiting waarde:',
    options: []
  },
  distributionBox1Phase: {
    type: 'radio',
    header: 'Wat moet er gebeuren met jouw 1-fase groepenkast?',
    // label: '3-fase groepenkast',
    options: [
      {
        value: 'NEWBOX',
        label: 'Nieuwe 1-fase groepenkast',
        description: 'Ik wil een nieuwe 1-fase groepenkast installeren'
      },
      {
        value: 'NEWGROUP',
        label: 'Alleen een nieuwe groep',
        description:
          'Ik will alleen maar een nieuwe group voor de laadpaal. Ik heb voldoende ruimte in mijn huidige groepenkast om de nieuwe group te installeren'
      }
      // next: (value: string) => {
      //   if (value === 'YES') {
      //     return 'distributionBox3Phase'
      //   } else {
      //     return 'distributionBox1Phase'
      //   }
      // }
    ]
  },
  distributionBox3Phase: {
    type: 'radio',
    header: 'Wat moet er gebeuren met jouw 3-fase groepenkast?',
    // label: '3-fase groepenkast',
    options: [
      {
        value: 'NEWBOX',
        label: 'Nieuwe 1-fase groepenkast',
        description: 'Ik wil een nieuwe 3-fase groepenkast installeren'
      },
      {
        value: 'NEWGROUP',
        label: 'Alleen een nieuwe groep',
        description:
          'Ik will alleen maar een nieuwe group voor de laadpaal. Ik heb voldoende ruimte in mijn huidige groepenkast om de nieuwe group te installeren',
        additionalConfigurationComponent:
          ExampleAdditionalConfigurationComponent
      }
      // next: (value: string) => {
      //   if (value === 'YES') {
      //     return 'distributionBox3Phase'
      //   } else {
      //     return 'distributionBox1Phase'
      //   }
      // }
    ]
  },
  endConfigurator: {
    type: 'info',
    header: (
      <span>
        Bedankt voor het gebruik van de configurator. U kunt opnieuw beginnen
        door op de onderstaande knop <strong>Wissen</strong> te klikken.
      </span>
    ),
    label: 'Wissen',
    infoStepAction: 'clear',
    options: []
  }
}

export { questionnaireConfig }
