import { List, ListItem } from "konsta/react"

const AppsPanel = () => {
  return (
    <div className="flex-col items-start mt-3 pl-2">
      <h1 className="pl-2  font-light text-[34px]">Apps</h1>{" "}
      <List dividers={false}>
        <ListItem label title="System app settings" />
        <ListItem label title="Manage apps" />
        <ListItem label title="Dual apps" />

        <ListItem label title="Permissions" />
        <ListItem label title="App lock" />
      </List>
    </div>
  )
}

export default AppsPanel
