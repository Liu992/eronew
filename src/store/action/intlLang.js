import * as types from '../content';

let intlLang = (lang) => {
  return {
    type: types.GET_LANG,
    lang
  }
}

export default intlLang