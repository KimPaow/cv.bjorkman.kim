import Head from 'next/head'
import { groq } from 'next-sanity'
import { getClient } from '@/sanity/sanity.server'
import PageWrapper from '@/components/dom/pagewrapper'
import Text from '@/components/dom/text'
import { Spacer, Stack } from '@/components/dom/flex'
import Box from '@/components/dom/box'
import { ListItem } from '@/components/dom/_common'
import { SideNav } from '@/components/dom/sidenav'

export default function Home({ data, title }) {
  const { info, experience, education } = data || {}
  const { basic, socials, contact } = info || {}

  return (
    <>
      <Head>
        <title>Frontend Engineer | Kim Björkman</title>
        <meta name="description" content={`Frontend Engineer | ${basic?.firstname} ${basic?.lastname}`} />
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
                {experience?.map(xp => <ListItem key={xp._id} {...xp} />)}
              </Stack>

              {/* Education */}
              <Stack column gap={4}>
                <Text h2 id="education">Education</Text>
                {education?.map(xp => <ListItem key={xp._id} {...xp} />)}
              </Stack>
            </Stack>

          </Stack>

          <Box css={{
            display: 'block',
            height: '2px',
            backgroundColor: '$text_body',
            marginY: '$5',

            '@md': {
              display: 'none'
            }
          }} />

          {/* Intro - Right Col */}
          <Box css={{ flex: 1 }}>
            <SideNav title intro={basic.intro} links={socials} contact={contact} />
          </Box>
        </Stack>
      </PageWrapper>
    </>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const query = groq`{
    "info": *[_type == "info"][0] {
      "basic": {
        firstname,
        lastname,
        intro,
      },
      "contact": {
        email,
        phone,
        address,
      },
      "socials": {
        portfolioUrl,
        github,
        twitter,
      },
    },
    "experience": *[_type == "experience"] | order(orderRank) {
      "institution": company,
      ...,
    },
    "education": *[_type == "education"] | order(orderRank) {
      ...,
    }
  }`

  const data = await getClient(preview).fetch(query)
  return {
    props: {
      title: "Hello, I'm Kim",
      data,
      query,
      preview
    }
  }
}