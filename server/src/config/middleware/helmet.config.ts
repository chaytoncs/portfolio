import { HelmetOptions } from 'helmet'

/**
 * CSP - Strict Implementation
 * Referenced articles to build out strict CSP
 *  - https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html
 *  - https://web.dev/articles/strict-csp
 */
const cspConfig: HelmetOptions['contentSecurityPolicy'] = {}

export const helmetOptions: HelmetOptions = {
  contentSecurityPolicy: cspConfig
}
