// import ky from 'ky'
import fetch from 'isomorphic-unfetch'
import pMemoize from 'p-memoize'

import { api } from './config'
import * as types from './types'
// export const searchNotion = pMemoize(searchNotionImpl, { maxAge: 10000 })
