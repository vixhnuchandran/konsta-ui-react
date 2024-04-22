import { RiDualSim1Fill, RiDualSim2Fill } from "react-icons/ri"
import { Card } from "konsta/react"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const SimCardsMobileNetworksPanel = () => {
  return (
    <div className="flex-col mt-3 pl-2">
      <h1 className="pb-3 pl-2 font-light text-[34px]">
        Sim cards & mobile networks
      </h1>
      <div className="grid grid-cols-2 gap-0 md:grid-cols-1 md:gap-0 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col md:flex-row lg:flex-col">
          <div className="flex-1">
            <Card>
              <RiDualSim1Fill size={24} className=" opacity-25 my-2" />
              <span className=" font-medium text-xl ">No SIM card</span> <br />
              <div className="flex flex-wrap items-center">
                <span>Not set</span>
                <MdOutlineKeyboardArrowRight />
              </div>{" "}
            </Card>
          </div>
          <div className="flex-1"></div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-col">
          <Card>
            <RiDualSim2Fill size={24} className=" opacity-25 my-2" />
            <span className=" font-medium text-xl ">No SIM card</span> <br />
            <div className="flex flex-wrap items-center">
              <span>Not set</span>
              <MdOutlineKeyboardArrowRight />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SimCardsMobileNetworksPanel
