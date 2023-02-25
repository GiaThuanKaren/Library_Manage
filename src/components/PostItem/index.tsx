import React from "react";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import { ICON, IconRegular } from "src/utils";
function PostItem() {
  return (
    <>
      <div className="my-2 w-full min-h-[100px]  border-[2px] border-[#ececec] rounded-md shadow-sm p-4">
        <LazyLoadImage
          // effect="blur"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--CJz0aV1N--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ducb2d4iomdy10i43g3u.png"
          alt=""
        />
        <div className="flex items-center mt-3">
          <img
            className="w-10 h-10 rounded-full"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--z84t-n32--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1010892/81fb495f-5a6d-4ed3-a61f-8993a237072e.jpg"
          />
        </div>
        <div className="flex justify-center w-full">
          <div className="w-[90%] my-2">
            <p className="font-medium text-xl">
              Create a CLI tool to help bootstraping Flutter project using
              Node.JS - Part 2
            </p>
            <div className="flex items-center justify-between my-2">
              <div className="flex items-center">
                <div className="flex items-center">
                  <ICON icon={IconRegular.faHeart} />
                  <p className="text-xs mx-3">15</p>
                </div>
                <div className="flex items-center mx-3">
                  <ICON icon={IconRegular.faComment} />
                  <p className="text-xs mx-3">Comment</p>
                </div>
              </div>

              <div className="flex items-center">
                <p className="text-xs mx-3">7 min read</p>
                <ICON icon={IconRegular.faBookmark} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostItem;
