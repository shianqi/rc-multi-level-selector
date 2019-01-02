import { createActions } from 'redux-actions'

const {
  toggleMenuOpenState
} = createActions(
  'TOGGLE_MENU_OPEN_STATE'
)

export default {
  toggleMenuOpenState
}
