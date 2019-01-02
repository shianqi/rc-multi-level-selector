import { handleActions } from 'redux-actions'

const initialState = {
  menuOpenState: {}
}

const menuReducer = handleActions({
  TOGGLE_MENU_OPEN_STATE: (state, action) => {
    const { menuOpenState } = state
    return {
      ...state,
      menuOpenState: {
        ...menuOpenState,
        [action.payload]: !menuOpenState[action.payload]
      }
    }
  }
}, initialState)

export default menuReducer
