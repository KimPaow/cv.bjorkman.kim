
import { useRouter } from 'next/router'
import { Stack, Spacer } from '@/components/dom/flex'
import Card from '@/components/dom/card'
import Text from '@/components/dom/text'
import Box from '@/components/dom/box'
import { Link } from '@/components/dom/links'
import { VscCircleLargeFilled, VscGithubInverted, VscTwitter } from 'react-icons/vsc'
import { styled } from '@/theme'
import Image from '@/components/dom/image'

const Circle = styled(Box, {
  borderRadius: '$full',
  flexBasis: '20px',
  width: '20px',
  backgroundColor: '$primary500'
})

const MobileText = styled(Text, {
  display: 'block',
  fontWeight: 800,

  '@md': {
    display: 'none'
  }
})

const Nav = () => {
  const { route } = useRouter()
  return <>
    <Link to="/about" active={route === '/about'} navlink>About</Link>
    <Link to="/#experience" navlink>Experience</Link>
    <Link to="/#education" navlink>Education</Link>
  </>
}

const ExternalLinks = ({ github, portfolioUrl, twitter }) => (
  <>
    {portfolioUrl && <Card isLink as={Link} to={portfolioUrl} css={{ marginRight: 'auto' }}>
      <VscCircleLargeFilled color="currentColor" />&nbsp;&nbsp;Check out my portfolio
    </Card>}
    {github && <Card isLink as={Link} to={github} css={{ marginRight: 'auto' }}>
      <VscGithubInverted color="currentColor" />&nbsp;&nbsp;Go to my Github
    </Card>}
    {twitter && <Card isLink as={Link} to={twitter} css={{ marginRight: 'auto' }}>
      <VscTwitter color="currentColor" />&nbsp;&nbsp;Follow me on Twitter
    </Card>}
  </>
)

export const SideNav = ({ title, intro, links, image, contact = {} }) => {
  console.log('title: ', title)
  return (
    <Stack column gap={3} css={{ position: 'sticky', top: '20px' }}>
      {title && <MobileText h1>
        {title}
      </MobileText>}
      <Spacer y={0} />
      <Circle />
      <Nav />
      <Spacer y={4} />

      {image && <Image src={image} layout="responsive" alt={image.asset?.altText} />}
      <Text preamble css={{ whiteSpace: 'pre-line', fontWeight: 500 }}>
        {intro}
      </Text>
      <Spacer y={3} />
      <Stack as="ul" column gap={3}>
        {contact.email && <Box as="li">
          <Link as="a" to={`mailto:${contact.email}`}>{contact.email}</Link>
        </Box>}
        {contact.phone && <Box as="li">
          <Link as="a" to={`tel:${contact.phone}`}>{contact.phone}</Link>
        </Box>}
      </Stack>
      <Spacer y={3} />
      {links && <ExternalLinks {...links} />}
    </Stack>
  )
}