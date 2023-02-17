import Link from "next/link";
import React from "react";
import { ICON, IconRegular, IconSolid } from "src/utils";
import LeftSideBar from "../LeftSideBar";

function Header() {
  const [isOpenNav, SetIsOpenNav] = React.useState(false);
  const [isOpenDrawer, SetIsOpenDrawer] = React.useState(false);

  return (
    <>
      <div className=" px-2 sm:px-0 bg-white shadow-md transition-all py-2 fixed left-0 right-0 top-0 z-[2]">
        {isOpenDrawer && (
          <>
            <div className=" bg-white px-5 absolute z-[2] top-0 bottom-0 left-0 h-screen  overflow-y-auto ">
              <div className="w-screen">
                {/* <div className="flex justify-end  p-5">
              <ICON className="" icon={IconSolid.faTimes} />
            </div> */}
                <LeftSideBar />
              </div>
            </div>
          </>
        )}
        <div className="flex items-center justify-between xl:mx-[200px] min-h-[50px] ">
          <div className="hidden md:flex items-center border-[2px] border-[#D4D4D4] px-2 py-1 rounded-md">
            <input
              className="outline-none border-none"
              type="text"
              placeholder="Search"
            />
            <ICON icon={IconSolid.faSearch} />
          </div>
          <ICON className="md:hidden" icon={IconSolid.faBars} />
          <div className="flex items-center relative">
            <ICON className="md:hidden" icon={IconSolid.faSearch} />

            <Link
              href={`/`}
              className="md:flex hidden hover:bg-blue-600 hover:text-white hover:font-medium  border-[2px] border-[#D4D4D4] px-3 py-2 rounded-md items-center justify-center"
            >
              <p>Create Post</p>
            </Link>
            <ICON className="mx-3 text-xl" icon={IconRegular.faBell} />
            <img
              onClick={() => {
                SetIsOpenNav(!isOpenNav);
              }}
              className="w-10 h-10 rounded-full"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--z84t-n32--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1010892/81fb495f-5a6d-4ed3-a61f-8993a237072e.jpg"
              alt="Rounded avatar"
            />
            {isOpenNav && (
              <ul className="shadow-md rounded-md h-[300px] w-screen  sm:w-[250px] bg-white absolute z-[1] top-[calc(100%_+_10px)] right-0 px-2 py-1">
                <li className="p-2 border-b-[2px] border-[#D4D4D4]">
                  <h3 className="font-medium text-sm whitespace-nowrap">
                    Nguyễn Quang Gia Thuận
                  </h3>
                  <h4 className="font-light font-xs">@giathuankaren</h4>
                </li>
                <li className="p-2">Dashboard</li>
                <li className="p-2">Create Post</li>
                <li className="p-2">Reading List</li>
                <li className="p-2">Settings</li>
                <li className="p-2 border-t-[2px] border-[#D4D4D4]">
                  Sign Out
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
