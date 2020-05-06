export enum HOST {
  MOCK = 'http://localhost:8080/api',
  CLIENT = 'https://nextjs-rematch2-template/api',
  SERVER = 'https://api.github.com',
  DEV_CLIENT = 'http://localhost:3001/api',
}

export namespace Users {
  export type Item = {
    id: number
    name: string
  }
}
