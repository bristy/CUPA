import * as React from 'react';

import { Activity } from "../../common/types/error-find";
import QuestionPage from "./question-page";
import TestResultPage from "../result/test-result-page";

interface TestProps {
  activity: Activity,
}
const TestPage = (props: TestProps) => {
  const [step, setStep] = React.useState(0);
  const [question, setQuestion] = React.useState(props.activity.questions[0]);
  const [showResult, setShowResult] = React.useState(false);
  const getAnswer = (answer: boolean) => {
    // record answer and load next question.
    console.log(answer);
    const nextStep = step + 1;
    if (nextStep === props.activity.questions.length) {
      setStep(nextStep);
      setShowResult(true);
    } else {
      props.activity.questions[step].user_answer = answer;
      setStep(nextStep);
      setQuestion(props.activity.questions[nextStep])
    }
  };

  console.log(JSON.stringify(props.activity.questions));
  return (
    <>
      {step < props.activity.questions.length  && <QuestionPage
        question={question}
        submitAnswer={getAnswer}
      />}
      {showResult && <TestResultPage activity={props.activity} />}
    </>
  );
};
export default TestPage;