import React from "react";
import { FaUser, FaSearch, FaBell } from "react-icons/fa";
import Toggle from "../../context/ThemeToggle";
import WalletConnector from "../Wallet/WalletConnector";
interface Props {}

export const Header = (props: Props) => {
  return (
    <div className="bg-gray-900  px-12 py-5 flex justify-between items-center dark:bg-gray-200">
      <h1 className="logo text-xl font-bold text-white dark:text-gray-700">
        Header
      </h1>
      <div className="flex  items-center">
        <i className="bg-gray-700 p-2 rounded mx-2">
          <FaSearch className="text-gray-500 " />
        </i>
        <i className="bg-gray-700 p-2 rounded mx-2">
          <FaBell className="text-gray-500 " />
        </i>
        {/* <button className="text-gray-200 bg-blue-700 px-5 py-1  font-semibold rounded mx-2">
          Login
              </button> */}
        <WalletConnector />
        <Toggle />
      </div>
    </div>
  );
};
