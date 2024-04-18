import { App } from "konsta/react"
import HomePage from "./pages/HomePage.tsx"

export default function MyApp() {
  return (
    <>
      <App safeAreas theme="ios">
        <div className="pl-4 text-xs pt-10">
          <HomePage />
        </div>
      </App>
    </>
  )
}
