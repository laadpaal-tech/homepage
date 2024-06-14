import { atom } from 'recoil'
import type { ActiveQuestionnaire } from './ActiveQuestionnaireTypes'
import { QuestionnaireStateMachine } from '../components/questionnaire/questionnaire-state-machine/QuestionnaireStateMachine'

const activeQuestionnaire = atom<ActiveQuestionnaire>({
  key: 'activeQuestionnaire',
  default: QuestionnaireStateMachine.init()
})

export { activeQuestionnaire }
