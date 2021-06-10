import { useState } from "react"
import { RootStore } from "./store"

function MyApp({ Component, pageProps }) {
  // const [rootStore] = useState(() => new RootStore())

  return <Component {...pageProps} />
}

export default MyApp
