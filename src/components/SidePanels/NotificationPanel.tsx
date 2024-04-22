import { CgHomeScreen } from "react-icons/cg"
import { MdScreenLockPortrait } from "react-icons/md"
import { HiMiniDevicePhoneMobile } from "react-icons/hi2"

import { Chip } from "konsta/react"
function NotificationPanel() {
  return (
    <div className="flex-col mt-3 pl-2 ">
      <h1 className="pb-3  pl-2 font-light text-[34px]">Notifications</h1>

      <div className="flex p-0  justify-between">
        <div className="h-32 w-32 flex flex-col items-center space-y-2">
          <MdScreenLockPortrait size={104} />
          <Chip className="m-0.5 text-sky-600 bg-sky-400 ">Lock screen</Chip>
        </div>
        <div>
          <div className="h-32 w-32 flex flex-col items-center space-y-2">
            <HiMiniDevicePhoneMobile size={104} />
            <Chip className="m-0.5 text-sky-600 bg-sky-400">Floating</Chip>
          </div>
        </div>
        <div>
          <div className="h-32 w-32 flex flex-col items-center space-y-2">
            <CgHomeScreen size={104} />
            <Chip className="m-0.5 text-sky-600 bg-sky-400">Badges</Chip>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NotificationPanel
