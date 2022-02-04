import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import useWeb3 from "../hooks/useWeb3";
import userFactoryABI from "../config/abis/usersFactoryABI.json";
import userABI from "../config/abis/userABI.json";
import BlogsList from "../components/UserBlogs/BlogsList";

function profile() {
  const { account } = useWeb3React();
  const web3Client = useWeb3();

  const [userFields, setuserFields] = useState({});
  const factoryContract = new web3Client.eth.Contract(
    userFactoryABI,
    "0x9230310f669C0Ff5438aEB680F3e62AaaFCFE1f6"
  );
  useEffect(() => {
    const fetchUser = async () => {
      const foundAccount = await factoryContract.methods
        .getUserByAddress(account)
        .call();

      if (foundAccount[1] != "0x0000000000000000000000000000000000000000") {
        const userContract = new web3Client.eth.Contract(
          userABI,
          foundAccount[1]
        );
        const user = await userContract.methods.getFields().call();
        setuserFields(user);
        console.log({ user });
      }
    };

    if (account) {
      fetchUser();
    }
  }, [account]);
  return (
    <div>
      <Header />
      <div className="flex px-20 my-10 ">
        {!!userFields && (
          <>
            <img
              src={`https://dweb.link/ipfs/${userFields?._profileImage}`}
              className="w-64 rounded-xl"
            />
            <div className="mx-5">
              <p className="text-2xl text-white text-bolder">@JohnDoe</p>
              <p className="text-gray-600 text-md ">JohnDoe</p>
              <p className="text-gray-600 text-md ">{account}</p>
              <div className="flex">
                <button className="p-1 px-2 mr-1 text-sm text-white bg-blue-500 rounded btn active:ring-2">
                  New Post
                </button>
                <button className="p-1 px-2 text-sm text-white bg-blue-500 rounded btn active:ring-2">
                  Explore
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="px-20">
        <BlogsList />
      </div>
    </div>
  );
}

export default profile;
