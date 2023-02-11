export const CATS_API_BASE_URL  = 'https://cat-fact.herokuapp.com'

// Endpoints
export const CATS_API_ENDPOINT_FACTS_RANDOM  = '/facts/random'
export const CATS_API_ENDPOINT_FACTS  = '/facts'                // max 5
export const CATS_API_ENDPOINT_FACTS_BY_ID  = '/facts/{}'       // {} - identifier

export type CatFactStatus = {
  sentCount: number
}

export type CatFact = {
  _id: string
  used: boolean
  deleted: boolean
  updatedAt: string
  createdAt: string
  text: string
  type: string        // jakie zwierzątko
  status: CatFactStatus
}
