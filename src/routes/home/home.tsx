import { useLoaderData } from 'react-router-dom';


import Nav from '../../components/navigation/nav-bar';
import ActivityList from '../../components/home/activity-list';
import { ErrorFindExam } from "../../common/types/error-find";

const Home = () => {
  const exam = useLoaderData() as ErrorFindExam;

  return(
    <>
      <Nav/>
      <ActivityList
        exam={exam}
      />
    </>
  );
};

export default Home;