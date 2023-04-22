import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" alignContent="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy" />
        <LinkOverlay href={href} target="_blanck">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  <Box width="100%" alignContent="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur" />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
}

export const GridItemStyle = () => {
  <Global styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
  `}/>
}