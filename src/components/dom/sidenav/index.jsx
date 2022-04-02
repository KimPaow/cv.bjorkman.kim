import { Stack, Spacer } from '@/components/dom/flex'
import Card from '@/components/dom/card'
import Text from '@/components/dom/text'
import Box from '@/components/dom/box'
import { Link } from '@/components/dom/links'
import { VscCircleLargeFilled, VscGithubInverted, VscTwitter } from 'react-icons/vsc'
import { styled } from '@/theme'
import { useRouter } from 'next/router'

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
    <Link to="/contact" active={route === '/contact'} navlink>Contact</Link>
    <Link to="/#experience" navlink>Experience</Link>
    <Link to="/#education" navlink>Education</Link>
  </>
}

const ExternalLinks = () => (
  <>
    <Card isLink as={Link} to="https://www.bjorkman.kim" css={{ marginRight: 'auto' }}>
      <VscCircleLargeFilled color="currentColor" />&nbsp;&nbsp;Check out my portfolio
    </Card>
    <Card isLink as={Link} to="https://github.com/KimPaow" css={{ marginRight: 'auto' }}>
      <VscGithubInverted color="currentColor" />&nbsp;&nbsp;Stalk my Github
    </Card>
    <Card isLink as={Link} to="https://twitter.com/Kim_Bjorkman_" css={{ marginRight: 'auto' }}>
      <VscTwitter color="currentColor" />&nbsp;&nbsp;Follow me on Twitter
    </Card>
  </>
)

export const SideNav = ({ title = "Hello, I'm Kim" }) => {
  return (
    <Stack column gap={3} css={{ position: 'sticky', top: '20px' }}>
      <MobileText h1>
        {title}
      </MobileText>
      <Spacer y={0} />
      <Circle />
      <Nav />
      <Spacer y={4} />
      <Text preamble css={{ whiteSpace: 'pre-line', fontWeight: 500 }}>
        {`I'm a Swedish guy living in Fukuoka, Japan. Software is what i direct my Being into.`}
      </Text>
      <Spacer y={3} />
      <ExternalLinks />
    </Stack>
  )
}