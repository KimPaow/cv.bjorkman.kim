import Head from 'next/head'
import PageWrapper from '@/components/dom/pagewrapper'
import Text from '@/components/dom/text'
import { Spacer, Stack } from '@/components/dom/flex'
import Box from '@/components/dom/box'
import { SideNav } from '@/components/dom/sidenav'

export default function Home({ title }) {
  return (
    <>
      <Head>
        <title>Frontend Engineer | Kim Björkman</title>
        <meta name="description" content="Frontend Engineer | Kim Björkman" />
        <link rel="icon" href="/slack.png" />
      </Head>
      <PageWrapper>
        <Stack gap={5} css={{ flexDirection: 'column-reverse', fontWeight: 800, '@sm': { flexDirection: 'row' } }}>
          <Stack column gap={5} css={{ flex: 2 }}>
            <Text h1 css={{ display: 'none', '@md': { display: 'block' } }}>{title}</Text>
            <Spacer y={5} css={{ display: 'none', '@md': { display: 'block' } }} />

            <Stack gap={5} css={{ flexDirection: 'column', '@sm': { flexDirection: 'row' } }}>
              {/* Work Experience */}
              <Stack column gap={4}>
                <Text h2 id="experience">Work Experience</Text>
                <Stack column gap={2}>
                  <Text h3>Lead Frontend Developer</Text>
                  <Text label color="muted">Sunny at Sea | Stockholm, Sweden | 2017 →</Text>
                  <Text body>{`
                  Responsibilities include keeping up with modern technologies, building web applications and experiences, and mentoring entry to mid level coworkers.
                `}</Text>
                </Stack>
                <Stack column gap={2}>
                  <Text h3>Designer / Fullstack Developer</Text>
                  <Text label color="muted">Sunny at Sea | Stockholm, Sweden | 2014 - 2017</Text>
                  <Text body>{`
                  I started out as a .NET intern. But after noticing my passion for design, in addition to code, I was onboarded as a designer/developer hybrid. My responsibilities were diverse; anything from creating and ordering printed materials, to designing and developing websites.
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
                  I studied up to the N3 level and reached a basic understanding of Japanese.
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
            <SideNav title />
          </Box>
        </Stack>
      </PageWrapper>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      title: "Hello, I'm Kim"
    }
  }
}