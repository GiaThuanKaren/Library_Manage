import Link from "next/link";
import React from "react";
import { ICON, IconBrands } from "src/utils";

interface SideBarItem {
  title: string;
  icon: JSX.Element;
  href: string;
}

interface SideBarList {
  title: string;
  children: SideBarItem[];
}

function WrapperList({ children }: { children: any }) {
  const ListSideBarItem: SideBarList[] = [
    {
      title: "",
      children: [
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
      ],
    },
    {
      title: "Others",
      children: [
        {
          title: "Code For Product",
          href: "",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              width={24}
              height={24}
            >
              <g className="nc-icon-wrapper">
                <path
                  fill="#FFDB5E"
                  d="M38.956 21.916c0-.503-.12-.975-.321-1.404-1.341-4.326-7.619-4.01-16.549-4.221-1.493-.035-.639-1.798-.115-5.668.341-2.517-1.282-6.382-4.01-6.382-4.498 0-.171 3.548-4.148 12.322-2.125 4.688-6.875 2.062-6.875 6.771v10.719c0 1.833.18 3.595 2.758 3.885 2.499.281 1.937 2.062 5.542 2.062h18.044a3.337 3.337 0 003.333-3.334c0-.762-.267-1.456-.698-2.018 1.02-.571 1.72-1.649 1.72-2.899 0-.76-.266-1.454-.696-2.015 1.023-.57 1.725-1.649 1.725-2.901 0-.909-.368-1.733-.961-2.336a3.311 3.311 0 001.251-2.581z"
                />
                <path
                  fill="#EE9547"
                  d="M27.02 25.249h8.604c1.17 0 2.268-.626 2.866-1.633a.876.876 0 00-1.506-.892 1.588 1.588 0 01-1.361.775h-8.81c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583H32.7a.875.875 0 000-1.75h-5.888a3.337 3.337 0 00-3.333 3.333c0 1.025.475 1.932 1.205 2.544a3.32 3.32 0 00-.998 2.373c0 1.028.478 1.938 1.212 2.549a3.318 3.318 0 00.419 5.08 3.305 3.305 0 00-.852 2.204 3.337 3.337 0 003.333 3.333h5.484a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.594 1.594 0 01-1.363.776h-5.484c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583h6.506a3.35 3.35 0 002.867-1.633.875.875 0 10-1.504-.894 1.572 1.572 0 01-1.363.777h-7.063a1.585 1.585 0 010-3.167h8.091a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.573 1.573 0 01-1.363.776H27.02a1.585 1.585 0 010-3.167z"
                />
              </g>
            </svg>
          ),
        },
        {
          title: "Privacy",
          href: "",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              width={24}
              height={24}
            >
              <g transform="translate(4 4)">
                <circle fill="#FFCC4D" cx={18} cy={18} r={18} />
                <path
                  fill="#664500"
                  d="M27.335 23.629a.501.501 0 00-.635-.029c-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 10-.729.657C8.7 24.472 11.788 29.5 18 29.5s9.301-5.028 9.429-5.243a.499.499 0 00-.094-.628z"
                />
                <path
                  fill="#65471B"
                  d="M18 26.591c-.148 0-.291-.011-.438-.016v4.516h.875v-4.517c-.145.005-.289.017-.437.017z"
                />
                <path
                  fill="#FFF"
                  d="M22 26c.016-.004-1.45.378-2.446.486-.366.042-.737.076-1.117.089v4.517H20c1.1 0 2-.9 2-2V26zm-8 0c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089v4.517H16c-1.1 0-2-.9-2-2V26z"
                />
                <path
                  fill="#65471B"
                  d="M27.335 23.629a.501.501 0 00-.635-.029c-.03.022-2.259 1.668-5.411 2.47-.443.113-1.864.43-3.286.431-1.424 0-2.849-.318-3.292-.431-3.152-.802-5.381-2.448-5.411-2.47a.501.501 0 00-.729.657c.097.162 1.885 3.067 5.429 4.481v-1.829c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089.146.005.289.016.437.016.148 0 .291-.011.438-.016.38-.013.751-.046 1.117-.089.996-.108 2.462-.49 2.446-.486v1.829c3.544-1.414 5.332-4.319 5.429-4.481a.5.5 0 00-.095-.628zm-.711-9.605c0 1.714-.938 3.104-2.096 3.104-1.157 0-2.096-1.39-2.096-3.104s.938-3.104 2.096-3.104c1.158 0 2.096 1.39 2.096 3.104zm-17.167 0c0 1.714.938 3.104 2.096 3.104 1.157 0 2.096-1.39 2.096-3.104s-.938-3.104-2.096-3.104c-1.158 0-2.096 1.39-2.096 3.104z"
                />
                <path
                  fill="#292F33"
                  d="M34.808 9.627c-.171-.166-1.267.274-2.376-.291-2.288-1.166-8.07-2.291-11.834.376-.403.285-2.087.333-2.558.313-.471.021-2.155-.027-2.558-.313-3.763-2.667-9.545-1.542-11.833-.376-1.109.565-2.205.125-2.376.291-.247.239-.247 1.196.001 1.436.246.239 1.477.515 1.722 1.232.247.718.249 4.958 2.213 6.424 1.839 1.372 6.129 1.785 8.848.238 2.372-1.349 2.289-4.189 2.724-5.881.155-.603.592-.907 1.26-.907s1.105.304 1.26.907c.435 1.691.351 4.532 2.724 5.881 2.719 1.546 7.009 1.133 8.847-.238 1.965-1.465 1.967-5.706 2.213-6.424.245-.717 1.476-.994 1.722-1.232.248-.24.249-1.197.001-1.436zm-20.194 3.65c-.077 1.105-.274 3.227-1.597 3.98-.811.462-1.868.743-2.974.743h-.001c-1.225 0-2.923-.347-3.587-.842-.83-.619-1.146-3.167-1.265-4.12-.076-.607-.28-2.09.388-2.318 1.06-.361 2.539-.643 4.052-.643.693 0 3.021.043 4.155.741 1.005.617.872 1.851.829 2.459zm16.278-.253c-.119.954-.435 3.515-1.265 4.134-.664.495-2.362.842-3.587.842h-.001c-1.107 0-2.163-.281-2.975-.743-1.323-.752-1.52-2.861-1.597-3.966-.042-.608-.176-1.851.829-2.468 1.135-.698 3.462-.746 4.155-.746 1.513 0 2.991.277 4.052.638.668.228.465 1.702.389 2.309z"
                />
              </g>
            </svg>
          ),
        },
        {
          title: "Term Of Use",
          href: "",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              width={24}
              height={24}
            >
              <g transform="translate(4 4)">
                <ellipse
                  fill="#F5F8FA"
                  cx={8.828}
                  cy={18}
                  rx={7.953}
                  ry={13.281}
                />
                <path
                  fill="#E1E8ED"
                  d="M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969 17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18 12.8 5.469 8.828 5.469z"
                />
                <circle fill="#8899A6" cx={6.594} cy={18} r={4.96} />
                <circle fill="#292F33" cx={6.594} cy={18} r={3.565} />
                <circle fill="#F5F8FA" cx={7.911} cy={15.443} r={1.426} />
                <ellipse
                  fill="#F5F8FA"
                  cx={27.234}
                  cy={18}
                  rx={7.953}
                  ry={13.281}
                />
                <path
                  fill="#E1E8ED"
                  d="M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531 0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18 31.206 5.469 27.234 5.469z"
                />
                <circle fill="#8899A6" cx={25} cy={18} r={4.96} />
                <circle fill="#292F33" cx={25} cy={18} r={3.565} />
                <circle fill="#F5F8FA" cx={26.317} cy={15.443} r={1.426} />
              </g>
            </svg>
          ),
        },
      ],
    },
  ];

  const TabsTag: {
    title: string;
  }[] = [
    {
      title: "#react",
    },
    {
      title: "#nextjs",
    },
    {
      title: "#django",
    },
    {
      title: "#tailwind",
    },
    {
      title: "#lavarel",
    },
    {
      title: "#php",
    },
    {
      title: "#html css",
    },
    {
      title: "#linux",
    },
  ];

  return (
    <>
      <div className="flex ">
        <div className="hidden md:block basis-1/5 px-4">
          {ListSideBarItem.map((item: SideBarList, index: number) => {
            return (
              <>
                <h3
                  key={`${index}${item.title}`}
                  className="font-medium text-lg mt-5"
                >
                  {item.title}
                </h3>
                {item.children.map((item1: SideBarItem, index1: number) => {
                  return (
                    <>
                      <Link
                        key={`${index1}${item1.title}`}
                        href={item1.href}
                        className="block h-12 w-full"
                      >
                        <div className="h-full mt-3 flex items-center">
                          <div className="mx-2 ">{item1.icon}</div>
                          <p className="text-base">{item1.title}</p>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </>
            );
          })}
          <div className="flex items-center justify-between flex-nowrap my-3">
            <ICON className="text-xl" icon={IconBrands.faTwitter} />
            <ICON className="text-xl" icon={IconBrands.faFacebook} />
            <ICON className="text-xl" icon={IconBrands.faGithub} />
            <ICON className="text-xl" icon={IconBrands.faInstagram} />
          </div>
          <div className="my-5">
            <h3 className="font-medium text-sm">Top Tags</h3>
            <div className="h-[200px] max-h-[200px] overflow-y-auto">
              {TabsTag.map(
                (
                  item: {
                    title: string;
                  },
                  index: number
                ) => {
                  return (
                    <>
                      <p className="my-3">{item.title}</p>
                    </>
                  );
                }
              )}
            </div>
          </div>
          {/* {ListSideBarItem.map((item: SideBarType, index: number) => {
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
          })} */}
        </div>
        <div className=" lg:basis-3/5 h-32">{children}</div>
        <div className="hidden lg:block basis-1/5 h-32 bg-green-300"></div>
      </div>
    </>
  );
}

export default WrapperList;
