import Nav from '../components/navigation/nav-bar';
import ActivityList from '../components/home/activity-list';
import React from "react";
import {ErrorFindExamService} from "../api/error-find-exam-service";
import { useAppDispatch } from "../common/types/hooks";
import {setExamState} from "../store/error-find-exam-slice";
import {ErrorFindExam} from "../common/types/error-find";

const Home = () => {
 const dispatch = useAppDispatch();

  React.useEffect(() => {
    const service: ErrorFindExamService = new ErrorFindExamService();
    service.getErrorFindExam().then((exam: ErrorFindExam) => {
      //console.log(`Dispatching ${JSON.stringify(exam)}`)
      dispatch(setExamState(exam));
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return(
    <>
      <Nav/>
      <ActivityList/>
    </>
  );
};

export default Home;