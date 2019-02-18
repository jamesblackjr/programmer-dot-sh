// ----------------------------------------------------------------------------
// IMPORTS

/* Yarn */

import * as React from 'react'
import { Helmet } from 'react-helmet'

/* Local */
import ShellForm from './form'

/* SCSS */
import './styles.scss'

// ----------------------------------------------------------------------------

class Index extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>&lt;programmer&gt;._</title>
          <meta name="description" content="nothing to see here, move along." />
        </Helmet>
        <ShellForm />
      </>
    )
  }
}

export default Index
