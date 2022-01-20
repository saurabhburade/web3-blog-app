import { useRouter } from "next/router";
import React from "react";
import { Header } from "../../components/Header/Header";
import { MdAccountCircle, MdTimelapse } from "react-icons/md";

function SinglePost(props) {
  const router = useRouter();
  console.log({ props, router });

  return (
    <div>
      <Header />

      <div className="p-20">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
          Easy to use, stylish placeholders
        </h1>
        <h1 className="flex items-center text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600">
          Posted By <MdAccountCircle className="ml-2 mr-1 text-gray-300" />{" "}
          0x72...6c2b on {new Date().toDateString()}
        </h1>
        <img
          src="https://picsum.photos/500/300"
          className="w-9/12 my-5 rounded-lg"
          alt=""
        />
        <p className="w-9/12 text-xl text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime
          labore officiis corrupti eaque iusto debitis quasi vel corporis natus,
          doloremque, praesentium aliquam rerum ex qui quis repellat recusandae
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime{" "}
          <br />
          <br />
          labore officiis corrupti eaque iusto debitis quasi vel corporis natus,
          doloremque, praesentium aliquam rerum ex qui quis repellat recusandae
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime
          labore officiis corrupti eaque iusto debitis quasi vel corporis natus,
          doloremque, praesentium aliquam rerum ex qui quis repellat recusandae
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime
          labore officiis corrupti eaque iusto debitis quasi vel corporis natus,
          doloremque, praesentium aliquam rerum ex qui quis repellat recusandae
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime
          labore officiis corrupti eaque iusto debitis quasi vel corporis natus,
          doloremque, praesentium aliquam rerum ex qui quis repellat recusandae
          deserunt? deserunt? deserunt? deserunt? deserunt? Lorem ipsum dolor
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime
          <br /> <br />
          labore officiis corrupti eaque iusto debitis quasi vel corporis natus,
          doloremque, praesentium aliquam rerum ex qui quis repellat recusandae
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime
          labore officiis corrupti eaque iusto debitis quasi vel corporis natus,
          doloremque, praesentium aliquam rerum ex qui quis repellat recusandae
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime
          labore officiis corrupti eaque iusto debitis quasi vel corporis natus,
          doloremque, praesentium aliquam rerum ex qui quis repellat recusandae
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime
          labore officiis corrupti eaque iusto debitis quasi vel corporis natus,
          doloremque, praesentium aliquam rerum ex qui quis repellat recusandae
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime
          labore officiis corrupti eaque iusto debitis quasi vel corporis natus,
          doloremque, praesentium aliquam rerum ex qui quis repellat recusandae
          deserunt? deserunt? deserunt? deserunt? deserunt? sit amet consectetur
          adipisicing elit. Eum, maxime labore officiis corrupti eaque iusto
          debitis quasi vel corporis natus, doloremque, praesentium aliquam
          rerum ex qui quis repellat recusandae deserunt?
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
