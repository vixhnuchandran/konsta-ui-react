import {
  IoMdCall,
  IoIosAlarm,
  IoIosBluetooth,
  IoIosNotifications,
} from "react-icons/io"
import { RiNotificationBadgeFill } from "react-icons/ri"
import { IoNotificationsSharp } from "react-icons/io5"
import { useState } from "react"
import { Card, List, ListItem, Toggle, BlockHeader, Range } from "konsta/react"

const SoundVibrationPanel = () => {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)

  const [volume1, setVolume1] = useState(50)
  const [volume2, setVolume2] = useState(70)
  const [volume3, setVolume3] = useState(10)

  return (
    <div className="flex-col mt-3 pl-2">
      <h1 className="pb-3 pl-2 font-light text-[34px]">Sound & vibration</h1>
      <div className="grid grid-cols-2 gap-0 md:grid-cols-1 md:gap-0 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col md:flex-row lg:flex-col">
          <div className="flex-1">
            <Card>
              <IoMdCall size={34} className="text-green-400 my-3" />
              <span className=" font-medium text-xl ">Ringtone</span> <br />
              <span>one_piece_sms</span>
            </Card>
          </div>
          <div className="flex-1">
            <Card>
              <RiNotificationBadgeFill
                size={34}
                className="text-orange-300 my-3"
              />
              <span className=" font-medium text-xl ">Events</span> <br />
              <span>None</span>
            </Card>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-col">
          <Card>
            <IoIosAlarm size={34} className="text-orange-400 my-3" />
            <span className=" font-medium text-xl ">Alarm</span> <br />
            <span>You Can Do It Too</span>
          </Card>
          <Card>
            <IoNotificationsSharp size={34} className="text-purple-500 my-3" />
            <span className=" font-medium text-xl ">Notification</span> <br />
            <span>None</span>
          </Card>
        </div>
      </div>
      <List dividers={false}>
        <ListItem label title="Silent/DND" />
        <BlockHeader className="mb-0">
          <IoIosNotifications size={24} className=" opacity-25 " />

          <span>Calls, reminders, notifications</span>
        </BlockHeader>
        <ListItem
          innerClassName="flex space-x-4 rtl:space-x-reverse"
          innerChildren={
            <>
              <Range
                value={volume1}
                step={1}
                min={0}
                max={100}
                onChange={e => setVolume1(e.target.value)}
              />
            </>
          }
        />

        <BlockHeader className="mb-0">
          <IoIosAlarm size={24} className=" opacity-25 " />

          <span>Alarm volume</span>
        </BlockHeader>
        <ListItem
          innerClassName="flex space-x-4 rtl:space-x-reverse"
          innerChildren={
            <>
              <Range
                value={volume2}
                step={1}
                min={0}
                max={100}
                onChange={e => setVolume2(e.target.value)}
              />
            </>
          }
        />
        <BlockHeader className="mb-0">
          <IoIosBluetooth size={24} className=" opacity-25 " />

          <span>Music, games, media</span>
        </BlockHeader>
        <ListItem
          innerClassName="flex space-x-4 rtl:space-x-reverse"
          innerChildren={
            <>
              <Range
                value={volume3}
                step={1}
                min={0}
                max={100}
                onChange={e => setVolume3(e.target.value)}
              />
            </>
          }
        />

        <ListItem
          label
          title="Also vibrate for calls"
          after={
            <Toggle
              component="div"
              className="-my-1"
              checked={checked1}
              onChange={() => setChecked1(!checked1)}
            />
          }
        />
        <ListItem
          label
          title="Vibrate in silent mode"
          after={
            <Toggle
              component="div"
              className="-my-1 k-color-brand-red"
              checked={checked2}
              onChange={() => setChecked2(!checked2)}
            />
          }
        />
        <ListItem
          label
          title="Vibrate on tap"
          after={
            <Toggle
              component="div"
              className="-my-1 k-color-brand-green"
              checked={checked3}
              onChange={() => setChecked3(!checked3)}
            />
          }
        />
        <hr className=" border-t border-gray-100 mr-2" />
        <ListItem label title="Additional settings" />

        <ListItem label title="Earphones" />
      </List>
    </div>
  )
}

export default SoundVibrationPanel
