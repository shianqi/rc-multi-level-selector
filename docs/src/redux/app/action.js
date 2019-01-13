import { createActions } from 'redux-actions'

const {
  changeLanguage,
  toggleLoadingState
} = createActions(
  'CHANGE_LANGUAGE',
  'TOGGLE_LOADING_STATE'
)

export default {
  changeLanguage,
  toggleLoadingState
}
