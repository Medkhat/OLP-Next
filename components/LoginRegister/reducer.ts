import { ActionsKind, ActionsTypes, InitialStateTypes } from "./types";

export function signUpReducer(
  state: InitialStateTypes,
  action: ActionsTypes
): InitialStateTypes {
  switch (action.type) {
    case ActionsKind.setMobile:
      return {
        ...state,
        mobile: action.stringPayload,
      };
    case ActionsKind.setFirstName:
      return {
        ...state,
        firstName: action.stringPayload,
      };
    case ActionsKind.setLastName:
      return {
        ...state,
        lastName: action.stringPayload,
      };
    case ActionsKind.setEmail:
      return {
        ...state,
        email: action.stringPayload,
      };
    case ActionsKind.setCode:
      return {
        ...state,
        code: action.stringPayload,
      };
    case ActionsKind.setPassword:
      return {
        ...state,
        password: action.stringPayload,
      };
    case ActionsKind.setMobileIsValid:
      return {
        ...state,
        mobileIsValid: action.booleanPayload,
      };
    case ActionsKind.setLoadingState:
      return {
        ...state,
        loadingState: action.booleanPayload,
      };
    case ActionsKind.setIsSended:
      return {
        ...state,
        isSended: action.booleanPayload,
      };
    case ActionsKind.setFirstNameIsValid:
      return {
        ...state,
        firstNameIsValid: action.booleanPayload,
      };
    case ActionsKind.setLastNameIsValid:
      return {
        ...state,
        lastNameIsValid: action.booleanPayload,
      };
    case ActionsKind.setPasswordIsValid:
      return {
        ...state,
        passwordIsValid: action.booleanPayload,
      };
    case ActionsKind.setCodeIsValid:
      return {
        ...state,
        codeIsValid: action.booleanPayload,
      };
    case ActionsKind.setEmailIsValid:
      return {
        ...state,
        emailIsValid: action.booleanPayload,
      };
    default:
      return state;
  }
}
