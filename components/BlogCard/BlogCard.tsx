import React, { ReactElement } from "react";

interface Props {}

export default function BlogCard({}: Props): ReactElement {
  return (
    <div className="bg-gray-800 w-80 h-80 m-5 rounded flex justify-center items-center">
      <h1 className="text-center text-2xl text-gray-200">Card</h1>
    </div>
  );
}
