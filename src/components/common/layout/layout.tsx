import Head from 'next/head'
import PropTypes, { InferProps } from 'prop-types'
import Container from '@material-ui/core/Container'

import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'

const Layout = ({ children }: InferProps<typeof Layout.propTypes>) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavBar />

      <main>
        <Container>{children}</Container>
      </main>

      <Footer />
    </div>
  )
}

export default Layout

Layout.defaultProps = {}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
