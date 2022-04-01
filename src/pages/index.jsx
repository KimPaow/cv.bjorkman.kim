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
        <Stack gap={5}>
          <Stack column gap={5} css={{ flex: 2 }}>
            {/* <Box css={{ img: { borderRadius: '$lg' } }}>
              <Image src="/bw.jpeg" width={450} height={450} alt="profile picture" />
            </Box> */}
            <Text h1>Hello, I'm Kim</Text>
            <Spacer y={4} />

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
                    <Text>Tavastgatan 5, Stockholm, Sweden</Text>
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

            {/* Work Experience */}
            <Stack column gap={4}>
              <Text h2 id="experience">Work Experience</Text>
              <Stack column gap={2}>
                <Text h3>Lead Frontend Developer</Text>
                <Text label color="muted">Sunny at Sea | Stockholm, Sweden | 2017/11 - Present</Text>
                <Text body>{`
                  Currently I’m the lead frontend developer at Sunny at Sea. I discovered that becoming a “creative developer” was the perfect fit for my skills since that role requires knowledge in many areas; fullstack development, design, 3D, animation and graphics programming. My responsibilities include keeping up with the most modern technologies, building web applications and experiences, and mentoring new coworkers.
                `}</Text>
              </Stack>
              <Stack column gap={2}>
                <Text h3>Designer / Fullstack Developer</Text>
                <Text label color="muted">Sunny at Sea | Stockholm, Sweden | 2014/11 - 2017/11</Text>
                <Text body>{`
                  I started at Sunny at Sea as a .NET intern, but they noticed my passion for design and decided to hire me as a designer/developer hybrid. Even though my internship was supposed to be 6 months long I got hired full time after just a little over two months. I took part in many exciting projects, including setting up the wayfinding system for Google’s HQ in Stockholm. My responsibilities were diverse; from creating and ordering printed materials for displays, to designing and developing websites.
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
                  After living in Japan for a year and attending ISI Kyoto full-time, I was able to reach a basic understanding of everyday japanese. I studied up to the N3 level. During this time I also worked 50% at Sunny at Sea, and taught myself Flutter and Dart in my spare time.
                `}</Text>
              </Stack>
              <Stack column gap={2}>
                <Text h3>Polytechnic Degree - .NET development</Text>
                <Text label color="muted">Nackademin | Stockholm, Sweden | 2012-2014</Text>
                <Text body>{`
                  We were taught .NET, C#, Javascript, SQL, Git, IIS, Computer Science, HTML, and CSS with the goal of being able to work as .NET developers.
                `}</Text>
              </Stack>
              <Stack column gap={2}>
                <Text h3>Polytechnic Degree - Digital Graphics</Text>
                <Text label color="muted">Nackademin | Stockholm, Sweden | 2010-2012</Text>
                <Text body>{`
                  We were taught 3D modeling, design, animation, rendering, arts, and VFX with the goal of being able to work in the film or games industry.
                `}</Text>
              </Stack>
            </Stack>

          </Stack>

          {/* Intro - Right Col */}
          <Box css={{ flex: 1 }}>
            <Stack column gap={3} css={{ position: 'sticky', top: '20px' }}>
              <Spacer y={1} />
              <Box css={{ borderRadius: '$full', flexBasis: '20px', width: '20px', backgroundColor: '$primary500' }} />
              <Link to="#contact" navlink>Contact</Link>
              <Link to="#experience" navlink>Experience</Link>
              <Link to="#education" navlink>Education</Link>
              <Link to="#skills" navlink>Skills</Link>
              <Spacer y={4} />
              <Stack column gap={3}>
                <Text preamble css={{ whiteSpace: 'pre-line' }}>
                  {`I'm a Swede living in Fukuoka, Japan. Software is where i funnel my Being.`}
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