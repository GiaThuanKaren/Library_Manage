import React, { useCallback, useEffect, useMemo, useState } from "react";
import isHotkey from "is-hotkey";
import escapeHtml from "escape-html";
import {
  Editable,
  withReact,
  useSlate,
  useSelected,
  useFocused,
  Slate,
  useSlateStatic,
  ReactEditor,
} from "slate-react";
import { Text, Editor, Transforms, createEditor } from "slate";
import { withHistory } from "slate-history";

import { cx, css } from "@emotion/css";
import { jsx } from "slate-hyperscript";
import imageExtensions from "image-extensions";
import isUrl from "is-url";

const HOTKEYS = {
  "mod+enter": "divider",
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];

const DocDivider = ({ attributes, children, element }: any) => {
  const selected = useSelected();
  const focused = useFocused();
  console.log("Selected", selected, "Focused", focused);
  return (
    <div
      {...attributes}
      contentEditable={false}
      className={css`
        box-shadow: ${selected && focused ? "0 0 0 3px #B4D5FF" : "none"};
      `}
    >
      {element.title}
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "lightgray",
        }}
      />
      {children}
    </div>
  );
};

const withDivider = (editor: any) => {
  const { isVoid } = editor;

  editor.isVoid = (element: any) => {
    return element.type === "divider" ? true : isVoid(element);
  };

  return editor;
};
const withImages = (editor) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };

  editor.insertData = (data) => {
    const text = data.getData("text/plain");
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split("/");

        if (mime === "image") {
          reader.addEventListener("load", () => {
            const url = reader.result;
            insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const deserialize = (el, markAttributes = {}) => {
  if (el.nodeType === Node.TEXT_NODE) {
    return jsx("text", markAttributes, el.textContent);
  } else if (el.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  const nodeAttributes = { ...markAttributes };

  // define attributes for text nodes
  switch (el.nodeName) {
    case "strong":
      nodeAttributes.bold = true;
  }

  const children = Array.from(el.childNodes)
    .map((node) => deserialize(node, nodeAttributes))
    .flat();

  if (children.length === 0) {
    children.push(jsx("text", nodeAttributes, ""));
  }

  switch (el.nodeName) {
    case "BODY":
      return jsx("fragment", {}, children);
    case "BR":
      return "\n";
    case "BLOCKQUOTE":
      return jsx("element", { type: "quote" }, children);
    case "P":
      return jsx("element", { type: "paragraph" }, children);
    case "A":
      return jsx(
        "element",
        { type: "link", url: el.getAttribute("href") },
        children
      );
    default:
      return children;
  }
};
const serialize = (node) => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);
    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }
    return string;
  }

  const children = node.children.map((n) => serialize(n)).join("");

  switch (node.type) {
    case "quote":
      return `<blockquote><p>${children}</p></blockquote>`;
    case "paragraph":
      return `<strong>${children}</strong>`;

    default:
      return children;
  }
};
const RichTextExample = ({
  handleFUNC,
  text,
}: {
  text: string;
  handleFUNC: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [value, setValue] = useState(() => {
    const html = localStorage.getItem("slateContent");

    const document = new DOMParser().parseFromString(
      JSON.parse(html),
      "text/html"
    );
    console.log(deserialize(document.body));
    return deserialize(document.body);
  });
  const renderElement = (props) => <Element {...props} />;
  const renderLeaf = (props) => <Leaf {...props} />;

  const editor = useMemo(
    () => withImages(withDivider(withHistory(withReact(createEditor())))),
    []
  );

  useEffect(() => {
    localStorage.setItem(
      "slateContent",
      JSON.stringify(
        serialize({
          children: [
            {
              type: "paragraph",
              children: [
                { text: "An opening paragraph with a " },
                {
                  type: "link",
                  url: "https://example.com",
                  children: [{ text: "link" }],
                },
                { text: " in it." },
              ],
            },
            {
              type: "quote",
              children: [{ text: "A wise quote." }],
            },
            {
              type: "paragraph",
              children: [{ text: "A closing paragraph!" }],
            },
          ],
          // `Editor` objects also have other properties that are omitted here...
        })
      )
    );
  }, [value]);
  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      // onChange={(value) => {
      //   // handleFUNC(value);
      //   const content = JSON.stringify(value);
      //   localStorage.setItem("content", content);
      // }}
    >
      <>{console.log("Re- Render")}</>
      <Toolbar>
        <MarkButton format="bold" icon="format_bold" />
        <MarkButton format="italic" icon="format_italic" />
        <MarkButton format="underline" icon="format_underlined" />
        <MarkButton format="code" icon="code" />
        <BlockButton format="heading-one" icon="looks_one" />
        <BlockButton format="heading-two" icon="looks_two" />
        <BlockButton format="block-quote" icon="format_quote" />
        <DividerButton editor={editor} />
        <InsertImageButton />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault();
              const mark = HOTKEYS[hotkey];
              toggleMark(editor, mark);
            }
          }
        }}
      />
    </Slate>
  );
};
const Image = ({ attributes, children, element }: any) => {
  const editor = useSlateStatic();
  const path = ReactEditor.findPath(editor, element);

  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes}>
      {children}
      <div
        contentEditable={false}
        className={css`
          position: relative;
        `}
      >
        <img
          src={element.url}
          className={css`
            display: block;
            max-width: 100%;
            max-height: 20em;
            box-shadow: ${selected && focused ? "0 0 0 3px #B4D5FF" : "none"};
          `}
        />
        <Button
          active
          onClick={() => Transforms.removeNodes(editor, { at: path })}
          className={css`
            display: ${selected && focused ? "inline" : "none"};
            position: absolute;
            top: 0.5em;
            left: 0.5em;
            background-color: white;
          `}
        >
          <Icon>delete</Icon>
        </Button>
      </div>
    </div>
  );
};
type ImageElement = {
  type: "image";
  url: string;
  children: EmptyText[];
};

