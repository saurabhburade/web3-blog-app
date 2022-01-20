import React, { ReactElement } from "react";
import {MdAccountCircle,MdTimelapse} from "react-icons/md"

interface Props {}

export default function BlogCard({}: Props): ReactElement {
  return (
    <div className="items-center justify-center w-3/12 m-5 bg-gray-800 rounded ">
      <div className="relative top-0 flex flex-col-reverse col-start-1 row-start-1 rounded-lg ">
        <img
          src="https://picsum.photos/200"
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
        <h1 className="absolute bottom-0 w-full h-full text-lg font-semibold text-center text-white top md:text-2xl dark:sm:text-white bg-gradient-to-t from-black/100 via-black/10" />
        <div className="absolute bottom-0 px-5 text-lg text-white top md:text-2xl dark:sm:text-white bg-gradient-to-t from-black/100 via-black/50 ">
          <p className="px-3 my-1 text-sm font-medium text-gray-200 bg-red-500 rounded-md from-blue-900 to-yellow-500 w-fit">
            Card
          </p>
          <h1 className="font-semibold">Beach House in Collingwood</h1>{" "}
          <div className="flex justify-between mt-1">
            <p className="flex items-center px-2 py-1 text-sm font-medium text-gray-200 bg-gray-900 rounded-md w-fit">
              <MdAccountCircle className="mr-2" /> 0x72...6c2b
            </p>
            <p className="flex items-center px-2 py-1 text-sm font-medium text-gray-200 bg-gray-900 rounded-md w-fit">
              <MdTimelapse className="mr-2" /> {new Date().toDateString()}
            </p>
          </div>
        </div>
        {/* <h1 className="absolute bottom-0 w-9/12 ml-5 text-lg font-semibold text-white top md:text-2xl dark:sm:text-white bg-gradient-to-t from-black/100 via-black/50">
          Beach House in Collingwood
        </h1>{" "} */}
      </div>
    </div>
  );
}
