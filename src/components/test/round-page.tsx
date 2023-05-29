import {Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading} from "@chakra-ui/react";

interface RoundProps {
  activityName: string,
  roundName: string;
  submitNext(): void,
}
const RoundPage = (props: RoundProps) => {
  return (
    <>
      <Card >
        <CardHeader>
          <Heading>
            {props.activityName}
          </Heading>
        </CardHeader>
        <CardBody>
          <Heading>
            {props.roundName}
          </Heading>
        </CardBody>
        <CardFooter>
          <Flex alignItems='right'>
            <Button colorScheme='teal' size='lg' mx={4} onClick={props.submitNext}>
              NEXT
            </Button>
          </Flex>

        </CardFooter>
      </Card>
    </>
  );
}

export default RoundPage