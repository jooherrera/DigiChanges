import { serverExpress } from '@serverExpress'
import { envVars } from '@conf/envConf'
import { mongoConf } from '@conf/mongoConf'
import '@conf/schedulerConf'

mongoConf(envVars.URI).connect()

const PORT = envVars.PORT || 5000

serverExpress.listen(PORT, () => console.log(`Server ON: ${PORT}`))
