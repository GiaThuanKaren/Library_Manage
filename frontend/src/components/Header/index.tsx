import Link from "next/link";
import React from "react";
import { ICON, IconRegular, IconSolid } from "src/utils";

function Header() {
  return (
    <>
      <div className="bg-white shadow-md transition-all py-2 fixed left-0 right-0 top-0">
        <div className="flex items-center justify-between xl:mx-[200px] min-h-[50px] ">
          <div className="flex items-center border-[2px] border-[#D4D4D4] px-2 py-1 rounded-md">
            <input
              className="outline-none border-none"
              type="text"
              placeholder="Search"
            />
            <ICON icon={IconSolid.faSearch} />
          </div>

          <div className="flex items-center relative">
            <Link
              href={`/`}
              className="hover:bg-blue-600 hover:text-white hover:font-medium  border-[2px] border-[#D4D4D4] px-3 py-2 rounded-md flex items-center justify-center"
            >
              <p>Create Post</p>
            </Link>
            <ICON className="mx-3 text-xl" icon={IconRegular.faBell} />
            <img
              className="w-10 h-10 rounded-full"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--z84t-n32--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1010892/81fb495f-5a6d-4ed3-a61f-8993a237072e.jpg"
              alt="Rounded avatar"
            ></img>
            <ul className="h-[300px] w-[250px] bg-white absolute z-[1] top-[calc(100%_+_10px)] right-0"></ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
