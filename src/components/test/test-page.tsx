import * as React from 'react';

import { Activity } from "../../common/types/error-find";
import QuestionPage from "./question-page";
import TestResultPage from "../result/test-result-page";
import { useAppDispatch } from "../../common/types/hooks";
import {recordUserAnswer} from "../../store/error-find-exam-slice";

interface TestProps {
  activity: Activity,
}

const TestPage = (props: TestProps) => {
  const dispatch = useAppDispatch();

  const [step, setStep] = React.useState(0);
  const [question, setQuestion] = React.useState(props.activity.questions[0]);
  const [showResult, setShowResult] = React.useState(false);
  const getAnswer = (answer: string) => {

    // save answer
    dispatch(recordUserAnswer({
      answers: [answer],
      activityName: props.activity.activity_name,
      questionStimulus: props.activity.questions[step].stimulus,
    }));

    //load next question.
    const nextStep = step + 1;
    if (nextStep === props.activity.questions.length) {
      setStep(nextStep);
      setShowResult(true);
    } else {
      setStep(nextStep);
      setQuestion(props.activity.questions[nextStep])
    }
  };

  return (
    <>
      {step < props.activity.questions.length  && <QuestionPage
        question={question}
        submitAnswer={getAnswer}
        activityName={props.activity.activity_name}
      />}
      {showResult && <TestResultPage activity={props.activity} />}
    </>
  );
};
export default TestPage;