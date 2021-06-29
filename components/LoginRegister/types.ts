export type InitialStateTypes = {
  mobile: string;
  firstName: string;
  lastName: string;
  email: string;
  code: string;
  password: string;
  mobileIsValid: boolean | number;
  loadingState: boolean;
  isSended: boolean;
  firstNameIsValid: boolean | number;
  lastNameIsValid: boolean | number;
  passwordIsValid: boolean | number;
  codeIsValid: boolean | number;
  emailIsValid: boolean | number;
};

export enum ActionsKind {
  setMobile = "SET_MOBILE",
  setFirstName = "SET_FIRST_NAME",
  setLastName = "SET_LAST_NAME",
  setEmail = "SET_EMAIL",
  setCode = "SET_CODE",
  setPassword = "SET_PASSWORD",
  setMobileIsValid = "SET_PHONE_IS_VALID",
  setLoadingState = "SET_LOADING_STATE",
  setIsSended = "SET_IS_SENDED",
  setFirstNameIsValid = "SET_FIRST_NAME_IS_VALID",
  setLastNameIsValid = "SET_LAST_NAME_IS_VALID",
  setPasswordIsValid = "SET_PASSWORD_IS_VALID",
  setCodeIsValid = "SET_CODE_IS_VALID",
  setEmailIsValid = "SET_EMAIL_IS_VALID",
}

export type ActionsTypes = {
  type: ActionsKind;
  stringPayload?: string;
  booleanPayload?: boolean;
};

export enum FieldsNames {
  mobile = "mobile",
  firstName = "firstName",
  lastName = "lastName",
  password = "password",
  code = "code",
  email = "email",
}
