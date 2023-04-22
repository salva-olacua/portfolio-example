import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
// import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png"
// import thumbWalknote from "../public/images/works/walknote_eyecatch.png"

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <section>
            <WorkGridItem id="inkdrop" title="Inkdrop" /*thumbnail={thumbInkdrop} */ thumbnail={''}>
              A markdown note-taking app
            </WorkGridItem>
          </section>

          <section>
            <WorkGridItem id="walknote" title="Walknote" /*thumbnail={thumbWalknote} */ thumbnail={''}>
              Music recommendation app for IOS
            </WorkGridItem>
          </section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works