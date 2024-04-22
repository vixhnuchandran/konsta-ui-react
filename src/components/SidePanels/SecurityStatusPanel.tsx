import { MenuList, MenuListItem } from "konsta/react"

const SecurityStatusPanel = () => {
  return (
    <div className="flex-col mt-3 pl-2">
      <h1 className=" pl-2 font-light text-[34px]">Security status</h1>
      <div>
        <MenuList>
          <MenuListItem title="Find device" />
          <MenuListItem title="Security update" />
          <MenuListItem title="Google Play Protect" />
        </MenuList>
      </div>
    </div>
  )
}

export default SecurityStatusPanel
