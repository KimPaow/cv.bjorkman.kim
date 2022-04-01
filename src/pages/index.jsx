import Head from 'next/head'
import PageWrapper from '@/components/dom/pagewrapper'
import Text from '@/components/dom/text'
import { Spacer, Stack } from '@/components/dom/flex'
import Box from '@/components/dom/box'
import Image from 'next/image'
import { Link } from '@/components/dom/links'
import Card from '@/components/dom/card'
import { VscGithubInverted, VscTwitter, VscCircleLargeFilled } from 'react-icons/vsc'

export default function Home() {
  return (
    // Pass the pre-fetched data as the initial value of all SWR hooks
    <>
      <Head>
        <title>Attuned Blog</title>
        <meta name="description" content="The latest from us at Attuned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <Stack gap={5} css={{ flexDirection: 'column-reverse', fontWeight: 800, '@sm': { flexDirection: 'row' } }}>
          <Stack column gap={5} css={{ flex: 2 }}>
            {/* <Box css={{ img: { borderRadius: '$lg' } }}>
              <Image src="/bw.jpeg" width={450} height={450} alt="profile picture" />
            </Box> */}
            <Text h1 css={{ display: 'none', '@md': { display: 'block' } }}>Hello, I&apos;m Kim</Text>
            <Spacer y={4} css={{ display: 'none', '@md': { display: 'block' } }} />

            {/* Links */}
            <Stack gap={4}>
              <Stack column gap={3} css={{ flex: 1 }}>
                <Text h2 id="contact">Contact</Text>
                <Stack as="ul" column gap={3}>
                  <Box as="li">
                    <Text as="a" href="https://www.bjorkman.kim">www.bjorkman.kim</Text>
                  </Box>
                  <Box as="li">
                    <Text as="a" href="mailto:hello@bjorkman.kim">hello@bjorkman.kim</Text>
                  </Box>
                  <Box as="li">
                    <Text as="a" href="tel:+46 73 409 35 09">+46 73 409 35 09</Text>
                  </Box>
                  <Box as="li">
                    <Text body css={{ lineHeight: 'inherit' }}>Tavastgatan 5, Stockholm, Sweden</Text>
                  </Box>
                </Stack>
              </Stack>
              {/* <Stack column gap={3} css={{ flex: 1 }}>
                <Text h2>Other</Text>
                <Stack as="ul" column gap={3}>
                  <Box as="li">
                    <Text>1991-03-08</Text>
                  </Box>
                  <Box as="li">
                    <Text as="a" href="https://github.com/KimPaow">Github</Text>
                  </Box>
                  <Box as="li">
                    <Text as="a" href="https://twitter.com/Kim_Bjorkman_">Twitter</Text>
                  </Box>
                  <Box as="li">
                    <Text as="a" href="https://medium.com/@kimbjrkman">Medium</Text>
                  </Box>
                </Stack>
              </Stack> */}
            </Stack>

            <Stack gap={5} css={{ flexDirection: 'column', '@sm': { flexDirection: 'row' } }}>
              {/* Work Experience */}
              <Stack column gap={4}>
                <Text h2 id="experience">Work Experience</Text>
                <Stack column gap={2}>
                  <Text h3>Lead Frontend Developer</Text>
                  <Text label color="muted">Sunny at Sea | Stockholm, Sweden | 2017 →</Text>
                  <Text body>{`
                  Currently I’m the lead frontend developer at Sunny at Sea. My responsibilities include keeping up with the most modern technologies, building web applications and experiences, and mentoring new coworkers.
                `}</Text>
                </Stack>
                <Stack column gap={2}>
                  <Text h3>Designer / Fullstack Developer</Text>
                  <Text label color="muted">Sunny at Sea | Stockholm, Sweden | 2014 - 2017</Text>
                  <Text body>{`
                  Starting out at Sunny at Sea I was as a .NET intern, but they soon noticed my passion for design, in addition to code, and decided to onboard me as a designer/developer hybrid. My responsibilities were diverse; anything from creating and ordering printed materials, to designing and developing websites.
                `}</Text>
                </Stack>
                <Stack column gap={2}>
                  <Text h3>Freelance Illustrator / Designer</Text>
                  <Text label color="muted">Stockholm, Sweden | 2010 - 2014</Text>
                  <Text body>{`
                  After graduating high-school I started freelancing as an illustrator/designer while working on my degree. I kept this up until 2014 when I finished school.
                `}</Text>
                </Stack>
              </Stack>

              {/* Education */}
              <Stack column gap={4}>
                <Text h2 id="education">Education</Text>
                <Stack column gap={2}>
                  <Text h3>Japanese Language Degree</Text>
                  <Text label color="muted">ISI Kyoto | Kyoto, Japan | 2018-2019</Text>
                  <Text body>{`
                  I was able to reach a basic understanding of Japanese & studied up to the N3 level.
                `}</Text>
                </Stack>
                <Stack column gap={2}>
                  <Text h3>Polytechnic Degree - CS</Text>
                  <Text label color="muted">Nackademin | Stockholm, Sweden | 2012-2014</Text>
                  <Text body>{`
                  Computer Science, .NET, C#, Javascript, SQL, Git, IIS, HTML, and CSS.
                `}</Text>
                </Stack>
                <Stack column gap={2}>
                  <Text h3>Polytechnic Degree - Digital Graphics</Text>
                  <Text label color="muted">Nackademin | Stockholm, Sweden | 2010-2012</Text>
                  <Text body>{`
                  3D modeling, design, animation, rendering, classical arts, and VFX. The goal was to become staffers in the film or games industry.
                `}</Text>
                </Stack>
              </Stack>
            </Stack>

          </Stack>

          <Box css={{
            display: 'block',
            height: '2px',
            backgroundColor: '$text_body',
            '@md': {
              display: 'none'
            }
          }} />

          {/* Intro - Right Col */}
          <Box css={{ flex: 1 }}>
            <Stack column gap={3} css={{ position: 'sticky', top: '20px' }}>
              <Text h1 css={{ display: 'block', fontWeight: 800, '@md': { display: 'none' } }}>Hello, I&apos;m Kim</Text>
              <Spacer y={0} />
              <Box css={{ borderRadius: '$full', flexBasis: '20px', width: '20px', backgroundColor: '$primary500' }} />
              <Link to="#contact" navlink>Contact</Link>
              <Link to="#experience" navlink>Experience</Link>
              <Link to="#education" navlink>Education</Link>
              <Link to="#skills" navlink>Skills</Link>
              <Spacer y={4} />
              <Stack column gap={3}>
                <Text preamble css={{ whiteSpace: 'pre-line', fontWeight: 500 }}>
                  {`I'm a Swedish guy living in Fukuoka, Japan. Software is what i direct my Being into.`}
                </Text>
              </Stack>
              <Spacer y={3} />
              <Card isLink as={Link} to="https://www.bjorkman.kim" css={{ marginRight: 'auto' }}>
                <VscCircleLargeFilled color="currentColor" />&nbsp;&nbsp;Check out my portfolio
              </Card>
              <Card isLink as={Link} to="https://github.com/KimPaow" css={{ marginRight: 'auto' }}>
                <VscGithubInverted color="currentColor" />&nbsp;&nbsp;Stalk my Github
              </Card>
              <Card isLink as={Link} to="https://twitter.com/Kim_Bjorkman_" css={{ marginRight: 'auto' }}>
                <VscTwitter color="currentColor" />&nbsp;&nbsp;Follow me on Twitter
              </Card>
            </Stack>
          </Box>
        </Stack>
      </PageWrapper>
    </>
  )
}