import express from 'express'
import { applyDbScripts } from '../components/scripts/commands/applyDbScripts'
import { databaseConfig } from '../../databaseConfig'
import { resetAuthTables } from '../components/auth/commands/resetAuthTables'
import { AppContext } from '../infrastructure/appContext'
import { resetClubTables } from '../components/club/commands/resetClubTables'
import { resetEventTables } from '../components/event/commands/resetEventTables'
import { resetGenreTables } from '../components/genre/commands/resetGenreTables'
import { resetImageTables } from '../components/image/commands/resetImageTables'
import { getConnection } from 'typeorm'

const app = express()

if (process.env.NODE_ENV !== 'production') {
    app.get('/', async (req, res) => {
        try {
            console.log('reset tables')
            await resetTables({
                isAdmin: true,
                db: getConnection(),
            })
            console.log('apply seeds')
            await applySeeds()
            res.send('Done')
        } catch (err) {
            res.send(err)
        }
    })
}

async function resetTables(appContext: AppContext) {
    await resetAuthTables(appContext)
    await resetClubTables(appContext)
    await resetEventTables(appContext)
    await resetGenreTables(appContext)
    await resetImageTables(appContext)
}
async function applySeeds() {
    await applyDbScripts(databaseConfig.seeds || [], true)
}

export default app