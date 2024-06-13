const configurationOptionsNL = {
  connection: [
    { value: '1PHASE', label: '1-fase', description: null, extraInfo: null },
    { value: '3PHASE', label: '3-fase', description: null, extraInfo: null }
  ],
  upgradeConnection: [
    { value: 'YES', label: 'JA', description: null, extraInfo: null },
    { value: 'NO', label: 'NEE', description: null, extraInfo: null }
  ],
  distributionBox1Phase: [
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
  ],
  distributionBox3Phase: [
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
} as const

const configurationOptions = {
  nl: configurationOptionsNL
}

type ConfigurationOptionsNL = typeof configurationOptionsNL

type ConfigurationOptions = ConfigurationOptionsNL

export { configurationOptions }
export type { ConfigurationOptions }
