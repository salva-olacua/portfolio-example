import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from "@chakra-ui/icons"

const Work = () => {
  return (
    <Layout title="Inkdrop">
      <Container>
        <Title>
          Inkdrop <Badge>2016</Badge>
        </Title>
        <P>
          A Markdown note-taking app with 100+ plugins,
          cross-platform and encrypted data sync support.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.inkdrop.app/">
              https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
            </Link> 
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJs, Electron, React Native</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <span>NodeJs, Electron, React Native</span>
          </ListItem>
        </List>

        {/* <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" /> */}
        {/* <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" /> */}
      </Container>
    </Layout>
  )
}

export default Work