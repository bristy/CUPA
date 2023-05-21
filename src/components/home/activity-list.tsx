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
import {Activity, ErrorFindExam} from "../../common/types/error-find";
import { Link as LinkRouter } from 'react-router-dom';
export interface ActivityListProps {
  exam: ErrorFindExam,
}

const ActivityList = (props: ActivityListProps) => {

  return(
    <>
      <Card align='center'>
        <CardHeader>
          <VStack spacing={8}>
            <Heading size='2xl'>{props.exam.name}</Heading>
            <Heading size='sm'>{props.exam.heading}</Heading>
          </VStack>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            {props.exam.activities?.map((activity: Activity) => (
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