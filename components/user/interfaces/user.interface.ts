export interface IUser {
  _id?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  mobileNumber?: string;
  avatar?: string;
  dateOfBirth?: IUserDateOfBirth;
  gender?: UserGenderEnum;
  bio?: string;
  skills?: IUserSkill[];
  address?: IUserAddress;
  experiences?: IUserExperience[];
  career?: string;
  type?: UserTypeEnum;
  login?: IUserLogin;
  device?: IUserDevice;
  preferedWorkLocation?: IUserPreferedWorkLocation;
  identityVerification?: IUserIdentityVerification;
  addresses?: any[];
  socials?: any[];
  createdAt?: Date;
  updatedAt?: Date;
  email?: string;
  id?: string;
}

export interface IUserAddress {
  fullAddress: string;
  postcode: string;
}

export interface IUserDateOfBirth {
  date: string;
  month: string;
  year: string;
}

export interface IUserDevice {
  deviceId: string;
  deviceName: string;
  platform: string;
  pushToken: string;
}

export interface IUserExperience {
  company: string;
  title: string;
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  currently: string;
  _id: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface IUserLogin {
  status: UserLoginStatusEnum;
  logonTime: null;
}

export interface IUserPreferedWorkLocation {
  name: string;
  googleFullAddress: string;
  googlePlaceId: string;
  address: string;
  subDistrict: string;
  district: string;
  province: string;
  postcode: string;
  radius: number;
  geometry: IUserPreferedWorkLocationGeometry;
  _id: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface IUserPreferedWorkLocationGeometry {
  type: string;
  coordinates: number[];
}

export interface IUserSkill {
  parent: string;
  childrens: IUserSkillChildren[];
  location: Location;
  wageRate: number;
  _id: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface IUserSkillChildren {
  _id: string;
  name: string;
  parent: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface IUserLocation {
  all: boolean;
  provinces: any[];
}

export interface IUserIdentityVerification {
  address: string;
  firstName: string;
  gender: UserGenderEnum;
  lastName: string;
  number: number;
  postcode: string;
  prefix: UserPrefixEnum;
  type: string;
  updatedAt: Date;
  document1: string;
  document2: string;
  status: string;
  note: null;
}

export enum UserGenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
  NOT_SPECIFIED = 'NOT_SPECIFIED',
}

export enum UserPrefixEnum {
  MISS = 'MISS',
  MRS = 'MRS',
  MR = 'MR',
}

export enum UserTypeEnum {
  LABOURER = 'LABOURER',
  EMPLOYER = 'EMPLOYER',
  NOT_SPECIFIED = 'NOT_SPECIFIED',
}

export enum UserSocialEnum {
  FACEBOOK = 'FACEBOOK',
  GOOGLE = 'GOOGLE',
  LINE = 'LINE',
}

export enum UserNationalIdentityStatusEnum {
  NOT_VERIFIED = 'NOT_VERIFIED',
  VERIFIED = 'VERIFIED',
  REVIEWING = 'REVIEWING',
  REJECTED = 'REJECTED',
  REQUEST_REVIEW = 'REQUEST_REVIEW',
}

export enum UserIdentityVerificationStatusEnum {
  NOT_VERIFIED = 'NOT_VERIFIED',
  VERIFIED = 'VERIFIED',
  REQUEST_REVIEW = 'REQUEST_REVIEW',
  REVIEWING = 'REVIEWING',
  REJECTED = 'REJECTED',
}

export enum UserIdentityVerificationTypeEnum {
  ID_CARD = 'ID_CARD',
  DRIVER_LICENSE = 'DRIVER_LICENSE',
  PASSPORT = 'PASSPORT',
}

export enum UserIdentityVerificationDocumentOrderEnum {
  DOCUMENT_1 = 'DOCUMENT_1',
  DOCUMENT_2 = 'DOCUMENT_2',
}

export enum UserLoginStatusEnum {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
}

export enum UserDevicePlatformEnum {
  ANDROID = 'ANDROID',
  IOS = 'IOS',
}
