// Root entry point

// ----------------------------------------------------------------------------
// IMPORTS

/* Yarn */
import * as React from 'react'

import Helmet from 'react-helmet'

import { Global } from '@emotion/core'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'

/* Local */

// Components
import ScrollTop from '@/components/helpers/scrollTop'

// Global styles
import globalStyles from '@/global/styles'

// Routes
import routes from '@/data/routes'

// ----------------------------------------------------------------------------

const Root = () => (
  <div>
    <Global styles={globalStyles} />
    <Helmet>
      <title>&lt;programmer&gt;._</title>
    </Helmet>
    <ScrollTop>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </ScrollTop>
  </div>
)

export default hot(module)(Root)
