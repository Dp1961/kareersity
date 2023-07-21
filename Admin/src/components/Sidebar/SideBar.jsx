import { NavLink } from "react-router-dom";
import { FaBars, FaQuora, FaUserEdit } from "react-icons/fa";
import { BiCategory , BiBookOpen, BiUser, BiCommentAdd } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlineShopping, AiOutlineUnorderedList } from "react-icons/ai";
import { BsCardList, BsFiles } from "react-icons/bs";

import { RiAdminLine } from "react-icons/ri";
import { PiStudentBold, PiNotepadBold} from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdRateReview, MdOutlineSettings } from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import logo from "../../assets/images/wkareersity-logo.png";


import {
  SettingOutlined,
} from "@ant-design/icons";


const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <AiOutlineDashboard />,
  },
  {
    path: "/category",
    name: "Category",
    icon: <BiCategory />,
  },
   
  
  {
    path: "/Courses",
    name: "Courses",
    icon: <BiBookOpen />,
    subRoutes : [
      {
        path : "/courses",
        name : "Manage Courses",
        icon : <AiOutlineUnorderedList />,
      },
      {
        path : "/Add_course",
        name : "Add New Courses",
        icon : <BiCommentAdd />,
      },
      {
        path : "/course_bundle",
        name : "Manage Courses Bundle",
        icon : <BsFiles />,
      }
    ]
  },
  {
    path: "/list_to_experts",
    name: "List to experts",
    icon: <BsCardList />,
  },
  {
    path: "/learners",
    name: "Learners",
    icon: <PiStudentBold />,
  },
  {
    path: "/educators",
    name: "Educators",
    icon: <LiaChalkboardTeacherSolid />,
  },
  {
    path: "/blogs",
    name: "Blogs",
    icon: <PiNotepadBold />,
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    icon: <MdRateReview />,
  },
  {
    path: "/faq",
    name: "FAQ",
    icon: <FaQuora />,
  },
  {
    path: "/purchase_list",
    name: "Pushase History List",
    icon: <AiOutlineShopping/>,
  },

  
  {
    path: "/user_managements",
    name: "User Managements",
    icon: <BiUser />,
    subRoutes : [
      {
        path : "/admin_user",
        name : "Admin User",
        icon : <RiAdminLine />,
      },
      {
        path : "/admin_role",
        name : "Admin Role",
        icon : <FaUserEdit />,
      }
    ]
  }, 

  {
    path: "/configure_settings",
    name: "Configuration Settings",
    icon: <MdOutlineSettings />,
  },
  // <Topbar />,
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.8,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "300px" : "45px",
            transition: {
              duration: 0.3,
              type: "spring",
              damping: 18,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="show"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <img src={logo} alt="logo" className="img-fluid" />
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} className="toggleBtn" />
            </div>
          </div>

          <section className={`routes ${!isOpen ? "" : "add-gap"}`}>
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    // showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={`link_text ${!isOpen ? "" : "add-gap"}`}
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
