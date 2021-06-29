import Link from "next/link";
import { Button, Input } from "../common/styles";
import { ErrorText, FormGroup } from "../Courses/Create/style";
import { Form } from "./style";
import InputMask from "react-input-mask";
import React, { useState } from "react";
import axios from "axios";
import loader from "../../assets/img/loader.svg";
import { accessToken, refreshToken } from "../../assets/helpers/constants";
import router from "next/router";
import { FieldsNames } from "./types";
import { validateOnChange } from "../../assets/helpers/helpers";
import { Alert } from "../common/Alert";
import { colors } from "../../assets/helpers/sc-helpers";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export const SignInComponent: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState<
    boolean | number
  >(1);
  const [passwordIsValid, setPasswordIsValid] = useState<boolean | number>(1);
  const [alertState, setAlertState] = useState<boolean>(false);
  const [alertMsg, setAlertMsg] = useState<string>("");

  const onChangePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
    setPhoneNumberIsValid(
      validateOnChange(event.target.value, FieldsNames.mobile)
    );
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordIsValid(
      validateOnChange(event.target.value, FieldsNames.password)
    );
  };

  const onSubmit = async () => {
    let modifiedPhoneNumber: string = phoneNumber
      .substring(2, phoneNumber.length)
      .split(" ")
      .join("");

    if (phoneNumberIsValid && passwordIsValid) {
      try {
        setLoadingState(true);
        let response = await axios
          .post(`${process.env.UsersServiceBaseURL}/auth/login`, {
            mobile: modifiedPhoneNumber,
            password,
          })
          .then((response) => response);
        console.log(response);

        if (response.status >= 200 && response.status <= 400) {
          localStorage.setItem(accessToken, response.data.access_token);
          localStorage.setItem(refreshToken, response.data.refresh_token);
          router.push("/courses");
        } else {
          setAlertState(true);
          setAlertMsg(response.data.msg_kk);
        }
        setLoadingState(false);
      } catch (error) {
        setLoadingState(false);
        console.error(error);
      }
    }
  };

  return (
    <Form>
      <h2>Жүйеге кіру</h2>
      {alertState && (
        <FormGroup>
          <Alert
            iconColor={colors.orange}
            bgcolor={colors.lightOrange}
            icon={faExclamationTriangle}
            text={alertMsg}
          />
        </FormGroup>
      )}
      <FormGroup>
        <InputMask
          mask={"+7 999 999 9999"}
          value={phoneNumber}
          onChange={onChangePhoneNumber}
        >
          <Input
            type={"tel"}
            name={FieldsNames.mobile}
            placeholder={"Телефон номеріңіз"}
            autoComplete={"off"}
            error={!phoneNumberIsValid ? true : false}
          />
        </InputMask>
        {!phoneNumberIsValid && (
          <ErrorText>Телефон номеріңіз дұрыс емес!</ErrorText>
        )}
      </FormGroup>
      <FormGroup>
        <Input
          type={"password"}
          name={FieldsNames.password}
          placeholder={"Құпия сөзіңіз"}
          value={password}
          onChange={onChangePassword}
          error={!passwordIsValid ? true : false}
        />
        {!passwordIsValid && (
          <ErrorText>
            {password.length === 0
              ? "Құпия сөз міндетті!"
              : "Құпия сөз 6 сиволдан артық болуы керек!"}
          </ErrorText>
        )}
      </FormGroup>
      <FormGroup>
        <Link href={"/reset-password"}>
          <a className={"form-links"}> Құпия сөзіңізді ұмыттыңыз ба ? </a>
        </Link>
      </FormGroup>
      <FormGroup className={"btn-fg"}>
        <Button type={"button"} className={"form-button"} onClick={onSubmit}>
          {!loadingState ? (
            "Кіру"
          ) : (
            <img src={loader} alt={"LOADER"} style={{ width: 35 }} />
          )}
        </Button>
      </FormGroup>
      <FormGroup>
        <Link href={"/sign-up"}>
          <a className={"form-links"}> Тіркелмедіңіз бе ? </a>
        </Link>
      </FormGroup>
    </Form>
  );
};
