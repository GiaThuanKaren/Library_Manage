import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Mainlayout from "src/Layouts/Mainlayout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
interface Prop {
  text: string;
  handleFUNC: React.Dispatch<React.SetStateAction<string>>;
}
const Edit: FC<Prop> = function ({ handleFUNC, text }) {
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
          const files: FileList | null = e.target.files;

          SetImageurl(URL.createObjectURL(files?.item(0) as Blob));
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
      <textarea
        value={text}
        onChange={(e) => {
          handleFUNC(e.target.value);
        }}
        aria-multiline
        className="block w-full outline-none border-none min-h-[30vh] focus:outline-none"
      ></textarea>
      <div className="text-black"></div>
    </>
  );
};

const Review: FC<Prop> = function ({ text }) {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;
  return (
    <>
      {text ? (
        <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
      ) : (
        <>
          <h1 className="text-center">Nothing To Review </h1>
        </>
      )}
    </>
  );
};

function CreateNew() {
  const [chooseTab, setchooseTab] = React.useState("edit");
  const [textMarkDown, SettextMarkDown] = React.useState("");
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
          {chooseTab === "edit" ? (
            <Edit handleFUNC={SettextMarkDown} text={textMarkDown} />
          ) : (
            <Review handleFUNC={SettextMarkDown} text={textMarkDown} />
          )}
        </div>
      </Mainlayout>
    </>
  );
}

export default CreateNew;
