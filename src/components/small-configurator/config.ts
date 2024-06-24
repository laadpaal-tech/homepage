type ConfigItem = {
  id: string
  label: string
  externalCosts: number
  installationCosts: number
}

const smallConfiguratorConfig: ConfigItem[] = [
  {
    id: 'upgrade-3phase',
    label:
      'Upgrade van 1-fase naar 3-fase aansluiting (kosten netwerkbeheerder)',
    externalCosts: 310,
    installationCosts: 0
  },
  {
    id: 'box-rcd',
    label:
      'Nieuwe groepenkast, 8 groepen, 1x inductie groep, 1x laadpaal groep, variant: aardlekschakelaars',
    externalCosts: 420,
    installationCosts: 200
  },
  {
    id: 'box-rcbo',
    label:
      'Nieuwe groepenkast, 8 groepen, 1x inductie groep, 1x laadpaal groep, variant: aardlekautomaten',
    externalCosts: 550,
    installationCosts: 200
  },
  {
    id: 'group-rcd-a',
    label: 'Een laadpaal groep: aardlekschakelaar 40A Type A + krachtgroep B16',
    externalCosts: 75,
    installationCosts: 100
  },
  {
    id: 'group-rcd-b',
    label: 'Een laadpaal groep: aardlekschakelaar 40A Type B + krachtgroep B16',
    externalCosts: 192,
    installationCosts: 100
  },
  {
    id: 'group-rcbo-a',
    label: 'Een laadpaal groep: aardlekautomaat 40A Type A B16 (merk: Chint)',
    externalCosts: 87,
    installationCosts: 100
  },
  {
    id: 'group-rcbo-b',
    label: 'Een laadpaal groep: aardlekautomaat 40A Type B B16 (merk: SEP)',
    externalCosts: 350,
    installationCosts: 100
  },
  {
    id: 'charge-point',
    label: 'Laadpaal (voorbeeldprijs met load-balancing)',
    externalCosts: 1100,
    installationCosts: 0
  },
  {
    id: 'connecting-charge-point',
    label:
      'Aansluiting laadpaal aan de groepenkast (prijs vanaf, na de locatiecheck)',
    externalCosts: 25,
    installationCosts: 100
  }
]

export { smallConfiguratorConfig }
