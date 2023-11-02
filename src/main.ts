import { serverExpress } from '@serverExpress'
import { envVars } from '@conf/envConf'

serverExpress.listen(envVars.PORT, () => console.log(`Server ON: ${envVars.PORT}`))
