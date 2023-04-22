import NextLink from "next/link";

import { 
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from "@chakra-ui/react";

const NotFound = () => {
  <Container>
    <Heading as="h1">Not Found</Heading>
    <Text>The page you&apos;re looking for was not found</Text>
    <Divider my={6} />

    <Box my={6} alignItems='center'>
      <NextLink>
        <Button colorScheme="teal"> Return to home</Button>
      </NextLink>
    </Box>
  </Container>
}

export default NotFound