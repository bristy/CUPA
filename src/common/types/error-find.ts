export interface Question {
  is_correct: boolean,
  stimulus: string,
  order: number,
  feedback: string,
  user_answers:string[], //
  user_answer: boolean,
};

export interface ActivityRound {
  round_title: string,
  order: number,
  questions: Question[],
};

export interface ActivityWithRound {
  activity_name: string,
  order: number,
  questions: ActivityRound[],
};

export interface Activity {
  activity_name: string,
  order: number,
  questions: Question[],
};

export interface ErrorFindExam {
  name: string,
  heading: string,
  activities: Activity[],
}
