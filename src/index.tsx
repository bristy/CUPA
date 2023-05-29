import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/error/error-page';
import ActivityExam from './routes/activity-exam'
import Home from './routes/home';
import store from './store/error-find-exam-service-store'


const router = createBrowserRouter([
  {
    path: '/CUPA',
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/CUPA/test/:id',
    element: <ActivityExam/>,
    errorElement: <ErrorPage/>,
  },
  /*
  {
    path: '/results',
    element: <ActivityExam/>,
    errorElement: <ErrorPage/>,
    loader: loadActivities,
  },
  {
    path: '/CUPA/results/:id',
    element: <ActivityResult/>,
    errorElement: <ErrorPage/>,
  },*/
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <RouterProvider router={ router }/>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
