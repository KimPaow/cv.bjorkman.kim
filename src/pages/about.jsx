import Head from 'next/head'
import { groq } from 'next-sanity'
import { getClient } from '@/sanity/sanity.server'
import PageWrapper from '@/components/dom/pagewrapper'
import Text from '@/components/dom/text'
import { Spacer, Stack } from '@/components/dom/flex'
import Box from '@/components/dom/box'
import { SideNav } from '@/components/dom/sidenav'

export default function Home({ data, title }) {
  const { info } = data || {}
  const { basic = {}, socials, contact } = info || {}

  return (
    <>
      <Head>
        <title>{title} | Kim Björkman</title>
        <meta name="description" content="Frontend Engineer | Kim Björkman" />
        <link rel="icon" href="/slack.png" />
      </Head>
      <PageWrapper>
        <Stack gap={5} css={{ flexDirection: 'column-reverse', fontWeight: 800, '@sm': { flexDirection: 'row' } }}>
          <Stack column gap={5} css={{ flex: 2 }}>
            <Text h1 css={{ display: 'none', '@md': { display: 'block' } }}>{title}</Text>
            <Spacer y={4} css={{ display: 'none', '@md': { display: 'block' } }} />
            {basic.about && <Stack column gap={4}>
              <Text preamble css={{ maxWidth: '35ch', whiteSpace: 'pre-line', fontWeight: 500 }}>
                {basic.about}
              </Text>
            </Stack>}
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
            <SideNav title links={socials} contact={contact} image={basic.profilepic} />
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
        profilepic {
          ...,
          asset->{
            ...,
          }
        },
        about,
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
  }`

  const data = await getClient(preview).fetch(query)
  return {
    props: {
      title: "Hallå",
      data,
      query,
      preview
    }
  }
}