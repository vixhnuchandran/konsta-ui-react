import { useState } from "react"

import { MenuItem } from "../types"
import SearchBarComp from "../components/SearchBarComp"
import TitleComp from "../components/TitleComp"
import MenuListComp from "../components/MenuListComp"

function HomePage() {
  const [openMenuItem, setOpenMenuItem] = useState<null | string>(null)

  const handleMenuItemClick = (menuItem: MenuItem | null) => {
    setOpenMenuItem(prevOpenMenuItem =>
      prevOpenMenuItem === menuItem ? null : menuItem
    )
  }

  return (
    <>
      <TitleComp />
      <SearchBarComp />
      <MenuListComp
        openMenuItem={openMenuItem}
        handleMenuItemClick={handleMenuItemClick}
      />
    </>
  )
}
export default HomePage
