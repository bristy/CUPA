import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Flex,
  Text,
} from '@chakra-ui/react';

import { Question } from '../../common/types/error-find';

interface QuestionProps {
  question: Question,
  submitAnswer(ans: boolean): void,
}
const QuestionPage = (props: QuestionProps) => {
  const handleClick = (response: boolean) => {
    props.submitAnswer(response);
  };

  const getQuestionRender = (text: string): string => {
    // TODO render bold
    return text.replaceAll('*', '');
  }

  return (
    <>
      <Card align='center'>
        <CardHeader>

        </CardHeader>
        <CardBody>
          <Text>{getQuestionRender(props.question.stimulus)}</Text>
        </CardBody>
        <CardFooter>
          <Flex>
            <Button colorScheme='teal' size='lg' mx={4} onClick={() => handleClick(true)}>
              CORRECT
            </Button>

            <Button colorScheme='teal' size='lg' mx={4} onClick={() => handleClick(false)}>
              INCORRECT
            </Button>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
};

export default QuestionPage;