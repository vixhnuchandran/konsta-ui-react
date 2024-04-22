import { useState } from "react"
import { List, ListItem, Toggle } from "konsta/react"
function HomeScreenPanel() {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  const [checked5, setChecked5] = useState(false)
  const [checked6, setChecked6] = useState(false)
  return (
    <div className="flex-col mt-3 pl-2">
      <h1 className="pb-3 pl-2 font-light text-[34px]">Home Screen</h1>
      <List dividers={false}>
        <ListItem label title="Default launcher" />
        <ListItem label title="Home screen" />

        <ListItem
          label
          title="App vault"
          after={
            <Toggle
              component="div"
              className="-my-1"
              checked={checked1}
              onChange={() => setChecked1(!checked1)}
            />
          }
        />
        <hr className=" border-t border-gray-100 mr-2" />

        <ListItem
          label
          title="Fill cells of uninstalled apps"
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
          title="Lock Home screen layout"
          after={
            <Toggle
              component="div"
              className="-my-1 k-color-brand-green"
              checked={checked3}
              onChange={() => setChecked3(!checked3)}
            />
          }
        />

        <ListItem label title="Icon size" />
        <ListItem label title="Home screen layout" />

        <ListItem
          label
          title="Global icon animations"
          after={
            <Toggle
              component="div"
              className="-my-1 k-color-brand-yellow"
              checked={checked4}
              onChange={() => setChecked4(!checked4)}
            />
          }
        />

        <hr className=" border-t border-gray-100 mr-2" />

        <ListItem
          label
          title="Show memory status"
          after={
            <Toggle
              component="div"
              className="-my-1 k-color-brand-yellow"
              checked={checked5}
              onChange={() => setChecked5(!checked5)}
            />
          }
        />
        <ListItem label title="Blur app previews" />

        <ListItem
          label
          title="Show suggestions"
          after={
            <Toggle
              component="div"
              className="-my-1 k-color-brand-yellow"
              checked={checked6}
              onChange={() => setChecked6(!checked6)}
            />
          }
        />
      </List>
    </div>
  )
}

export default HomeScreenPanel
