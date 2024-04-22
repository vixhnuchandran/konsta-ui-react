import { List, ListItem } from "konsta/react"

const SpecialFeaturesPanel = () => {
  return (
    <div className="flex-col items-start mt-3 pl-2">
      <h1 className="pl-2  font-light text-[34px]">Special features</h1>
      <List dividers={false}>
        <ListItem label title="Game Turbo" />
        <ListItem label title="Video toolbox" />
        <ListItem label title="Quick replies" />
        <ListItem label title="Second space" />
        <ListItem label title="Lite mode" />
      </List>
    </div>
  )
}

export default SpecialFeaturesPanel
