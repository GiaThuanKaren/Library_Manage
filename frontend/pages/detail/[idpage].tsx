import React from "react";
import Mainlayout from "src/Layouts/Mainlayout";
import { ICON, IconRegular } from "src/utils";

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
      <div className="flex h-[200vh] relative ">
        <div className={`${isTop ? "" : "  "}` + "basis-1/12 "}>
          <div
            className={
              `${isTop ? "" : ""}` + "w-full flex flex-col items-center"
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
          </div>
        </div>
        <div className={"basis-6/12 bg-slate-300" + `${isTop ? "" : ""}`}></div>
        <div className={`${isTop ? "" : " "}` + "basis-3/12"}>
          <p>shjdljfdl</p>
        </div>
      </div>
    </Mainlayout>
  );
}

export default DetailPage;
