import React from "react";

const RecentPost = () => {
  return (
    <div className="px-3.5 h-full w-1/4 flex-1 ">
      <div className="border-b border-white pb-4 mb-4">
        <div className="mb-5">
          <span className="text-2xl font-sans font-bold text-white ">
            Recent Post
          </span>
        </div>
        <div className="flex gap-3">
          <div>
            <img
              className="w-28 h-20 object-cover"
              src="http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_59-115x85_c.jpg"
              alt=""
            />
          </div>
          <div className="flex-1 ">
            <div className="text-[#bdbdbd] flex-1">
              <span className="uppercase font-semibold">
                Six book-to-film adaptations to get excited about this autumn.
              </span>
            </div>
            <div>
              <span className="text-[#bdbdbd] text-xs">
                April 28, 2022 / 0 Comments
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-white  pb-4 mb-4 ">
        <div className="flex gap-3">
          <div>
            <img
              className="w-28 h-20 object-cover"
              src="http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_57-115x85_c.jpg"
              alt=""
            />
          </div>
          <div className="flex-1 ">
            <div className="text-[#bdbdbd] flex-1">
              <span className="uppercase font-semibold">
                The Beatles: Eight Days a Week – The Touring
              </span>
            </div>
            <div>
              <span className="text-[#bdbdbd] text-xs">
                April 28, 2022 / 0 Comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
