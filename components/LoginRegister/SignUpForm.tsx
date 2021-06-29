import React from "react";
import { Input } from "../common/styles";
import { ErrorText, FormGroup } from "../Courses/Create/style";
import { FieldsNames, InitialStateTypes } from "./types";
import InputMask from "react-input-mask";

type SignUpFormTypes = {
  otherProps: InitialStateTypes;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SignUpForm: React.FC<SignUpFormTypes> = ({
  onChangeHandler,
  otherProps,
}) => {
  return (
    <>
      <FormGroup>
        <InputMask
          mask={"9999"}
          value={otherProps.code}
          onChange={onChangeHandler}
        >
          <Input
            type={"text"}
            name={FieldsNames.code}
            placeholder={"Жіберілген кодты енгізіңіз"}
            error={!otherProps.codeIsValid}
          />
        </InputMask>
        {!otherProps.codeIsValid && (
          <ErrorText>Кодты толық енгізіңіз!</ErrorText>
        )}
      </FormGroup>
      <FormGroup>
        <Input
          type={"text"}
          name={FieldsNames.firstName}
          placeholder={"Атыңыз"}
          value={otherProps.firstName}
          onChange={onChangeHandler}
          error={!otherProps.firstNameIsValid}
        />
        {!otherProps.firstNameIsValid && (
          <ErrorText>Атыңызды енгізу міндетті!</ErrorText>
        )}
      </FormGroup>
      <FormGroup>
        <Input
          type={"text"}
          name={FieldsNames.lastName}
          placeholder={"Тегіңіз"}
          value={otherProps.lastName}
          onChange={onChangeHandler}
          error={!otherProps.lastNameIsValid}
        />
        {!otherProps.lastNameIsValid && (
          <ErrorText>Тегіңізді енгізу міндетті!</ErrorText>
        )}
      </FormGroup>
      <FormGroup>
        <Input
          type={"text"}
          name={FieldsNames.email}
          placeholder={"Электронды поштаңыз"}
          value={otherProps.email}
          onChange={onChangeHandler}
          error={!otherProps.emailIsValid}
        />
        {!otherProps.emailIsValid && (
          <ErrorText>Поштаңызды дұрыс енгізіңіз!</ErrorText>
        )}
      </FormGroup>
      <FormGroup>
        <Input
          type={"password"}
          name={FieldsNames.password}
          placeholder={"Құпия сөзіңіз"}
          value={otherProps.password}
          onChange={onChangeHandler}
          error={!otherProps.passwordIsValid}
        />
        {!otherProps.passwordIsValid && (
          <ErrorText>Құпия сөз 6 символдан артық болуы тиіс!</ErrorText>
        )}
      </FormGroup>
    </>
  );
};
