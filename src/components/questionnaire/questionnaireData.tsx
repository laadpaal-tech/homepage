const questionnaireNL = {
  connection: {
    question: 'Wat is jouw huidige aansluiting?',
    label: 'huidige aansluiting',
    next: (value: string) => {
      if (value === '1PHASE') {
        return 'upgradeConnection'
      } else {
        return 'distributionBox3Phase'
      }
    }
  },
  upgradeConnection: {
    question: 'Wil je jouw aansluiting upgraden naar 3-fase aansluiting?',
    label: 'upgraden?',
    next: (value: string) => {
      if (value === 'YES') {
        return 'distributionBox3Phase'
      } else {
        return 'distributionBox1Phase'
      }
    }
  },
  distributionBox1Phase: {
    question: 'distributionBox1Phase?',
    label: 'upgraden?',
    next: (value: string) => {
      if (value === 'YES') {
        return 'distributionBox3Phase'
      } else {
        return 'distributionBox1Phase'
      }
    }
  },
  distributionBox3Phase: {
    question: 'Wat moet er gebeuren met jouw 3-fase groepenkast?',
    label: '3-fase groepenkast',
    next: (value: string) => {
      if (value === 'YES') {
        return 'distributionBox3Phase'
      } else {
        return 'distributionBox1Phase'
      }
    }
  }
} as const

const questionnaireData = {
  nl: questionnaireNL
}

type Language = keyof typeof questionnaireData

export { questionnaireData }
export type { Language }
