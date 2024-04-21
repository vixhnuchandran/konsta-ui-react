import { useState } from "react"
import { List, ListItem, Toggle } from "konsta/react"

const BluetoothPanel = () => {
  const [btState, setBtOn] = useState(false)

  return (
    <div className="flex-col mt-3">
      <h1 className="pl-2 font-light text-[34px]">Bluetooth</h1>

      <List>
        <ListItem
          label
          title="Bluetooth"
          after={
            <Toggle
              component="div"
              className="-my-1"
              checked={btState}
              onChange={() => setBtOn(!btState)}
            />
          }
        />
      </List>
    </div>
  )
}
export default BluetoothPanel
