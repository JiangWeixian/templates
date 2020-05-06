export const SCOPE = 'aiou'

export const enum TEMPLATES {
  ROLLUP_STARTER = 'rollup-template',
  REACT_PC_SPA_STARTER = 'react-template',
  CHROME_EXTENSTION_STARTER = 'chrome-extenstion-template',
}

export const templates = {
  [TEMPLATES.ROLLUP_STARTER]: 'rollup stater build pure function lib',
  [TEMPLATES.REACT_PC_SPA_STARTER]: 'webapp starter base on react react-router rematch',
  [TEMPLATES.CHROME_EXTENSTION_STARTER]: 'chrome-extenstion starter base ts rxjs react',
}
