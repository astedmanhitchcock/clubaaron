import { createApp } from 'vue'
import App from './App.vue'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

import router from '@/router/'

import '@/styles/base.scss'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'http://localhost:8000/graphql',
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

createApp(App).use(router).use(apolloProvider).mount('#app')
