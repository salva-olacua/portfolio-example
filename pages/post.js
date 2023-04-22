import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

// importar imagenes

const Link = () => (
  <Layout title="Post">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Popular Post
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1,2,2]} gap={6}>
          {/* <GridItem title="My Fish workflow" thumbnail={thumbFishWorkflow} href="" />
          <GridItem title="My Desk setup (late 2020)" thumbnail={thumbFishWorkflow} href="" />
          <GridItem title="My Desk setup (late 2020)" thumbnail={thumbFishWorkflow} href="" />
          <GridItem title="My Desk setup (late 2020)" thumbnail={thumbFishWorkflow} href="" />
          <GridItem title="My Desk setup (late 2020)" thumbnail={thumbFishWorkflow} href="" />
          <GridItem title="My Desk setup (late 2020)" thumbnail={thumbFishWorkflow} href="" /> */}
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)