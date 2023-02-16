import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PostItem, WrapperList } from "src/components";
import Mainlayout from "src/Layouts/Mainlayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  console.log(router.asPath)

  const TabsHome = [
    {
      title: "Relevant",
      href: "",
    },
    {
      title: "Latest",
      href: "/latest",
    },
  ];

  return (
    <>
      <Mainlayout>
        <WrapperList>
          <div className="flex items-center mb-3">
            {TabsHome.map((item: any, index: number) => {
              return (
                <>
                  <Link className="block mr-7" href={item.href}>
                    <p className={``}>{item.title}</p>
                  </Link>
                </>
              );
            })}
          </div>
          <PostItem />
        </WrapperList>
      </Mainlayout>
    </>
  );
}
