export interface IAuthOtp {
  mobileNumber: string;
  serviceSid: string;
  status: string;
  sendedAt: Date;
  locale: string;
}

export interface IAuthOtpVerify {
  type: string;
  accessToken: string;
}
