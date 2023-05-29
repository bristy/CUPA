import { ActivityWithRound} from "../../common/types/error-find";
import {useAppDispatch} from "../../common/types/hooks";
import * as React from "react";
import {recordUserAnswer} from "../../store/error-find-exam-slice";
import QuestionPage from "./question-page";
import TestResultPage from "../result/test-result-page";
import RoundPage from "./round-page";
import TestWithRoundResultPage from "../result/test-with-round-result-page";

interface ActivityWithRoundProps {
  activity: ActivityWithRound,
}

const TestWithRoundPage = (props: ActivityWithRoundProps) => {
  const dispatch = useAppDispatch();

  const [round, setRound] = React.useState(0);
  const [showRound, setShowRound] = React.useState(true);

  const [showQuestion, setShowQuestion] = React.useState(false);
  // represents the step in round
  const [step, setStep] = React.useState(0);
  const[question, setQuestion] = React.useState(props.activity.questions[0].questions[0]);

  const [showResult, setShowResult] = React.useState(false);
  const getAnswer = (answer: string) => {
    // record answer
    dispatch(recordUserAnswer({
      answers: [answer],
      activityName: props.activity.activity_name,
      questionStimulus: question.stimulus,
    }));

    // load next question in round or load next round
    const nextStep = step + 1;
    const totalStepsInRound = props.activity.questions[round].questions.length;
    if (nextStep === totalStepsInRound) {
      // load next round
      loadNextRound();
    } else {
      // load next question
      setStep(nextStep);
      setQuestion(props.activity.questions[round].questions[nextStep]);
    }
  }

  const loadNextRound = () => {
    const totalRounds = props.activity.questions.length;
    const nextRound = round + 1;
    if (totalRounds == nextRound) {
      setShowQuestion(false);
      setShowResult(true);
      setShowRound(false);
    } else {
      setShowQuestion(false);
      setShowResult(false);
      setRound(nextRound);
      setStep(0);
      setShowRound(true);
    }
  }

  const loadRound = () => {
    setShowRound(false);
    setStep(0);
    setShowQuestion(true);

  };

  return (
    <>
      {showRound && <RoundPage
          activityName={props.activity.activity_name}
          roundName={props.activity.questions[round].round_title}
          submitNext={loadRound}
      />}

      {showQuestion  && <QuestionPage
          question={question}
          submitAnswer={getAnswer}
          activityName={props.activity.activity_name}
          roundName={props.activity.questions[round].round_title}
      />}
      {showResult && <TestWithRoundResultPage
          activity={props.activity}
      />}
    </>
  );
};

export default TestWithRoundPage;