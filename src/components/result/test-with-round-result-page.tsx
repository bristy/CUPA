import {ActivityRound, ActivityWithRound, Question} from "../../common/types/error-find";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Heading, Link,
  LinkBox,
  StackDivider,
  Text,
  VStack
} from "@chakra-ui/react";
import {Link as LinkRouter} from "react-router-dom";

interface TestWithRoundResultPageProps {
  activity: ActivityWithRound,
}
const TestWithRoundResultPage = (props: TestWithRoundResultPageProps) => {
  return (
    <>
      <Card align='center'>
        <CardHeader>
          <VStack spacing={8}>
            <Heading size='sm'>{props.activity.activity_name}</Heading>
            <Heading size='2xl'>Results</Heading>
          </VStack>
        </CardHeader>

        <CardBody>
          <VStack divider={<StackDivider />} spacing='4'>
            {props.activity.questions?.map((round: ActivityRound) => (
              <Box>
              <Center my={4}>
                <Heading>
                  {round.round_title}
                </Heading>
                </Center>
                {round.questions?.map((question: Question) => (
                <Flex w="100%" justifyContent="space-between">
                    <Flex>
                      <Text mx={24}>{`Q${question.order}.`}</Text>
                      <Text mx={24} color={question.user_answers.includes(question.is_correct ? 'CORRECT' : 'INCORRECT') ? 'green.300' : 'red.300'}>
                        {question.user_answers.includes(question.is_correct ? 'CORRECT' : 'INCORRECT') ? 'CORRECT' : 'INCORRECT'}
                      </Text>
                    </Flex>
                  </Flex>
                ))}
              </Box>
            ))}
          </VStack>
        </CardBody>
        <CardFooter>
          <LinkBox my={4}>
            <Heading size='xs' textTransform='uppercase'>
              <Link  as={LinkRouter} to={'/CUPA'}>
                Home
              </Link>
            </Heading>
          </LinkBox>
        </CardFooter>
      </Card>

    </>
  );

};

export default TestWithRoundResultPage;