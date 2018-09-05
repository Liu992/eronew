import * as types from '../content';

let initialState = {
  name: 'intlLang',
  lang: "zh"
}
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LANG:
      return {
        ...state,
        lang: action.lang
      }
    default: return state
  }
}

export default reducer