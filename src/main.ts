import { serverExpress } from '@serverExpress'
import { envVars } from '@conf/envConf'
import { mongoConf } from '@conf/mongoConf'
// import '@conf/schedulerConf'

mongoConf(envVars.URI)

serverExpress.listen(envVars.PORT, () => console.log(`Server ON: ${envVars.PORT}`))
