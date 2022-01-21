import Link from "next/link";
import React from "react";
import { FaUser, FaSearch, FaBell } from "react-icons/fa";
import Toggle from "../../context/ThemeToggle";
import WalletConnector from "../Wallet/WalletConnector";
interface Props {}

export const Header = (props: Props) => {
  return (
    <div className="flex items-center justify-between px-12 py-5 bg-gray-900 dark:bg-gray-200">
      <Link href="/">
        <button className="text-xl font-bold text-white logo dark:text-gray-700">
          LOGO
        </button>
      </Link>
      <div className="flex items-center">
        <i className="p-2 mx-2 bg-gray-300 rounded cursor-pointer dark:bg-gray-700">
          <FaSearch className="text-gray-200 dark:text-gray-200 " />
        </i>
        <i className="p-2 mx-2 bg-gray-700 rounded cursor-pointer">
          <FaBell className="text-gray-500 " />
        </i>
        <Link href="/register/">
          <button className="px-5 py-1 mx-2 font-semibold text-gray-200 bg-blue-700 rounded">
            Register
          </button>
        </Link>
        <WalletConnector />
        <Toggle />
      </div>
    </div>
  );
};
