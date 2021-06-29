import {
  faEdit,
  faExclamationTriangle,
  faInfoCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { colors } from "../../../../assets/helpers/sc-helpers";
import { Alert } from "../../../common/Alert";
import Modal from "../../../common/Modal";
import { Button, FormButtons, Icon, Input } from "../../../common/styles";
import { FormGroup } from "../../Create/style";
import {
  ResourceTypes,
  TestResourceTypes,
  TestAnswerTypes,
} from "../LessonDetail";
import { SelectedQuizWrapper, TestResourceContent } from "./style";

type VariantTypes = {
  answerId: number;
  answer: string;
};

type SelectedQuizType = {
  quizItem: TestResourceTypes;
  setModalState: Function;
};

const SelectedQuiz: React.FC<SelectedQuizType> = ({
  quizItem,
  setModalState,
}) => {
  const [quizTitle, setQuizTitle] = useState<string>(quizItem.question);
  const [answers, setAnswers] = useState<Array<TestAnswerTypes>>(
    quizItem.answers
  );
  const [answerEditMode, setAnswerEditMode] = useState<string | null>(null);

  const onClickVariants = (variant: string) => {
    setAnswerEditMode(variant);
  };

  const onChangeVariant = (value: string, variant: string) => {
    setAnswers(
      answers.map((item: TestAnswerTypes) => {
        if (item.variant === variant) item.content = value;
        return item;
      })
    );
  };

  let variantItems: Array<JSX.Element> = answers.map(
    (item: TestAnswerTypes) => {
      return (
        <div
          className={"variant edit-mode-variant"}
          key={`variant-${item.variant}`}
          onClick={() => onClickVariants(item.variant)}
        >
          <span>{item.variant}.</span>
          {answerEditMode === item.variant ? (
            <FormGroup className={"edit-mode-variant-fg"}>
              <Input
                type={"text"}
                value={
                  answers.filter(
                    (answerStateItem: TestAnswerTypes) =>
                      answerStateItem.variant === item.variant
                  )[0].content
                }
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  onChangeVariant(event.target.value, item.variant)
                }
                onBlur={() => setAnswerEditMode(null)}
                placeholder={"Сұрақты енгізіңіз"}
                autoFocus
              />
            </FormGroup>
          ) : (
            <span className={"answer-content"}>{item.content}</span>
          )}
        </div>
      );
    }
  );

  return (
    <SelectedQuizWrapper>
      <FormGroup>
        <Input
          type={"text"}
          value={quizTitle}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setQuizTitle(event.target.value)
          }
          placeholder={"Сұрақты енгізіңіз"}
        />
      </FormGroup>
      <div className={"variants"}>{variantItems}</div>
      <FormButtons componentType={"test-editor"}>
        <Button
          type={"button"}
          btnType={"light"}
          onClick={() => setModalState(false)}
        >
          Бас тарту
        </Button>
        <Button type={"button"} onClick={() => console.log(answers)}>
          Сақтау
        </Button>
      </FormButtons>
    </SelectedQuizWrapper>
  );
};

let correctAnswers: number = 0;
export const TestResource: React.FC<ResourceTypes> = ({ title, questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Array<VariantTypes>>(
    []
  );
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const [alertState, setAlertState] = useState<boolean>(false);
  const [quizItem, setQuizItem] = useState<TestResourceTypes | null>(null);

  useEffect(() => {
    return () => {
      correctAnswers = 0;
    };
  });

  const endTest = () => {
    if (questions.length === selectedAnswers.length) {
      questions.forEach((question: TestResourceTypes) => {
        selectedAnswers.forEach((answer: VariantTypes) => {
          if (
            answer.answerId === question.id &&
            answer.answer === question.correctAnswer
          ) {
            correctAnswers += 1;
          }
        });
      });
      setIsFinished(true);
    } else setAlertState(true);
  };

  const onChangeAnswers = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (alertState) setAlertState(false);
    let answerId: number = parseInt(event.target.name);
    const answer: VariantTypes = { answerId, answer: event.target.value };
    if (
      selectedAnswers.some(
        (answer: VariantTypes) => answer.answerId === answerId
      )
    ) {
      setSelectedAnswers([
        ...selectedAnswers.filter(
          (answer: VariantTypes) => answer.answerId !== answerId
        ),
        answer,
      ]);
    } else {
      setSelectedAnswers([...selectedAnswers, answer]);
    }
  };

  const onClickEditQuiz = (id: number) => {
    let selectedQuiz = questions.filter(
      (item: TestResourceTypes) => item.id === id
    );
    setQuizItem(selectedQuiz[0]);
    setModalState(true);
  };

  let questionItems: Array<JSX.Element> = questions.map(
    (item: TestResourceTypes) => {
      return (
        <div key={`question-${item.id}`} className={"quiz-item"}>
          <h4 className={"question"}>
            <span>
              {item.id + 1}. {item.question}
            </span>
            <Icon
              className={"question-action edit"}
              onClick={() => onClickEditQuiz(item.id)}
            >
              <FontAwesomeIcon icon={faEdit} />
            </Icon>
            <Icon className={"question-action delete"}>
              <FontAwesomeIcon icon={faTrash} />
            </Icon>
          </h4>
          <div className={"variants"}>
            {item.answers.map((answerItem: TestAnswerTypes) => (
              <label
                key={`label-${answerItem.variant}`}
                className={`variant ${
                  isFinished &&
                  (answerItem.variant === item.correctAnswer
                    ? "correct"
                    : selectedAnswers.filter(
                        (answer: VariantTypes) => answer.answerId === item.id
                      )[0].answer !== item.correctAnswer &&
                      selectedAnswers.filter(
                        (answer: VariantTypes) => answer.answerId === item.id
                      )[0].answer === answerItem.variant
                    ? "wrong"
                    : "")
                }`}
              >
                <input
                  type={"radio"}
                  name={`${item.id}`}
                  value={answerItem.variant}
                  onChange={onChangeAnswers}
                  disabled={isFinished}
                />
                <span>{answerItem.content}</span>
              </label>
            ))}
          </div>
        </div>
      );
    }
  );

  return (
    <TestResourceContent>
      <h3>{title}</h3>
      {questionItems}
      {alertState && (
        <Alert
          text={"Барлық сұрақтарды белгілеңіз"}
          icon={faExclamationTriangle}
          bgcolor={colors.lightOrange}
          iconColor={colors.orange}
        />
      )}
      {isFinished && (
        <Alert
          text={`Дұрыс жауаптар саны - ${correctAnswers}/${selectedAnswers.length}`}
          icon={faInfoCircle}
          bgcolor={colors.lightBlue}
          iconColor={colors.blue}
        />
      )}
      <FormButtons className={"test-btns"}>
        {isFinished ? (
          <Button type={"button"}>Аяқтау</Button>
        ) : (
          <Button type={"button"} onClick={endTest}>
            Аяқтау
          </Button>
        )}
      </FormButtons>
      {modalState && (
        <Modal
          title={"Тестті өзгерту"}
          component={() => (
            <SelectedQuiz quizItem={quizItem} setModalState={setModalState} />
          )}
          setModalState={setModalState}
          modalType={"edit-test-modal"}
        />
      )}
    </TestResourceContent>
  );
};
