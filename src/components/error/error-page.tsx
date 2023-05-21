import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  VStack,
} from '@chakra-ui/react';

import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <Box id="error-page">
      <Card align='center'>
        <CardHeader>
          <Heading>Oops!</Heading>
        </CardHeader>
        <CardBody>
          <VStack spacing={8}>
            <Heading size='xl'> Sorry, an unexpected error has occurred.</Heading>
            <Heading size='sm'>
              {JSON.stringify(error)}
            </Heading>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ErrorPage;