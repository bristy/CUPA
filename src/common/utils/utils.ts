import {Activity, ActivityWithRound} from "../types/error-find";

export function isActivityWithRound(activity: Activity | ActivityWithRound) {
  for(let question of activity.questions) {
    if (question.hasOwnProperty('round_title')) {
      return true;
    }
  }
  return false;
}