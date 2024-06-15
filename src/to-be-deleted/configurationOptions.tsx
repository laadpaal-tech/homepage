const configurationOptionsNL = {
  connection: {
    control: 'radio',
    values: [
      {
        value: '1PHASE',
        label: '1-fase',
        description: null,
        extraInfo: null
      },
      {
        value: '3PHASE',
        label: '3-fase',
        description: null,
        extraInfo: null
      }
    ]
  },
  upgradeConnection: {
    control: 'radio',
    values: [
      {
        value: 'YES',
        label: 'JA',
        description: null,
        extraInfo: null
      },
      {
        value: 'NO',
        label: 'NEE',
        description: null,
        extraInfo: null
      }
    ]
  },
  currentCapacity1Phase: {
    control: 'select',
    values: [
      {
        value: '1x6A',
        label: '1x6A',
        description: null,
        extraInfo: null
      },
      {
        value: '1x10A',
        label: '1x10A',
        description: null,
        extraInfo: null
      },
      {
        value: '1x25A',
        label: '1x25A',
        description: null,
        extraInfo: null
      },
      {
        value: '1x35A',
        label: '1x35A',
        description: null,
        extraInfo: null
      },
      {
        value: '1x40A',
        label: '1x40A',
        description: null,
        extraInfo: null
      }
    ]
  },
  destinationCapacity1Phase: {
    control: 'select',
    values: [
      {
        value: '1x25A',
        label: '1x25A',
        description: null,
        extraInfo: null
      },
      {
        value: '1x35A',
        label: '1x35A',
        description: null,
        extraInfo: null
      },
      {
        value: '1x40A',
        label: '1x40A',
        description: null,
        extraInfo: null
      }
    ]
  },
  upgradeCapactity1Phase: {
    control: 'radio',
    values: [
      {
        value: 'YES',
        label: 'JA',
        description: null,
        extraInfo: null
      },
      {
        value: 'NO',
        label: 'NEE',
        description: null,
        extraInfo: null
      }
    ]
  },
  capacityInsufficient1Phase: {
    control: 'info',
    values: [
      {
        value: 'YES',
        label: 'JA',
        description: null,
        extraInfo: null
      },
      {
        value: 'NO',
        label: 'NEE',
        description: null,
        extraInfo: null
      }
    ]
  },
  distributionBox1Phase: {
    control: 'radio',
    values: [
      {
        value: 'NEWBOX',
        label: 'Nieuwe 1-fase groepenkast',
        description: 'Ik wil een nieuwe 1-fase groepenkast installeren',
        extraInfo: null
      },
      {
        value: 'NEWGROUP',
        label: 'Alleen een nieuwe groep',
        description:
          'Ik will alleen maar een nieuwe group voor de laadpaal. Ik heb voldoende ruimte in mijn huidige groepenkast om de nieuwe group te installeren',
        extraInfo: null
      }
    ]
  },
  distributionBox3Phase: {
    control: 'radio',
    values: [
      {
        value: 'NEWBOX',
        label: 'Nieuwe 1-fase groepenkast',
        description: 'Ik wil een nieuwe 3-fase groepenkast installeren',
        extraInfo: null
      },
      {
        value: 'NEWGROUP',
        label: 'Alleen een nieuwe groep',
        description:
          'Ik will alleen maar een nieuwe group voor de laadpaal. Ik heb voldoende ruimte in mijn huidige groepenkast om de nieuwe group te installeren',
        extraInfo: () => <div>ALA MA KONIA</div>
      }
    ]
  }
} as const

const configurationOptions = {
  nl: configurationOptionsNL
}

type ConfigurationOptions = typeof configurationOptions

type Language = keyof ConfigurationOptions

export { configurationOptions }
export type { ConfigurationOptions, Language }
