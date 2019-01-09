import { combineReducers } from 'redux'

import app from './app/reducer'
import menu from './menu/reducer'

export default combineReducers({
  app,
  menu
})
