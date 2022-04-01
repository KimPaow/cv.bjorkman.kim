import { styled } from '@/theme/stitches.config'

export const PageWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '$content',
  width: '100%',
  marginX: 'auto',
  paddingY: '$5',
  paddingX: '$3',

  '@sm': {
    paddingY: '$6'
  }
})

export default PageWrapper;
