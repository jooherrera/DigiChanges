import { exit } from 'process'

export const envVars = {
  PORT: isEmpty(Number(process.env.PORT)),
  URI: isEmpty(process.env.URI),
}

function isEmpty(value: any) {
  if (typeof value === 'undefined') exit(1)
  return value
}
