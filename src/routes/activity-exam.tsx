import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {Activity, ActivityWithRound, ErrorFindExam} from "../common/types/error-find";
import TestPage from '../components/test/test-page';
import Nav from "../components/navigation/nav-bar";
import {useAppSelector} from "../common/types/hooks";
import {isActivityWithRound} from "../common/utils/utils";
import TestWithRoundPage from "../components/test/test-with-round-page";
import {Spinner} from "@chakra-ui/react";

const ActivityExam = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };
  const exam: ErrorFindExam = useAppSelector((examState) => examState.exam.errorFindExamState)
  const[activity, setActivity] = React.useState({} as Activity | ActivityWithRound);

  const[loading, setLoading] = React.useState(true);

  React.useEffect(()=>{
    if (Object.keys(exam).length === 0) {
      navigate('/CUPA');
      return;
    }
    setLoading(true);
    const activity: Activity | ActivityWithRound = loadActivity(id);
    setActivity(activity);
    setLoading(false);
  }, [id])

  function loadActivity(id: string): Activity | ActivityWithRound {
    for (let activity of exam.activities) {
      if (activity.activity_name === id) {
        return activity
      }
    }
    return {} as Activity;
  }

  const idealState = <> {
      !loading && isActivityWithRound(activity)
      ? <TestWithRoundPage
        activity={activity as ActivityWithRound}
      />
      : <TestPage
        activity={activity as Activity}
      />
  }
  </>

  return(
    <>
      <Nav/>
      { loading
        ? <Spinner />
        : idealState
      }
    </>
  );
};

export default ActivityExam;