type EmptyText = {
  text: string;
};

const insertImage = (editor, url) => {
  const text = { text: "" };
  const image: ImageElement = { type: "image", url, children: [text] };
  Transforms.insertNodes(editor, image);
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => LIST_TYPES.includes(n.type),
    split: true,
  });

  Transforms.setNodes(editor, {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === format,
  });

  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "bart-doc":
      return <div {...attributes}>{children}</div>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "divider":
      return (
        <DocDivider
          attributes={attributes}
          children={children}
          element={element}
        />
      );
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    case "image":
      return (
        <Image attributes={attributes} children={children} element={element} />
      );
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

const BlockButton = ({ format, icon }: any) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};
const InsertImageButton = () => {
  const editor = useSlateStatic();
  return (
    <Button
      onMouseDown={(event) => {
        event.preventDefault();
        const url = window.prompt("Enter the URL of the image:");
        if (url && !isImageUrl(url)) {
          alert("URL is not an image");
          return;
        }
        url && insertImage(editor, url);
      }}
    >
      <Icon>image</Icon>
    </Button>
  );
};
const isImageUrl = (url) => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split(".").pop();
  return imageExtensions.includes(ext);
};
const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};
const DividerButton = ({ editor }: { editor: Editor }) => {
  const insertDivider = () => {
    const divider = { type: "divider", children: [{ text: "" }] };
    const paragraph = { type: "paragraph", children: [{ text: "" }] };
    Transforms.insertNodes(editor, divider);
    Transforms.insertNodes(editor, paragraph);
  };

  const isActive = () => {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "divider",
    });
    return !!match;
  };

  return (
    <button
      className={isActive() ? "active" : ""}
      onMouseDown={(event) => {
        event.preventDefault();
        insertDivider();
      }}
    >
      Divider
    </button>
  );
};

// const initialValue = [
//   {
//     type: "bart-doc",
//     bartId: "abcd",
//     children: [
//       { type: "divider", title: "test", children: [{ text: "" }] },
//       {
//         type: "paragraph",
//         children: [
//           { text: "This is editable " },
//           { text: "rich", bold: true },
//           { text: " text, " },
//           { text: "much", italic: true },
//           { text: " better than a " },
//           { text: "<textarea>", code: true },
//           { text: "!" },
//         ],
//       },
//       {
//         type: "paragraph",
//         children: [
//           {
//             text: "You can delete images with the cross in the top left. Try deleting this sheep:",
//           },
//         ],
//       },
//       {
//         type: "image",
//         url: "https://source.unsplash.com/zOwZKwZOZq8",
//         children: [{ text: "" }],
//       },
//     ],
//   },
//   {
//     type: "bart-doc",
//     bartId: "1234",
//     children: [
//       { type: "divider", title: "test 2", children: [{ text: "" }] },
//       {
//         type: "paragraph",
//         children: [
//           {
//             text: "Since it's rich text, you can do things like turn a selection of text ",
//           },
//           { text: "bold", bold: true },
//           {
//             text: ", or add a semantically rendered block quote in the middle of the page, like this:",
//           },
//         ],
//       },
//     ],
//   },
// ];

export default RichTextExample;

const Button = React.forwardRef(
  ({ className, active, reversed, ...props }: any, ref): any => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed
            ? active
              ? "white"
              : "#aaa"
            : active
            ? "black"
            : "#ccc"};
        `
      )}
    />
  )
);

const Icon = React.forwardRef(({ className, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    className={cx(
      "material-icons",
      className,
      css`
        font-size: 18px;
        vertical-align: text-bottom;
      `
    )}
  />
));

const Menu = React.forwardRef(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        & > * {
          display: inline-block;
        }

        & > * + * {
          margin-left: 15px;
        }
      `
    )}
  />
));

const Toolbar = React.forwardRef(({ className, ...props }, ref): any => (
  <Menu
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        position: sticky;
        top: 10px;
        right: 0px;
        z-index: 2;
        padding: 1px 18px 17px;
        margin: 0 -20px;
        border-bottom: 2px solid #eee;
        margin-bottom: 20px;
      `
    )}
  ></Menu>
));
