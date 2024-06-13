import { IoMdSettings } from "react-icons/io";
import { AiFillDatabase } from "react-icons/ai";

import { MdOutlineDataObject } from "react-icons/md";


const SettingsIcon = (
  <IoMdSettings className="ios:w-7 material:w-6 text-sky-500 mb-0" />
);
const DataIcon = (
  <AiFillDatabase className="ios:w-7 material:w-6 text-orange-500" />
);

const ObjectIcon = (
  <MdOutlineDataObject className="ios:w-7 material:w-6 text-orange-500" />
);


export {
  SettingsIcon,
  DataIcon,
  ObjectIcon
};
