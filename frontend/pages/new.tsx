import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Mainlayout from "src/Layouts/Mainlayout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import dynamic from "next/dynamic";
import { CreateNewPost } from "src/service/api";
interface Prop {
  text: string;
  handleFUNC: React.Dispatch<React.SetStateAction<string>>;
}
const Editor = dynamic(() => import("../src/components/Editor/index"), { ssr: false });


const Edit: FC<Prop> = function ({ handleFUNC, text }) {
  const InputEle = React.useRef<any>();
  const [ImageUrl, SetImageurl] = React.useState("");

  React.useEffect(() => { }, []);
  const handleCreatePost = async function () {
    try {
      let result = await CreateNewPost()
      console.log(result)
    } catch (e) {
      throw e
    }
  }
  return (
    <>
      <div className="h-20">
        <div className="h-full w-full">
          <img src={ImageUrl} alt={ImageUrl} />
        </div>
      </div>
      <Editor onChange={() => { }} value={""} />
      <input type="file" name="tenfile" id="" />
      <div onClick={handleCreatePost} className="flex justify-end">
        <p
          className="cursor-pointer md:flex hidden hover:bg-blue-600 hover:text-white hover:font-medium  border-[2px] border-[#D4D4D4] px-3 py-2 rounded-md items-center justify-center"
        >Save</p>
      </div>
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
