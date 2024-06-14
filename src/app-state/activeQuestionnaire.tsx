import { atom } from 'recoil'
import type { ActiveQuestionnaire } from './ActiveQuestionnaireTypes'
import { QuestionnaireStateMachine } from './QuestionnaireStateMachine'

const activeQuestionnaire = atom<ActiveQuestionnaire>({
  key: 'activeQuestionnaire',
  default: QuestionnaireStateMachine.init()
})

export { activeQuestionnaire }
