import {
  SESSION_EXPIRATION_TIME,
  SESSION_EXPIRATION_TIME_IN_SECONDS,
  SESSION_EXPIRATION_TIME_IN_MINUTES,
  SESSION_EXPIRATION_TIME_IN_HOURS,
} from "./dummy-import"

// solution to adding all these imports in one go:
//   => Quickfix command(ctrl+. for me) > Add all missing imports
const expirationTimes = [
  SESSION_EXPIRATION_TIME,
  SESSION_EXPIRATION_TIME_IN_SECONDS,
  SESSION_EXPIRATION_TIME_IN_MINUTES,
  SESSION_EXPIRATION_TIME_IN_HOURS,
]
