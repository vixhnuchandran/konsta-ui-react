import { useState } from "react"
import { List, ListItem, Toggle } from "konsta/react"
function ConnectionSharingPanel() {
  const [checked1, setChecked1] = useState(false)

  return (
    <div className="flex-col mt-3 pl-2">
      <h1 className="pb-3 pl-2 font-light text-[34px]">Connection & sharing</h1>
      <List dividers={false}>
        <ListItem label title="MI share" />
        <ListItem label title="Cast" />

        <ListItem label title="Printing" />

        <ListItem label title="Portable hotspot" />

        <ListItem label title="VPN" />

        <ListItem
          label
          title="Aeroplane mode"
          after={
            <Toggle
              component="div"
              className="-my-1"
              checked={checked1}
              onChange={() => setChecked1(!checked1)}
            />
          }
        />

        <ListItem label title="Data usage" />
      </List>
    </div>
  )
}

export default ConnectionSharingPanel
