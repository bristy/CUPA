import {
  Box,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  Link,
  LinkBox,
  Stack,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
import {Activity, ActivityWithRound} from "../../common/types/error-find";
import { Link as LinkRouter } from 'react-router-dom';
import { useAppSelector } from "../../common/types/hooks";


const ActivityList = () => {
  const exam = useAppSelector((examState) => examState.exam.errorFindExamState)

  return(
    <>
      <Card align='center'>
        <CardHeader>
          <VStack spacing={8}>
            <Heading size='2xl'>{exam.name}</Heading>
            <Heading size='sm'>{exam.heading}</Heading>
          </VStack>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            {exam.activities?.map((activity: Activity | ActivityWithRound) => (
              <LinkBox>
                <Box>
                  <Link  as={LinkRouter} to={`/CUPA/test/${activity.activity_name}`}>
                  <Heading size='xs' textTransform='uppercase'>
                    {`${activity.activity_name}`}
                  </Heading>
                  </Link>
                </Box>
              </LinkBox>
            ))}
          </Stack>
        </CardBody>
        <CardFooter>
          <Box my={4}>
            <Heading size='xs' textTransform='uppercase'>
              Results
            </Heading>
          </Box>
        </CardFooter>
      </Card>
    </>
  );
};

export default ActivityList;