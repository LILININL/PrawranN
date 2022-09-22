import _axios from '../config/axios';
import { IUser } from '../user/interfaces/user.interface';
import { ProfileUpdateDto } from '../profile/dots/profile-update.dto';
import { ProfileTypeUpdateDto } from '../profile/dots/profile-type-update.dto';

export class ProfileService {
  constructor() { }

  /**
   * Get user profile
   * @returns
   */
  get() {
    return new Promise<IUser>(async (resolve, reject) => {
      try {
        const { data } = await _axios.get<IUser>('/profile');
        return resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Update profile basic information
   * @param payload
   * @returns
   */
  update(payload: ProfileUpdateDto) {
    return new Promise<IUser>(async (resolve, reject) => {
      try {
        const { data } = await _axios.put<IUser>('/profile', payload);
        return resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Update type
   * @param payload
   * @returns
   */
  typeUpdate(payload: ProfileTypeUpdateDto) {
    return new Promise<IUser>(async (resolve, reject) => {
      try {
        const { data } = await _axios.put<IUser>('/profile/type', payload);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Create or update profile avatar
   * @param payload
   * @returns
   */
  avatarUpload(payload: FormData) {
    return new Promise<IUser>(async (resolve, reject) => {
      try {
        const { data } = await _axios.post<IUser>('/profile/avatar', payload);
        return resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }
}