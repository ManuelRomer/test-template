import Vue, { VueConstructor } from 'vue'

declare global {
  interface Window {
    Cumulio: any
  }
}

declare module '*.svg' {
  const content: VueConstructor<Vue>
  export default content
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    head?: MetaInfo | (() => MetaInfo)
  }
}

interface MetaInfo {
  title: string
}

// types.d.ts
declare module 'worker-loader!*' {
  class WebpackWorker extends Worker {
    constructor()
  }

  export default WebpackWorker
}

declare module 'google.maps'

declare module 'vue/types/vue' {
  interface Vue {
    $apolloProvider: ApolloProvider
    $apollo: DollarApollo<this>
  }
}
