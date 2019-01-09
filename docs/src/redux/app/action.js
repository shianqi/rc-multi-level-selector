import { createActions } from 'redux-actions'

const {
  changeLanguage
} = createActions(
  'CHANGE_LANGUAGE'
)

export default {
  changeLanguage
}
