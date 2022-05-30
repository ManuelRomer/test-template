import Vue from 'vue'
// @ts-ignore
import VueApollo from 'vue-apollo'
Vue.use(VueApollo)

import { setContext } from 'apollo-link-context'
import { restartWebsockets } from 'vue-cli-plugin-apollo/graphql-client'
import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client'

const tokenName = process.env.VUE_APP_LOCAL_STORAGE_AUTH_KEY
const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP

const link = setContext(async (_, { headers }) => {
  const token =
    localStorage.getItem(tokenName) !== undefined
      ? localStorage.getItem(tokenName)
      : ''

  if (token !== null) {
    return {
      headers: {
        ...headers,
        authorization: token
      }
    }
  }
})

const defaultOptions = {
  httpEndpoint,
  tokenName,
  link,
  wsEndpoint: null,
  persisting: false,
  websocketsOnly: false,
  ssr: false,
  uri: process.env.VUE_APP_GRAPHQL_HTTP,
  fetchOptions: {
    mode: 'no-cors'
  }
}

export function createProvider(options = {}) {
  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options
  })

  apolloClient.wsClient = wsClient

  return new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        // fetchPolicy: 'cache-and-network',
      }
    },
    errorHandler(error) {
      console.error(
        '%cError',
        'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
        error.message
      )
    }
  })
}

export async function onLogin(apolloClient, token) {
  if (typeof localStorage !== 'undefined' && token) {
    localStorage.setItem(tokenName, token)
  }

  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)

  try {
    await apolloClient.resetStore()
  } catch (error) {
    console.log(
      '%cError on cache reset (login)',
      'color: orange;',
      error.message
    )
  }
}

export async function onLogout(apolloClient) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(tokenName)
  }

  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)

  console.log('apolloClient', apolloClient)

  try {
    await apolloClient.resetStore()
  } catch (e) {
    console.log('%cError on cache reset (logout)', 'color: orange;', e.message)
  }
}
