import _axios from '../config/axios';
import { AuthSendOtpDto } from '../dtos/auth-send-otp';
import { AuthVerifyOtpDto } from '../dtos/auth-verify-otp';
import { IAuthOtp, IAuthOtpVerify } from '../interfaces/auth.interface';

export class AuthService {
  constructor() {}

  /**
   * Send otp
   * @param payload
   * @memberOf AuthService
   * @returns {Promise<IAuth>}
   */
  sendOtp(payload: AuthSendOtpDto): Promise<IAuthOtp> {
    return new Promise<IAuthOtp>(async (resolve, reject) => {
      try {
        const { data } = await _axios.post<IAuthOtp>('/auth/send-otp', payload);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Verify otp
   * @param payload
   * @memberOf AuthService
   * @returns {Promise<IAuth>}
   */
  verifyOtp(payload: AuthVerifyOtpDto): Promise<IAuthOtpVerify> {
    return new Promise<IAuthOtpVerify>(async (resolve, reject) => {
      try {
        const { data } = await _axios.post<IAuthOtpVerify>('/auth/verify-otp', payload);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }
}
