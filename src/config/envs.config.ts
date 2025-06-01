import 'dotenv/config'
import * as joi from 'joi'

interface Envs {
  PORT: number
  DATABASE_URL: string
  SALT_ROUNDS: number
  JWT_SECRET: string
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
    SALT_ROUNDS: joi.number().min(1).required(),
    JWT_SECRET: joi.string().required(),
  })
  .unknown(true)

const { error, value } = envsSchema.validate({
  ...process.env,
})

if (error) {
  console.error('Environment variables validation error:', error.details)
  process.exit(1)
}

const envsValidates: Envs = value as Envs

export const envs = {
  PORT: envsValidates.PORT,
  DATABASE_URL: envsValidates.DATABASE_URL,
  SALT_ROUNDS: envsValidates.SALT_ROUNDS,
  JWT_SECRET: process.env.JWT_SECRET,
}
