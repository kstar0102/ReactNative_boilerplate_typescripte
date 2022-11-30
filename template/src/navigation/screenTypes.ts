export enum APP_SCREEN {
  UN_AUTHORIZE = 'UN_AUTHORIZE',
  SPLASH = 'SPLASH',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  AUTHORIZE = 'AUTHORIZE',
  HOME = 'HOME',
  PRODUCT_DETAILS = 'PRODUCT_DETAILS',
}

export type RootStackParamList = {
  [APP_SCREEN.UN_AUTHORIZE]: undefined
  [APP_SCREEN.AUTHORIZE]: undefined
  [APP_SCREEN.SPLASH]: undefined
  [APP_SCREEN.LOGIN]: undefined
  [APP_SCREEN.REGISTER]: undefined
  [APP_SCREEN.HOME]: undefined
  [APP_SCREEN.PRODUCT_DETAILS]: {
    sku: number
  }
}

export type RootStackParamListType = keyof RootStackParamList
