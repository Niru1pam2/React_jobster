import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";

const links = [
  {
    id: 1,
    text: "Stats",
    icon: <IoBarChartSharp />,
    path: "/",
  },
  {
    id: 2,
    text: "All Jobs",
    icon: <MdQueryStats />,
    path: "/all-jobs",
  },
  {
    id: 3,
    text: "Add Jobs",
    icon: <FaWpforms />,
    path: "/add-job",
  },
  {
    id: 4,
    text: "Profile",
    icon: <ImProfile />,
    path: "/profile",
  },
];

export default links;
