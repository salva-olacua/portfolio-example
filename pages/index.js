import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Icon,
  Link,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "../components/layouts/article"
import NextLink from "next/link"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import { GridItem } from "../components/grid-item"
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius={"lg"} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
          Hello, This is an example website
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Name of person
            </Heading>
            <p>Digital Craftzman (Artist / Developer / Designer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            alignContent="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/takuya.jpg"
              alt="Profile image" />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Person description
            <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
              Inkdrop
            </Link>
          </Paragraph>
          <Box alignContent="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal">
              My portfolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>Birth Year</BioYear>
            Born in ...
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>
            Complete Master
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>
            Worked at yahoo!
          </BioSection>
          <BioSection>
            <BioYear>2012 to present</BioYear>
            Works as a Freelance
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I love
          </Heading>
          <Paragraph>
            Art, Music, {' '}
            <Link href="/works/inkdrop">
              Drawing
            </Link>
            , Playing Drums, {' '}
            <Link href="/works/inkdrop">
              Photography
            </Link>
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>

          <List>
            <ListItem>
              <Link href="https://github.com/craftzdog" target="_blank">
                <button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>@craftzdog</button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/inkdrop_app" target="_blank">
                <button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}>
                  @craftzdog
                </button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page