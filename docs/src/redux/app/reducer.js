import { handleActions } from 'redux-actions'

const initialState = {
  language: 'zh'
}

const menuReducer = handleActions({
  CHANGE_LANGUAGE: (state, action) => ({ ...state, language: action.payload })
}, initialState)

export default menuReducer
