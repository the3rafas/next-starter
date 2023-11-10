/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: unknown; output: unknown; }
  Timestamp: { input: number; output: number; }
  /** Upload custom scalar type */
  Upload: { input: unknown; output: unknown; }
};

export enum BloodTypeEnum {
  AbMinus = 'AB_MINUS',
  AbPlus = 'AB_PLUS',
  AMinus = 'A_MINUS',
  APlus = 'A_PLUS',
  BMinus = 'B_MINUS',
  BPlus = 'B_PLUS',
  OMinus = 'O_MINUS',
  OPlus = 'O_PLUS'
}

export type ChangePasswordInput = {
  confirmPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword?: InputMaybe<Scalars['String']['input']>;
};

export type CheckSocialStatusInput = {
  email: Scalars['String']['input'];
  isManuallyEntered?: Scalars['Boolean']['input'];
  provider: SocialProvidersEnum;
  providerId: Scalars['String']['input'];
};

export type CountryNameAnd2IsoCode = {
  __typename?: 'CountryNameAnd2IsoCode';
  isoCode: Scalars['String']['output'];
  localeName: Scalars['String']['output'];
};

export enum DeviceEnum {
  Android = 'ANDROID',
  Desktop = 'DESKTOP',
  Ios = 'IOS'
}

export type EmailAndPasswordLoginInput = {
  device: DeviceEnum;
  email: Scalars['String']['input'];
  fcmToken?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role?: InputMaybe<UserRoleEnum>;
};

export enum FileModelEnum {
  AppointmentMessages = 'APPOINTMENT_MESSAGES',
  ConsultationsAttachments = 'CONSULTATIONS_ATTACHMENTS',
  DoctorDocument = 'DOCTOR_DOCUMENT',
  DoctorSchs = 'DOCTOR_SCHS',
  ExpertiseLevels = 'EXPERTISE_LEVELS',
  FamilyMemberProfile = 'FAMILY_MEMBER_PROFILE',
  ProfilePicture = 'PROFILE_PICTURE',
  Users = 'USERS'
}

export type ForgetPasswordInput = {
  email: Scalars['String']['input'];
};

