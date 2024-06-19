import { DefaultValue, atom, selectorFamily } from 'recoil'

type FuseBoxOption = {
  value: string
  label: string
}

type FuseBoxItemName =
  | 'solar'
  | 'rcds'
  | 'induction'
  | 'brand'
  | 'chargePointDCProtection'

type FuseBoxItem = {
  name: FuseBoxItemName
  label: string
  extraLabel?: string
  options: FuseBoxOption[]
  extraOptions?: FuseBoxOption[]
}

const solar: FuseBoxItem = {
  name: 'solar',
  label: 'zonnepanelengroep',
  options: [
    { value: 'solar-yes', label: 'JA' },
    { value: 'solar-no', label: 'NEE' }
  ],
  extraLabel: 'inverter met ingebouwde DC-lekbeveiliging',
  extraOptions: [
    { value: 'dc-protection-no', label: 'NEE' },
    { value: 'dc-protection-yes', label: 'JA' }
  ]
}

const rcds: FuseBoxItem = {
  name: 'rcds',
  label: 'aardlekschakelaars of aardlekautomaten',
  options: [
    { value: 'rcd', label: 'aardlekschakelaars' },
    { value: 'rcbo', label: 'aardlekautomaten' }
  ]
}

const induction: FuseBoxItem = {
  name: 'induction',
  label: 'fornuisgroep',
  options: [
    { value: 'induction-yes', label: 'JA' },
    { value: 'induction-no', label: 'NEE' }
  ]
}

const brand: FuseBoxItem = {
  name: 'brand',
  label: 'groepen merk',
  options: [
    { value: 'schneider-electric', label: 'Schneider Electric' },
    { value: 'emat-schneider', label: 'EMAT in Schneider kast' },
    { value: 'chint-schneider', label: 'CHINT in Schneider kast' },
    {
      value: 'emat-chint-schneider',
      label: 'EMAT/CHINT Type B in Schneider kast'
    },
    { value: 'abb', label: 'ABB' }
  ]
}

const chargePointDCProtection: FuseBoxItem = {
  name: 'chargePointDCProtection',
  label: 'laadpunt met ingebouwde DC-lekbeveiliging',
  options: [
    { value: 'rdc-dd-yes', label: 'JA' },
    { value: 'rdc-dd-no', label: 'NEE' }
  ]
}

const fuseBoxConfigOptionsArray: FuseBoxItem[] = [
  rcds,
  induction,
  solar,
  brand,
  chargePointDCProtection
]

type FuseBoxConfigItem = {
  value: string
  extraValue?: string
  price: number
}

type FuseBoxConfig = {
  [Key in FuseBoxItemName]: FuseBoxConfigItem
}

const defaultBoxConfig: FuseBoxConfig = {
  solar: {
    value: 'solar-no',
    extraValue: 'dc-protection-yes',
    price: 0
  },
  rcds: {
    value: 'rcd',
    price: 0
  },
  induction: {
    value: 'induction-no',
    price: 0
  },
  brand: {
    value: 'schneider-electric',
    price: 0
  },
  chargePointDCProtection: {
    value: 'rdc-dd-yes',
    price: 0
  }
}

const fuseBoxConfig = atom<FuseBoxConfig>({
  key: 'fuseBoxConfig',
  default: defaultBoxConfig
})

const boxConfigItem = selectorFamily<FuseBoxConfigItem, FuseBoxItemName>({
  key: 'boxConfigItem',
  get:
    (name: FuseBoxItemName) =>
    ({ get }) => {
      const fullConfig = get(fuseBoxConfig)
      return fullConfig[name]
    },

  // optional set
  set:
    (name: FuseBoxItemName) =>
    ({ set, get }, newValue) => {
      const fullConfig = get(fuseBoxConfig)
      if (newValue instanceof DefaultValue) {
        const newConfig: FuseBoxConfig = {
          ...fullConfig,
          [name]: defaultBoxConfig[name]
        }
        set(fuseBoxConfig, newConfig)
      } else {
        const newConfig: FuseBoxConfig = {
          ...fullConfig,
          [name]: newValue
        }
        set(fuseBoxConfig, newConfig)
      }
    }
})

export {
  fuseBoxConfigOptionsArray,
  fuseBoxConfig,
  boxConfigItem,
  defaultBoxConfig
}
export type {
  FuseBoxOption,
  FuseBoxItem,
  FuseBoxItemName,
  FuseBoxConfigItem,
  FuseBoxConfig
}
