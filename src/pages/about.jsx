import Head from 'next/head'
import PageWrapper from '@/components/dom/pagewrapper'
import Text from '@/components/dom/text'
import { Spacer, Stack } from '@/components/dom/flex'
import Box from '@/components/dom/box'
import { SideNav } from '@/components/dom/sidenav'

export default function Home({ title }) {
  console.log('title: ', title)
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

            {/* Left Col */}
            <Stack column gap={4}>
              <Text preamble css={{ maxWidth: '30ch', whiteSpace: 'pre-line', fontWeight: 500 }}>
                {`I'm a Swedish guy living in Fukuoka, Japan. Software is what i direct my Being into.`}
              </Text>
            </Stack>
            {/* END Left Col */}

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
      title: 'Hej'
    }
  }
}