export enum GenderEnum {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type GqlBooleanResponse = {
  __typename?: 'GqlBooleanResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type GqlCountryNameAnd2IsoCodesArrayResponse = {
  __typename?: 'GqlCountryNameAnd2IsoCodesArrayResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<Array<Maybe<CountryNameAnd2IsoCode>>>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type GqlLanguageTypesPagination = {
  __typename?: 'GqlLanguageTypesPagination';
  items?: Maybe<Array<Maybe<LanguageType>>>;
  pageInfo: PageInfo;
};

export type GqlLanguageTypesResponse = {
  __typename?: 'GqlLanguageTypesResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<GqlLanguageTypesPagination>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type GqlSocialRegisterTypeResponse = {
  __typename?: 'GqlSocialRegisterTypeResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<SocialRegisterType>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type GqlStringResponse = {
  __typename?: 'GqlStringResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type GqlUserResponse = {
  __typename?: 'GqlUserResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<User>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type GqlUserSocialAccountsArrayResponse = {
  __typename?: 'GqlUserSocialAccountsArrayResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<Array<Maybe<UserSocialAccount>>>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type GqlUsersPagination = {
  __typename?: 'GqlUsersPagination';
  items?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
};

export type GqlUsersResponse = {
  __typename?: 'GqlUsersResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<GqlUsersPagination>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export enum LangEnum {
  Ar = 'AR',
  En = 'EN'
}

export type LanguageType = {
  __typename?: 'LanguageType';
  id: Scalars['Int']['output'];
  localeName: Scalars['String']['output'];
};

export type LastLoginDetails = {
  __typename?: 'LastLoginDetails';
  lastLoginAt?: Maybe<Scalars['Timestamp']['output']>;
  lastLoginDevice?: Maybe<DeviceEnum>;
  platformDetails?: Maybe<Scalars['JSON']['output']>;
  readableLastLoginAt?: Maybe<Scalars['String']['output']>;
};

export type LinkSocialAccountInput = {
  provider: SocialProvidersEnum;
  providerId: Scalars['String']['input'];
};

export enum MaritalStatusEnum {
  Divorced = 'DIVORCED',
  Engaged = 'ENGAGED',
  Married = 'MARRIED',
  Single = 'SINGLE',
  Widowed = 'WIDOWED'
}

export type Mutation = {
  __typename?: 'Mutation';
  changeEmail: GqlUserResponse;
  changePassword: GqlUserResponse;
  deleteAccount: GqlBooleanResponse;
  disconnectSocialAccount: GqlBooleanResponse;
  emailAndPasswordLogin: GqlUserResponse;
  emailAndPasswordLoginBoard: GqlUserResponse;
  forgetPassword: GqlBooleanResponse;
  linkSocialAccount: GqlBooleanResponse;
  logout: GqlBooleanResponse;
  registerAs: GqlBooleanResponse;
  resendEmailVerificationCode: GqlBooleanResponse;
  resetPassword: GqlUserResponse;
  seedAdmin: GqlBooleanResponse;
  seedTenant: GqlBooleanResponse;
  setLastActiveDetails: GqlUserResponse;
  setUserPersonalInformation: GqlUserResponse;
  socialLogin: GqlUserResponse;
  socialMerge: GqlUserResponse;
  socialRegister: GqlUserResponse;
  updateFcmToken: GqlBooleanResponse;
  updateTouristProfile: GqlUserResponse;
  uploadFile: GqlStringResponse;
  verifyEmailOwnership: GqlUserResponse;
  verifyForgetPasswordCode: GqlBooleanResponse;
  verifyUserByEmail: GqlUserResponse;
};


export type MutationChangeEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationDisconnectSocialAccountArgs = {
  input: SocialLoginInput;
};


export type MutationEmailAndPasswordLoginArgs = {
  input: EmailAndPasswordLoginInput;
};


export type MutationEmailAndPasswordLoginBoardArgs = {
  input: EmailAndPasswordLoginInput;
};


export type MutationForgetPasswordArgs = {
  input: ForgetPasswordInput;
};


export type MutationLinkSocialAccountArgs = {
  input: LinkSocialAccountInput;
};


export type MutationLogoutArgs = {
  device: DeviceEnum;
};


export type MutationRegisterAsArgs = {
  input: RegisterInput;
};


export type MutationResendEmailVerificationCodeArgs = {
  input: SendEmailVerificationCodeInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSetLastActiveDetailsArgs = {
  input: SetLastActiveDetailsInput;
};


export type MutationSetUserPersonalInformationArgs = {
  input: SetPersonalInformationInput;
};


export type MutationSocialLoginArgs = {
  input: SocialLoginInput;
};


export type MutationSocialMergeArgs = {
  input: SocialMergeInput;
};


export type MutationSocialRegisterArgs = {
  input: SocialRegisterInput;
};


export type MutationUpdateFcmTokenArgs = {
  device: DeviceEnum;
  fcmToken: Scalars['String']['input'];
};


export type MutationUpdateTouristProfileArgs = {
  input: UpdateUserProfileInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
  model: FileModelEnum;
};


export type MutationVerifyEmailOwnershipArgs = {
  input: VerifyUserByEmailInput;
};


export type MutationVerifyForgetPasswordCodeArgs = {
  input: VerifyForgetPasswordCodeInput;
};


export type MutationVerifyUserByEmailArgs = {
  input: VerifyUserByEmailInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  beforeCursor?: Maybe<Scalars['String']['output']>;
  hasBefore: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextCursor?: Maybe<Scalars['String']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
};

export type PaginatorInput = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  checkSocialProviderStatus: GqlSocialRegisterTypeResponse;
  countries: GqlCountryNameAnd2IsoCodesArrayResponse;
  languages: GqlLanguageTypesResponse;
  me: GqlUserResponse;
  mySocialAccounts: GqlUserSocialAccountsArrayResponse;
  nationalities: GqlCountryNameAnd2IsoCodesArrayResponse;
  userBoard: GqlUserResponse;
  usersBoard: GqlUsersResponse;
};


export type QueryCheckSocialProviderStatusArgs = {
  input: CheckSocialStatusInput;
};


export type QueryLanguagesArgs = {
  paginate?: InputMaybe<PaginatorInput>;
};


export type QueryUserBoardArgs = {
  userId: Scalars['String']['input'];
};


export type QueryUsersBoardArgs = {
  filter?: InputMaybe<UsersBoardFilter>;
  paginate?: InputMaybe<PaginatorInput>;
};

export type RegisterInput = {
  device: DeviceEnum;
  email: Scalars['String']['input'];
  favLang?: InputMaybe<LangEnum>;
  fcmToken?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  lat?: InputMaybe<Scalars['Float']['input']>;
  long?: InputMaybe<Scalars['Float']['input']>;
  nationality: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  platformDetails?: InputMaybe<Scalars['JSON']['input']>;
  role?: UserRoleEnum;
};

export type ResetPasswordInput = {
  code: Scalars['String']['input'];
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type SecurityGroup = {
  __typename?: 'SecurityGroup';
  description?: Maybe<Scalars['String']['output']>;
  groupName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permissions: Array<Scalars['String']['output']>;
};

export type SendEmailVerificationCodeInput = {
  email: Scalars['String']['input'];
  useCase: UserVerificationCodeUseCaseEnum;
};

export type SetLastActiveDetailsInput = {
  device: DeviceEnum;
  lang: LangEnum;
  platformDetails?: InputMaybe<Scalars['String']['input']>;
};

export type SetPersonalInformationInput = {
  alcoholStatus?: InputMaybe<Scalars['Boolean']['input']>;
  birthDate?: InputMaybe<Scalars['Timestamp']['input']>;
  bloodType?: InputMaybe<BloodTypeEnum>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender: GenderEnum;
  heightInCm?: InputMaybe<Scalars['Float']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  maritalStatus?: InputMaybe<MaritalStatusEnum>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  smokingStatus?: InputMaybe<Scalars['Boolean']['input']>;
  weightInKg?: InputMaybe<Scalars['Float']['input']>;
};

export enum SocialAccountRequiredActionEnum {
  Merge = 'MERGE',
  MergeSameProvider = 'MERGE_SAME_PROVIDER',
  Register = 'REGISTER',
  RegisterVerification = 'REGISTER_VERIFICATION',
  VerificationMerge = 'VERIFICATION_MERGE',
  VerificationMergeSameProvider = 'VERIFICATION_MERGE_SAME_PROVIDER'
}

export type SocialLoginInput = {
  device?: InputMaybe<DeviceEnum>;
  fcmToken?: InputMaybe<Scalars['String']['input']>;
  provider: SocialProvidersEnum;
  providerId: Scalars['String']['input'];
};

export type SocialMergeInput = {
  device?: InputMaybe<DeviceEnum>;
  email: Scalars['String']['input'];
  fcmToken?: InputMaybe<Scalars['String']['input']>;
  provider: SocialProvidersEnum;
  providerId: Scalars['String']['input'];
};

export enum SocialProvidersEnum {
  Apple = 'APPLE',
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE',
  Twitter = 'TWITTER'
}

export type SocialRegisterInput = {
  device: DeviceEnum;
  email: Scalars['String']['input'];
  emergencyContact: Scalars['String']['input'];
  fcmToken?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  isManuallyEntered?: Scalars['Boolean']['input'];
  lastName: Scalars['String']['input'];
  nationality: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  provider: SocialProvidersEnum;
  providerId: Scalars['String']['input'];
};

export type SocialRegisterType = {
  __typename?: 'SocialRegisterType';
  actionRequired: SocialAccountRequiredActionEnum;
  user?: Maybe<User>;
};

export type UpdateUserProfileInput = {
  emergencyContact?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  arFirstName?: Maybe<Scalars['String']['output']>;
  arFullName?: Maybe<Scalars['String']['output']>;
  arLastName?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['Timestamp']['output']>;
  country: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  favLang: LangEnum;
  firstName: Scalars['String']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  gender: GenderEnum;
  hasCompletedRegistration: Scalars['Boolean']['output'];
  hasPassword: Scalars['Boolean']['output'];
  hasSetExperiencePrefrences: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isBlocked: Scalars['Boolean']['output'];
  lastLoginDetails?: Maybe<LastLoginDetails>;
  lastName: Scalars['String']['output'];
  nationality?: Maybe<CountryNameAnd2IsoCode>;
  notVerifiedEmail?: Maybe<Scalars['String']['output']>;
  notificationManager: Scalars['JSON']['output'];
  profilePicture?: Maybe<Scalars['String']['output']>;
  readableBirthDate?: Maybe<Scalars['String']['output']>;
  readableCreatedAt: Scalars['String']['output'];
  readableUpdatedAt: Scalars['String']['output'];
  role: UserRoleEnum;
  securityGroup?: Maybe<SecurityGroup>;
  slug: Scalars['String']['output'];
  /** @deprecated NO LONGER NEEDED */
  socialAccounts?: Maybe<Array<UserSocialAccount>>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Timestamp']['output'];
  verifiedEmail?: Maybe<Scalars['String']['output']>;
  verifiedPhone?: Maybe<Scalars['String']['output']>;
};

export type UserCompletionProfileProgressDetails = {
  __typename?: 'UserCompletionProfileProgressDetails';
  medicalHistoryAllergies: Scalars['Boolean']['output'];
  medicalHistoryChronicDiseases: Scalars['Boolean']['output'];
  medicalHistoryCurrentMedication: Scalars['Boolean']['output'];
  medicalHistoryFamilyHistory: Scalars['Boolean']['output'];
  paymentMethods?: Maybe<Scalars['Boolean']['output']>;
};

export enum UserRoleEnum {
  User = 'USER'
}

export type UserSocialAccount = {
  __typename?: 'UserSocialAccount';
  allowDisconnect: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  provider: SocialProvidersEnum;
  providerId: Scalars['String']['output'];
  user?: Maybe<User>;
};

export enum UserVerificationCodeUseCaseEnum {
  ChangeEmail = 'CHANGE_EMAIL',
  EmailVerification = 'EMAIL_VERIFICATION',
  PasswordReset = 'PASSWORD_RESET',
  SocialEmailVerification = 'SOCIAL_EMAIL_VERIFICATION'
}

export type UsersBoardFilter = {
  gender?: InputMaybe<GenderEnum>;
  isBlocked?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<UserRoleEnum>;
  searchKey?: InputMaybe<Scalars['String']['input']>;
};

export type VerifyForgetPasswordCodeInput = {
  email: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type VerifyUserByEmailInput = {
  email: Scalars['String']['input'];
  useCase?: InputMaybe<UserVerificationCodeUseCaseEnum>;
  verificationCode: Scalars['String']['input'];
};

export type CheckMeQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckMeQuery = { __typename?: 'Query', me: { __typename?: 'GqlUserResponse', success: boolean, message?: string | null } };

export type RegularloginMutationVariables = Exact<{
  input: EmailAndPasswordLoginInput;
}>;


export type RegularloginMutation = { __typename?: 'Mutation', emailAndPasswordLogin: { __typename?: 'GqlUserResponse', success: boolean, message?: string | null, data?: { __typename?: 'User', token?: string | null } | null } };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', registerAs: { __typename?: 'GqlBooleanResponse', data?: boolean | null, success: boolean, message?: string | null } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const CheckMeDocument = new TypedDocumentString(`
    query CheckMe {
  me {
    success
    message
  }
}
    `) as unknown as TypedDocumentString<CheckMeQuery, CheckMeQueryVariables>;
export const RegularloginDocument = new TypedDocumentString(`
    mutation Regularlogin($input: EmailAndPasswordLoginInput!) {
  emailAndPasswordLogin(input: $input) {
    data {
      token
    }
    success
    message
  }
}
    `) as unknown as TypedDocumentString<RegularloginMutation, RegularloginMutationVariables>;
export const RegisterDocument = new TypedDocumentString(`
    mutation Register($input: RegisterInput!) {
  registerAs(input: $input) {
    data
    success
    message
  }
}
    `) as unknown as TypedDocumentString<RegisterMutation, RegisterMutationVariables>;