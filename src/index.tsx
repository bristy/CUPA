import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/error/error-page';
import ActivityExam from './routes/activity/activity-exam'
import Home from './routes/home/home';


import { ErrorFindExamService } from './api/error-find-exam-service'

const service: ErrorFindExamService = new ErrorFindExamService();

export async function loadActivities() {
  return await service.getErrorFindExam();
}

const router = createBrowserRouter([
  {
    path: '/CUPA',
    element: <Home/>,
    errorElement: <ErrorPage/>,
    loader: loadActivities,
  },
  {
    path: '/CUPA/test/:id',
    element: <ActivityExam/>,
    errorElement: <ErrorPage/>,
    loader: loadActivities,
  },
  /*
  {
    path: '/results',
    element: <ActivityExam/>,
    errorElement: <ErrorPage/>,
    loader: loadActivities,
  },
  {
    path: '/results/:id',
    element: <ActivityExam/>,
    errorElement: <ErrorPage/>,
    loader: loadActivities,
  },*/
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={ router }/>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
