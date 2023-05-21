import { ErrorFindExam } from '../common/types/error-find';

/**
 * Wrapper class to call backend for activity
 */
export class ErrorFindExamService {
  private readonly PAYLOAD = '{\n' +
    '    "name": "Error Find",\n' +
    '    "heading": "This game teaches you to find mistakes in written text.",\n' +
    '    "activities": [\n' +
    '        {\n' +
    '            "activity_name": "Activity One",\n' +
    '            "order": 1,\n' +
    '            "questions": [\n' +
    '                {\n' +
    '                    "is_correct": false,\n' +
    '                    "stimulus": "I really enjoy *to play football* with friends.",\n' +
    '                    "order": 1,\n' +
    '                    "user_answers": [],\n' +
    '                    "feedback": "I really enjoy *playing football* with friends."\n' +
    '                },\n' +
    '                {\n' +
    '                    "is_correct": true,\n' +
    '                    "stimulus": "I think that *starting* a school science magazine is an excellent idea!",\n' +
    '                    "order": 2,\n' +
    '                    "user_answers": [],\n' +
    '                    "feedback": "I think that *starting* a school science magazine is an excellent idea!"\n' +
    '                },\n' +
    '                {\n' +
    '                    "is_correct": false,\n' +
    '                    "stimulus": "Watching films at home is *more cheaper* than at the cinema.",\n' +
    '                    "order": 3,\n' +
    '                    "user_answers": [],\n' +
    '                    "feedback": "Watching films at home is *cheaper* than at the cinema."\n' +
    '                },\n' +
    '                {\n' +
    '                    "is_correct": false,\n' +
    '                    "stimulus": "On the one hand, small cameras are comfortable. *In the other hand*, larger ones take better photos.",\n' +
    '                    "order": 4,\n' +
    '                    "user_answers": [],\n' +
    '                    "feedback": "On the one hand, small cameras are comfortable. *On the other hand*, larger ones take better photos."\n' +
    '                },\n' +
    '                {\n' +
    '                    "is_correct": false,\n' +
    '                    "stimulus": "My friend *like listening* to songs in English",\n' +
    '                    "order": 5,\n' +
    '                    "user_answers": [],\n' +
    '                    "feedback": "My friend *likes listening* to songs in English"\n' +
    '                }\n' +
    '            ]\n' +
    '        },\n' +
    '        {\n' +
    '            "activity_name": "Activity Two",\n' +
    '            "order": 2,\n' +
    '            "questions": [\n' +
    '                {\n' +
    '                    "round_title": "Round 1",\n' +
    '                    "order": 1,\n' +
    '                    "questions": [\n' +
    '                        {\n' +
    '                            "is_correct": false,\n' +
    '                            "stimulus": "Watching films at home is *more cheaper* than at the cinema.",\n' +
    '                            "order": 1,\n' +
    '                            "user_answers": [],\n' +
    '                            "feedback": "Watching films at home is *cheaper* than at the cinema."\n' +
    '                        },\n' +
    '                        {\n' +
    '                            "is_correct": false,\n' +
    '                            "stimulus": "On the one hand, small cameras are comfortable. *In the other hand*, larger ones take better photos.",\n' +
    '                            "order": 2,\n' +
    '                            "user_answers": [],\n' +
    '                            "feedback": "On the one hand, small cameras are comfortable. *On the other hand*, larger ones take better photos."\n' +
    '                        }\n' +
    '                    ]\n' +
    '                },\n' +
    '                {\n' +
    '                    "round_title": "Round 2",\n' +
    '                    "order": 2,\n' +
    '                    "questions": [\n' +
    '                        {\n' +
    '                            "is_correct": true,\n' +
    '                            "stimulus": "I can\'t go out because I *haven\'t finished* my homework yet.",\n' +
    '                            "order": 1,\n' +
    '                            "user_answers": [],\n' +
    '                            "feedback": "I can\'t go out because I *haven\'t finished* my homework yet."\n' +
    '                        },\n' +
    '                        {\n' +
    '                            "is_correct": false,\n' +
    '                            "stimulus": "My friend *like listening* to songs in English",\n' +
    '                            "order": 2,\n' +
    '                            "user_answers": [],\n' +
    '                            "feedback": "My friend *likes listening* to songs in English"\n' +
    '                        }\n' +
    '                    ]\n' +
    '                }\n' +
    '            ]\n' +
    '        }\n' +
    '    ]\n' +
    '}';

  /**
   * Fetches the activities from api.
   */
  public async getErrorFindExam(): Promise<ErrorFindExam> {

    const apiResponse = JSON.parse(this.PAYLOAD) as ErrorFindExam ;
    return apiResponse;

  }
}