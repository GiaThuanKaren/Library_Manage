import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Mainlayout from "src/Layouts/Mainlayout";

const Edit: FC = function () {
  const InputEle = React.useRef<any>();
  const [ImageUrl, SetImageurl] = React.useState("");
  React.useEffect(() => {}, []);
  return (
    <>
      <div className="min-h-24 max-h-36 w-full overflow-hidden ">
        <LazyLoadImage
          className="h-full object-fill"
          src={ImageUrl ? ImageUrl : ""}
        />
      </div>
      <div
        className="w-max px-3 py-2 border-[2px] border-b-rose-300 rounded-md hover:cursor-pointer font-medium"
        onClick={async () => {
          await InputEle.current.click();

          console.log();
        }}
      >
        Add a cover image
      </div>
      <input
        onChange={(e) => {
          console.log(e.target.files?.item(0));
          SetImageurl(URL.createObjectURL(e.target.files?.item(0)).toString());
        }}
        ref={InputEle}
        placeholder="Add a cover image"
        type={"file"}
        className="hidden w-max px-3 py-2 border-[2px] border-b-rose-300 rounded-md"
      />
      <input
        type="text"
        className="font-medium text-3xl outline-none border-none my-3"
        placeholder={`${"New post title here....."}`}
      />
      <textarea aria-multiline  className="block w-full outline-none border-none min-h-[30vh] focus:outline-none"></textarea>
    </>
  );
};

const Review: FC = function () {
  return <></>;
};

function CreateNew() {
  const [chooseTab, setchooseTab] = React.useState("edit");

  const ArrTab = [
    {
      title: "edit",
    },
    {
      title: "review",
    },
  ];

  return (
    <>
      <Mainlayout>
        <div className="flex items-center justify-center">
          {ArrTab.map((item: any, index: number) => {
            return (
              <>
                <p
                  onClick={() => {
                    setchooseTab(item.title);
                  }}
                  className={
                    "mx-3 hover:cursor-pointer capitalize " +
                    `${item.title === chooseTab ? "font-medium" : ""}`
                  }
                >
                  {item.title}
                </p>
              </>
            );
          })}
        </div>
        <div className="relative h-[70vh] overflow-y-auto">
          {chooseTab === "edit" ? <Edit /> : <Review />}
        </div>
      </Mainlayout>
    </>
  );
}

export default CreateNew;
