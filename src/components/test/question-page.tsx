import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Flex,
  Text, Heading, Box, Center, ButtonGroup,
} from '@chakra-ui/react';

import { Question } from '../../common/types/error-find';

interface QuestionProps {
  activityName: string,
  roundName?: string,
  question: Question,
  submitAnswer(ans: string): void,
}
const QuestionPage = (props: QuestionProps) => {
  const handleClick = (response: string) => {
    props.submitAnswer(response);
  };

  const getQuestionRender = (text: string): string => {
    // TODO render bold
    return text.replaceAll('*', '');
  }

  return (
    <>
      <Card>
        <CardHeader>
          <Heading>
            {props.activityName} { props.roundName && `/ ${props.roundName}`}
          </Heading>
        </CardHeader>
        <CardBody>
          <Box my={4}>
            <Heading>
              {`Q${props.question.order}.`}
            </Heading>
          </Box>
          <Text>{getQuestionRender(props.question.stimulus)}</Text>
        </CardBody>
        <CardFooter>
          <Center >
              <Button colorScheme='teal' size='lg' mx={4} onClick={() => handleClick('CORRECT')}>
                CORRECT
              </Button>

              <Button colorScheme='teal' size='lg' mx={4} onClick={() => handleClick('INCORRECT')}>
                INCORRECT
              </Button>
          </Center>
        </CardFooter>
      </Card>
    </>
  );
};

export default QuestionPage;