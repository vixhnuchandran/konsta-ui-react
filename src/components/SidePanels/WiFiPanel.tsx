import { useState } from "react"
import { List, ListItem, Toggle } from "konsta/react"

const WiFiPanel = () => {
  const [wifiState, setWifiOn] = useState(false)

  return (
    <div className="flex-col items-start mt-3 pl-2">
      <h1 className="pl-2  font-light text-[34px]"> Wi-Fi</h1>

      <List>
        <ListItem
          label
          title="Wi-Fi"
          after={
            <Toggle
              component="div"
              className="-my-1"
              checked={wifiState}
              onChange={() => setWifiOn(!wifiState)}
            />
          }
        />
      </List>
    </div>
  )
}

export default WiFiPanel
