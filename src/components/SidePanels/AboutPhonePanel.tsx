import { useState } from "react"
import { Card, MenuList, MenuListItem } from "konsta/react"

const AboutPhonePanel = () => {
  const [selected, setSelected] = useState("MIUIVersion")
  return (
    <div className="flex-col mt-3 pl-2">
      <h1 className="pb-3 pl-2 font-light text-[34px]"> AboutPhone</h1>

      <div className="flex  h-full ">
        <div className="flex-1 h-full">
          <Card>
            <img
              src="/miui.svg"
              alt=""
              className="flex justify-center  items-center w-24 mt-4 mb-4 "
            />
            <span className="font-bold text-lg ">MIUI version </span>
            <br />
            MIUI Global
            <br />
            12.0.1
            <br />
            stable
          </Card>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex-1 ">
            <Card header="Device name">Redmi Note 6 pro</Card>
          </div>

          <div className="flex-1 ">
            <Card header="Storage">
              <span className=" font-bold text-3xl ">23.6GB</span>
              <span>/64GB</span>
            </Card>
          </div>
        </div>
      </div>

      <MenuList>
        <MenuListItem
          title="MIUI version"
          active={selected === "MIUIVersion"}
          onClick={() => setSelected("MIUIVersion")}
        />
        <MenuListItem
          title="Andriod version"
          active={selected === "AndriodVersion"}
          onClick={() => setSelected("AndriodVersion")}
        />
        <MenuListItem
          title="Andriod security patch level"
          active={selected === "AndriodSecurityPatchLevel"}
          onClick={() => setSelected("AndriodSecurityPatchLevel")}
        />
        <MenuListItem
          title="All specs"
          active={selected === "AllSpecs"}
          onClick={() => setSelected("AllSpecs")}
        />

        <hr className=" border-t border-gray-100 mr-2" />

        <MenuListItem
          title="Back up and restore"
          active={selected === "BackupAndRestore"}
          onClick={() => setSelected("BackupAndRestore")}
        />
        <MenuListItem
          title="Factory reset"
          active={selected === "FactoryReset"}
          onClick={() => setSelected("FactoryReset")}
        />

        <hr className=" border-t border-gray-100 mr-2" />

        <MenuListItem
          title="Legal information"
          active={selected === "LegalInformation"}
          onClick={() => setSelected("home")}
        />
        <MenuListItem
          title="Important safety information"
          active={selected === "ImportantSafetyInformation"}
          onClick={() => setSelected("ImportantSafetyInformation")}
        />
        <MenuListItem
          title="Verification"
          active={selected === "Verification"}
          onClick={() => setSelected("Verification")}
        />
      </MenuList>
    </div>
  )
}

export default AboutPhonePanel
