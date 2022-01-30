import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUser, FaSearch, FaBell } from "react-icons/fa";
import Toggle from "../../context/ThemeToggle";
import useWeb3 from "../../hooks/useWeb3";
import WalletConnector from "../Wallet/WalletConnector";
import userFactoryABI from "../../config/abis/usersFactoryABI.json";

interface Props {}

export const Header = (props: Props) => {
  const { account, library } = useWeb3React();
  const web3Client = useWeb3();
  const web3Contract = new web3Client.eth.Contract(
    userFactoryABI,
    "0x9230310f669C0Ff5438aEB680F3e62AaaFCFE1f6"
  );

  const [alreadyRegistered, setalreadyRegistered] = useState(false);

  useEffect(() => {
    const validateUser = async () => {
      const findAccount = await web3Contract.methods
        .getUserByAddress(account)
        .call();
      console.log("findAccount", findAccount[1]);

      if (findAccount[1] != "0x0000000000000000000000000000000000000000") {
        setalreadyRegistered(true);
      }
    };
    if (account) {
      validateUser();
    }
  }, [account]);
  return (
    <div className="flex items-center justify-between px-12 py-5 bg-gray-900 dark:bg-gray-200">
      <Link href="/">
        <button className="text-xl font-bold text-white logo dark:text-gray-700">
          DBlog
        </button>
      </Link>
      <div className="flex items-center">
        <i className="p-2 mx-2 bg-gray-300 rounded cursor-pointer dark:bg-gray-700">
          <FaSearch className="text-gray-200 dark:text-gray-200 " />
        </i>
        <i className="p-2 mx-2 bg-gray-700 rounded cursor-pointer">
          <FaBell className="text-gray-500 " />
        </i>
        {!alreadyRegistered ? (
          <Link href="/register/">
            <button className="px-5 py-1 mx-2 font-semibold text-gray-200 bg-blue-700 rounded">
              Register
            </button>
          </Link>
        ) : (
          <Link href="/register/">
            <button className="px-5 py-1 mx-2 font-semibold text-gray-200 bg-blue-700 rounded">
             New Post
            </button>
          </Link>
        )}
        <WalletConnector />
        <Toggle />
      </div>
    </div>
  );
};
