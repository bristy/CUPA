import * as React from 'react';
import { useLoaderData, useParams} from 'react-router-dom';

import {Activity, ErrorFindExam} from "../../common/types/error-find";
import TestPage from '../../components/test/test-page';
import Nav from "../../components/navigation/nav-bar";

const ActivityExam = () => {
  const { id } = useParams() as { id: string };
  const exam = useLoaderData() as ErrorFindExam;

  function loadActivity(id: string): Activity {
    console.log(id);
    for (let activity of exam.activities) {
      if (activity.activity_name === id) {
        return activity
      }
    }
    return {} as Activity;
  }

  return(
    <>
      <Nav/>
      <TestPage
        activity={loadActivity(id)}
      />
    </>
  );
};

export default ActivityExam;