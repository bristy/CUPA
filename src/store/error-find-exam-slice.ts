import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './error-find-exam-service-store'
import {Activity, ActivityWithRound, ErrorFindExam} from '../common/types/error-find';
import {isActivityWithRound} from "../common/utils/utils";


// Define a type for the slice state

export interface QuestionAnswer {
  activityName: string,
  questionStimulus: string,
  answers: string[],
}

interface ErrorFindExamState {
  errorFindExamState: ErrorFindExam
}

// Define the initial state using that type
const initialState: ErrorFindExamState = {
  errorFindExamState: {} as ErrorFindExam,
}

export const errorFindExamSlice = createSlice({
  name: 'errorFindExam',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setExamState: (state, action: PayloadAction<ErrorFindExam>) => {
      state.errorFindExamState = action.payload
    },
    recordUserAnswer: (state, action: PayloadAction<QuestionAnswer>) => {
      const exam = state.errorFindExamState;
      if (exam) {
        for (let activity of exam.activities) {
          if (activity.activity_name === action.payload.activityName) {
            if (isActivityWithRound(activity)) {
              const workingActivity = activity as ActivityWithRound;
              for(let round of workingActivity.questions) {
                for (let roundQuestion of round.questions) {
                  if (roundQuestion.stimulus === action.payload.questionStimulus) {
                    roundQuestion.user_answers = action.payload.answers;
                  }
                }
              }
            } else {
              const workingActivity = activity as Activity;
              for (let question of workingActivity.questions) {
                if(question.stimulus === action.payload.questionStimulus){
                  question.user_answers = action.payload.answers;
                }
              }
            }
          }
        }
      }
    },
  },
})

export const { setExamState, recordUserAnswer } = errorFindExamSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.exam.errorFindExamState;

export default errorFindExamSlice.reducer;