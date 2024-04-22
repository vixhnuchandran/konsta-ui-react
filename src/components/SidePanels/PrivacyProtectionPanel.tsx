import { BlockHeader } from "konsta/react"
import { BlockTitle, List, ListItem } from "konsta/react"
import { MdLocationOn, MdOutlineContacts, MdWifiCalling3 } from "react-icons/md"
import { TbMicrophone } from "react-icons/tb"

const PrivacyProtectionPanel = () => {
  return (
    <div className="flex-col items-start mt-3 pl-2">
      <h1 className="pl-2  font-light text-[34px]">Privacy protection</h1>
      <BlockTitle>Sensitive actions</BlockTitle>
      <BlockHeader className=" opacity-50">
        Manage apps that request sensitive permissions
      </BlockHeader>

      <List dividers={false}>
        <ListItem label title="Location" media={<MdLocationOn />} />
        <ListItem label title="Contacts" media={<MdOutlineContacts />} />
        <ListItem label title="Call logs" media={<MdWifiCalling3 />} />
        <ListItem label title="Microphone" media={<TbMicrophone />} />
      </List>
    </div>
  )
}

export default PrivacyProtectionPanel
