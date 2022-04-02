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
        <title>About | Kim Björkman</title>
        <meta name="description" content="Frontend Engineer | Kim Björkman" />
        <link rel="icon" href="/slack.png" />
      </Head>
      <PageWrapper>
        <Stack gap={5} css={{ flexDirection: 'column-reverse', fontWeight: 800, '@sm': { flexDirection: 'row' } }}>
          <Stack column gap={5} css={{ flex: 2 }}>
            <Text h1 css={{ display: 'none', '@md': { display: 'block' } }}>{title}</Text>
            <Spacer y={4} css={{ display: 'none', '@md': { display: 'block' } }} />

            {/* Contact */}
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
      title: "Here's how to reach me."
    }
  }
}