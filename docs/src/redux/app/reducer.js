import { handleActions } from 'redux-actions'

const initialState = {
  loading: false,
  language: 'zh'
}

const menuReducer = handleActions({
  CHANGE_LANGUAGE: (state, action) => ({ ...state, language: action.payload }),
  TOGGLE_LOADING_STATE: (state, action) => ({ ...state, loading: action.payload })
}, initialState)

export default menuReducer
