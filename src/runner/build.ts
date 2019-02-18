// Runner (production)

// ----------------------------------------------------------------------------
// IMPORTS

/* Yarn */
import * as chalk from 'chalk'

/* Local */
import { build, common } from './app'

// ----------------------------------------------------------------------------

common.spinner.info(chalk.default.bgBlue('Build mode'))

void (async () => {
  await build()
  common.spinner.succeed('Finished building')
})()
