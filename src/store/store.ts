import { tokenReducer } from './tokens/tokensReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: tokenReducer });

export default store;