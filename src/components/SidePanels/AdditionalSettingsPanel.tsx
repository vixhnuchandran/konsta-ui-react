import { List, ListItem } from "konsta/react"

const AdditionalSettingsPanel = () => {
  return (
    <div className="flex-col items-start mt-3 pl-2">
      <h1 className="pl-2  font-light text-[34px]">Additional settings</h1>
      <List dividers={false}>
        <ListItem label title="Date & time" />
        <ListItem label title="Language $ input" />
        <ListItem label title="Region" />

        <hr className=" border-t border-gray-100 mr-2" />

        <ListItem label title="Full screen display" />
        <ListItem label title="Button shortcuts" />
        <ListItem label title="Notification light" />
        <ListItem label title="Quick ball" />
        <ListItem label title="One-handed mode" />
        <ListItem label title="Accessibility" />

        <hr className=" border-t border-gray-100 mr-2" />

        <ListItem label title="Enterprise mode" />
        <ListItem label title="Developer options" />
      </List>
    </div>
  )
}

export default AdditionalSettingsPanel
