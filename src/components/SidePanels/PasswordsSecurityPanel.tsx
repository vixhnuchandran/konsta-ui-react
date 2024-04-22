import { Card, List, ListItem } from "konsta/react"
import { PiLockSimpleBold, PiBluetoothThin } from "react-icons/pi"
import { IoFingerPrintSharp } from "react-icons/io5"
import { CiFaceSmile } from "react-icons/ci"

const PasswordsSecurityPanel = () => {
  return (
    <div className="flex-col mt-3 pl-2">
      <h1 className="pb-3 pl-2 font-light text-[34px]">Sound & vibration</h1>
      <div className="grid grid-cols-2 gap-0 md:grid-cols-1 md:gap-0 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col md:flex-row lg:flex-col">
          <div className="flex-1">
            <Card>
              <PiLockSimpleBold size={34} className="text-green-400 my-3" />
              <span className=" font-medium text-xl ">Password</span> <br />
              <span>off</span>
            </Card>
          </div>
          <div className="flex-1">
            <Card>
              <CiFaceSmile size={34} className="text-orange-300 my-3" />
              <span className=" font-medium text-xl ">Face unlock</span> <br />
              <span>off</span>
            </Card>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-col">
          <Card>
            <IoFingerPrintSharp
              size={34}
              className="text-purple-500 my-3 my-3"
            />
            <span className=" font-medium text-xl ">Fingerprint ..</span> <br />
            <span>off</span>
          </Card>
          <Card>
            <PiBluetoothThin size={34} className="text-indigo-500 my-3" />
            <span className=" font-medium text-xl ">Unlock with B.</span> <br />
            <span>off</span>
          </Card>
        </div>
      </div>
      <List dividers={false}>
        <ListItem
          label
          className="text-[10px]"
          groupTitle
          title="OTHER PASSWORDS"
        />
        <ListItem label title="Privacy protection password" />
        <hr className=" border-t border-gray-100 mr-2" />

        <ListItem label title="Emergency alerts" />
        <ListItem label title="Emergency SOS" />
        <ListItem label title="Privacy" />
        <hr className=" border-t border-gray-100 mt-4 mr-2" />

        <ListItem label title="Authorisation & revocation" />
      </List>
    </div>
  )
}

export default PasswordsSecurityPanel
