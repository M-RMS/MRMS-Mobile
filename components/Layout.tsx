import styled from '~/utils/styled'

type LayoutProps = {
  noPadding?: boolean
  white?: boolean
}

const Layout = styled.View<LayoutProps>`
  flex: 1;
  position: relative;
  background-color: ${(props) => (props.white ? 'white' : ' #fafafa')};
  padding: ${(props) => (props.noPadding ? '0px' : '20px')};
`

export default Layout
