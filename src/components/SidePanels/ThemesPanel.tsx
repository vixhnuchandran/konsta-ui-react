import { Preloader } from "konsta/react"

const ThemesPanel = () => {
  return (
    <div className="flex-col items-start mt-3 pl-2">
      <h1 className="pl-2  font-light text-[34px]">Themes</h1>

      <div className="flex flex-col items-center justify-center h-[650px] font-light text-4xl mb-6">
        <Preloader />
      </div>
    </div>
  )
}

export default ThemesPanel
