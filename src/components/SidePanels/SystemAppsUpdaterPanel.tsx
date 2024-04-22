import { BsExclamationSquare } from "react-icons/bs"

const SystemAppsUpdaterPanel = () => {
  return (
    <>
      <div className="flex-col mt-3 pl-2">
        <h1 className="pl-4 font-light text-[34px]">System apps updater</h1>
      </div>
      <div className="flex flex-col items-center mt-20">
        <BsExclamationSquare size={34} className=" opacity-25" />
        <h3 className=" text-base">All system apps are up to date</h3>
      </div>
    </>
  )
}

export default SystemAppsUpdaterPanel
