import { serverExpress } from '@serverExpress'
import { envVars } from '@conf/envConf'
import { mongoConf } from '@conf/mongoConf'

mongoConf(envVars.URI)

serverExpress.listen(envVars.PORT, () => console.log(`Server ON: ${envVars.PORT}`))
