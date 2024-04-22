import { useState } from "react"
import { List, ListItem, Toggle, Range } from "konsta/react"

function DisplayPanel() {
  const [checked1, setChecked1] = useState(false)
  const [volume1, setVolume1] = useState(50)
  const [size, setSize] = useState(30)

  return (
    <div className="flex-col mt-3 pl-2">
      <h1 className=" pl-2 font-light text-[34px]">Display</h1>
      <List dividers={false}>
        <ListItem
          title={"Brightness"}
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
        <ListItem label title="Reading mode" />
        <ListItem label title="Colour scheme" />

        <ListItem label title="Dark mode" />

        <hr className=" border-t border-gray-100 mr-2" />
        <ListItem label title="System font" />
        <ListItem
          label
          title={"Textsize"}
          innerClassName="flex  space-x-4 rtl:space-x-reverse"
          innerChildren={
            <>
              <Range
                value={size}
                step={20}
                onChange={e => setSize(e.target.value)}
              />
            </>
          }
        />
        <hr className=" border-t border-gray-100 mr-2" />
        <ListItem label title="Control centre & Notification shade" />
        <ListItem label title="Fullscreen mode" />
        <ListItem
          label
          title="Auto-rotate screen"
          after={
            <Toggle
              component="div"
              className="-my-1"
              checked={checked1}
              onChange={() => setChecked1(!checked1)}
            />
          }
        />
      </List>
    </div>
  )
}

export default DisplayPanel
