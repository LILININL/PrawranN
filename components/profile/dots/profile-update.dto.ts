import { UserGenderEnum } from '../../user/interfaces/user.interface';

export class ProfileUpdateDto {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: {
    date: string;
    month: string;
    year: string;
  };
  gender?: UserGenderEnum;
  avatar?: string;
}
