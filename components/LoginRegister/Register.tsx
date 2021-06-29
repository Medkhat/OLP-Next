import { Button, Input } from "../common/styles";
import { ErrorText, FormGroup } from "../Courses/Create/style";
import { Form } from "./style";
import InputMask from "react-input-mask";
import React, { useReducer } from "react";
import axios from "axios";
import loader from "../../assets/img/loader.svg";
import { validateOnChange } from "../../assets/helpers/helpers";
import Link from "next/link";
import { SignUpForm } from "./SignUpForm";
import { ActionsKind, FieldsNames, InitialStateTypes } from "./types";
import { signUpReducer } from "./reducer";
import router from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const initialState: InitialStateTypes = {
  mobile: "",
  firstName: "",
  lastName: "",
  email: "",
  code: "",
  password: "",
  mobileIsValid: 1,
  loadingState: false,
  isSended: false,
  firstNameIsValid: 1,
  lastNameIsValid: 1,
  passwordIsValid: 1,
  codeIsValid: 1,
  emailIsValid: 1,
};

export const SignUpComponent: React.FC = () => {
  const [state, dispatch] = useReducer(signUpReducer, initialState);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case FieldsNames.mobile:
        dispatch({
          type: ActionsKind.setMobile,
          stringPayload: event.target.value,
        });
        dispatch({
          type: ActionsKind.setMobileIsValid,
          booleanPayload: validateOnChange(
            event.target.value,
            FieldsNames.mobile
          ),
        });
        break;
      case FieldsNames.firstName:
        dispatch({
          type: ActionsKind.setFirstName,
          stringPayload: event.target.value,
        });
        dispatch({
          type: ActionsKind.setFirstNameIsValid,
          booleanPayload: validateOnChange(
            event.target.value,
            FieldsNames.firstName
          ),
        });
        break;
      case FieldsNames.lastName:
        dispatch({
          type: ActionsKind.setLastName,
          stringPayload: event.target.value,
        });
        dispatch({
          type: ActionsKind.setLastNameIsValid,
          booleanPayload: validateOnChange(
            event.target.value,
            FieldsNames.lastName
          ),
        });
        break;
      case FieldsNames.code:
        dispatch({
          type: ActionsKind.setCode,
          stringPayload: event.target.value,
        });
        dispatch({
          type: ActionsKind.setCodeIsValid,
          booleanPayload: validateOnChange(
            event.target.value,
            FieldsNames.code
          ),
        });
        break;
      case FieldsNames.email:
        dispatch({
          type: ActionsKind.setEmail,
          stringPayload: event.target.value,
        });
        dispatch({
          type: ActionsKind.setEmailIsValid,
          booleanPayload: validateOnChange(
            event.target.value,
            FieldsNames.email
          ),
        });
        break;
      case FieldsNames.password:
        dispatch({
          type: ActionsKind.setPassword,
          stringPayload: event.target.value,
        });
        dispatch({
          type: ActionsKind.setPasswordIsValid,
          booleanPayload: validateOnChange(
            event.target.value,
            FieldsNames.password
          ),
        });
        break;
      default:
        break;
    }
  };

  const onSubmit = () => {
    let modifiedMobile: string = state.mobile
      .substring(2, state.mobile.length)
      .split(" ")
      .join("");

    if (state.isSended) {
      if (
        state.passwordIsValid &&
        state.firstNameIsValid &&
        state.lastNameIsValid &&
        state.emailIsValid &&
        state.codeIsValid
      ) {
        try {
          dispatch({
            type: ActionsKind.setLoadingState,
            booleanPayload: true,
          });
          axios
            .post(`${process.env.UsersServiceBaseURL}/auth/register`, {
              first_name: state.firstName,
              last_name: state.lastName,
              mobile: modifiedMobile,
              username: `user-${state.code}`,
              email: state.email,
              password: state.password,
              code: state.code,
            })
            .then((response) => {
              if (response.status >= 200 && response.status <= 400) {
                dispatch({
                  type: ActionsKind.setIsSended,
                  booleanPayload: true,
                });
                router.push("/sign-in");
              } else {
                dispatch({
                  type: ActionsKind.setIsSended,
                  booleanPayload: false,
                });
              }
              dispatch({
                type: ActionsKind.setLoadingState,
                booleanPayload: false,
              });
            });
        } catch (error) {
          console.error(error);
          dispatch({
            type: ActionsKind.setLoadingState,
            booleanPayload: false,
          });
        }
      }
    } else {
      if (state.mobileIsValid) {
        try {
          dispatch({
            type: ActionsKind.setLoadingState,
            booleanPayload: true,
          });
          axios
            .post(`${process.env.UsersServiceBaseURL}/auth/sms`, {
              mobile: modifiedMobile,
              send_type: "send_type1",
            })
            .then((response) => {
              if (response.status >= 200 && response.status <= 400)
                dispatch({
                  type: ActionsKind.setIsSended,
                  booleanPayload: true,
                });
              else
                dispatch({
                  type: ActionsKind.setIsSended,
                  booleanPayload: false,
                });
              dispatch({
                type: ActionsKind.setLoadingState,
                booleanPayload: false,
              });
            });
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  return (
    <Form>
      <h2>Тіркелу</h2>
      {state.isSended && (
        <FormGroup>
          <p
            className={"sign-up-backlink"}
            onClick={() => {
              dispatch({
                type: ActionsKind.setIsSended,
                booleanPayload: false,
              });
            }}
          >
            <AiOutlineArrowLeft />
            <span>Номерді қайта енгізу</span>
          </p>
        </FormGroup>
      )}
      <FormGroup>
        <InputMask
          mask={"+7 999 999 9999"}
          value={state.mobile}
          onChange={onChangeHandler}
          disabled={state.isSended}
        >
          <Input
            type={"tel"}
            name={FieldsNames.mobile}
            placeholder={"Телефон номеріңіз"}
            autoComplete={"off"}
            error={!state.mobileIsValid ? true : false}
          />
        </InputMask>
        {!state.mobileIsValid && (
          <ErrorText>Телефон номеріңіз дұрыс емес!</ErrorText>
        )}
      </FormGroup>
      {state.isSended && (
        <SignUpForm onChangeHandler={onChangeHandler} otherProps={state} />
      )}
      {!state.isSended && (
        <FormGroup>
          <Link href={"/sign-in"}>
            <a className={"form-links"}> Сізде аккаунт бар ма ? </a>
          </Link>
        </FormGroup>
      )}
      <FormGroup className={"btn-fg"}>
        <Button type={"button"} className={"form-button"} onClick={onSubmit}>
          {!state.loadingState ? (
            state.isSended ? (
              "Тіркелу"
            ) : (
              "Кодты алу"
            )
          ) : (
            <img src={loader} alt={"LOADER"} style={{ width: 35 }} />
          )}
        </Button>
      </FormGroup>
    </Form>
  );
};
