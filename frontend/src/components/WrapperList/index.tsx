import Link from "next/link";
import React from "react";
interface SideBarType {
  title: string;
  icon: JSX.Element;
  href: string;
}
function WrapperList({ children }: { children: any }) {
  const ListSideBarItem: SideBarType[] = [
    {
      title: "Home",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44 44"
          width={24}
          height={24}
        >
          <g className="nc-icon-wrapper">
            <path
              fill="#A0041E"
              d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
            />
            <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z" />
            <path fill="#FFCC4D" d="M22 20h1v16h-1z" />
            <path
              fill="#66757F"
              d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"
            />
            <path
              fill="#66757F"
              d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"
            />
            <path fill="#C1694F" d="M14 30h4v6h-4z" />
            <path
              fill="#55ACEE"
              d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"
            />
            <path
              fill="#5C913B"
              d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"
            />
          </g>
        </svg>
      ),
    },
    {
      title: "Videos",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44 44"
          width={24}
          height={24}
        >
          <g transform="translate(4 4)">
            <path
              fill="#31373D"
              d="M34.074 18l-4.832 3H28v-4c0-.088-.02-.169-.026-.256C31.436 15.864 34 12.735 34 9a8 8 0 00-16.001 0c0 1.463.412 2.822 1.099 4H14.92c.047-.328.08-.66.08-1a7 7 0 10-14 0 6.995 6.995 0 004 6.317V29a4 4 0 004 4h15a4 4 0 004-4v-3h1.242l4.832 3H35V18h-.926zM28.727 3.977a5.713 5.713 0 012.984 4.961L28.18 8.35a2.276 2.276 0 00-.583-.982l1.13-3.391zm-.9 6.342l3.552.592a5.713 5.713 0 01-4.214 3.669 3.985 3.985 0 00-1.392-1.148l.625-2.19a2.425 2.425 0 001.429-.923zM26 3.285c.282 0 .557.027.828.067l-1.131 3.392c-.404.054-.772.21-1.081.446L21.42 5.592A5.703 5.703 0 0126 3.285zM20.285 9c0-.563.085-1.106.236-1.62l3.194 1.597-.002.023c0 .657.313 1.245.771 1.662L23.816 13h-1.871a5.665 5.665 0 01-1.66-4zm-9.088-.385A4.64 4.64 0 0112.667 12c0 .344-.043.677-.113 1H10.1c.145-.304.233-.641.233-1a2.32 2.32 0 00-.392-1.292l1.256-2.093zM8 7.333c.519 0 1.01.105 1.476.261L8.22 9.688c-.073-.007-.145-.022-.22-.022a2.32 2.32 0 00-1.292.392L4.615 8.803A4.64 4.64 0 018 7.333zM3.333 12c0-.519.105-1.01.261-1.477l2.095 1.257c-.007.073-.022.144-.022.22 0 .75.36 1.41.91 1.837a3.987 3.987 0 00-1.353 1.895C4.083 14.881 3.333 13.533 3.333 12z"
            />
            <circle fill="#8899A6" cx={24} cy={19} r={2} />
            <circle fill="#8899A6" cx={9} cy={19} r={2} />
            <path
              fill="#8899A6"
              d="M24 27a2 2 0 00-2-2H11a2 2 0 00-2 2v6a2 2 0 002 2h11a2 2 0 002-2v-6z"
            />
          </g>
        </svg>
      ),
    },
  ];
  return (
    <>
      <div className="flex items-center ">
        <div className="basis-1/4">
          {ListSideBarItem.map((item: SideBarType, index: number) => {
            return (
              <>
                <Link href={item.href} className="block h-12 w-full">
                  <div className="h-full mt-3 flex items-center">
                    <div className="mx-2">{item.icon}</div>

                    <p className="text-base">{item.title}</p>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
        <div className="basis-2/4 h-32">{children}</div>
        <div className="basis-1/4 h-32"></div>
      </div>
    </>
  );
}

export default WrapperList;
