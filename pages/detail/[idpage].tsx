import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Mainlayout from "src/Layouts/Mainlayout";
import { ICON, IconRegular, IconSolid } from "src/utils";

function DetailPage() {
  const [isTop, setisTop] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY);
      if (Math.abs(window.scrollY) == 0) {
        setisTop(true);
      } else setisTop(false);
    });
  }, []);
  return (
    <Mainlayout>
      <div className="flex min-h-screen relative ">
        <div className={`${isTop ? "" : "  "}` + "basis-1/12 "}>
          <div
            className={
              `${isTop ? "" : ""}` +
              "w-full flex flex-col items-center hover:cursor-pointer"
            }
          >
            <div className="my-4">
              <ICON icon={IconRegular.faHeart} />
              <p>20</p>
            </div>
            <div className="my-4">
              <ICON icon={IconRegular.faComment} />
              <p>20</p>
            </div>
            <div className="my-4">
              <ICON icon={IconRegular.faBookmark} />
              <p>20</p>
            </div>
            <div className="my-4">
              <ICON icon={IconSolid.faEllipsis} />
            </div>
          </div>
        </div>
        <div className={"basis-7/12 " + `${isTop ? "" : ""}`}>
          {/* Image Cover */}
          <div className="h-52 w-full overflow-hidden mb-3 ">
            <LazyLoadImage
              // className=" "
              src={`https://res.cloudinary.com/practicaldev/image/fetch/s--dGjx7KaJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5j67c1v94ga0re5qdi6x.png`}
            />
          </div>
          {/* Contend Page */}
          <div className="px-4">
            <div className="flex">
              <img
                onClick={() => {}}
                className="w-10 h-10 rounded-full mr-3"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--z84t-n32--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1010892/81fb495f-5a6d-4ed3-a61f-8993a237072e.jpg"
                alt="Rounded avatar"
              />
              <div>
                <h3 className="font-medium text-base whitespace-nowrap">
                  Nguyễn Quang Gia Thuận
                </h3>
                <p className="text-xs">
                  Posted on Feb 16 • Originally published at
                  codebase.substack.com
                </p>
              </div>
            </div>

            {/* title */}

            <h1 className="font-bold text-4xl my-3">
              Build your next website with Astro
            </h1>
          </div>
        </div>
        <div className={`${isTop ? "" : " "}` + "basis-2/12"}>
          <p>shjdljfdl</p>
        </div>
      </div>
    </Mainlayout>
  );
}

export default DetailPage;
