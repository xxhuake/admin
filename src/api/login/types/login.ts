export interface ILoginRequestData {
  /** admin 或 editor */
  loginUsername: string
  /** 密码 */
  loginPassword: string
}

export type LoginCodeResponseData = IApiResponseData<string>

// export type LoginResponseData = IApiResponseData<{ token: string }>

export type UserInfoResponseData = IApiResponseData<{ username: string; roles: string[] }>
