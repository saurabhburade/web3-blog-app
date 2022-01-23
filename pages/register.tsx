import React, { ReactElement } from "react";
import { Header } from "../components/Header/Header";
import { create } from "ipfs-http-client";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import userFactoryABI from "../config/abis/usersFactoryABI.json";
import UncheckedJsonRpcSigner from "../utils/signer";

interface Props {}

// account is optional
export function getProviderOrSigner(library, account) {
  return account
    ? new UncheckedJsonRpcSigner(library.getSigner(account))
    : library;
}

export default function register({}: Props): ReactElement {
  const { account, library } = useWeb3React();

  const web3Provider = new ethers.providers.JsonRpcProvider(
    "https://data-seed-prebsc-1-s1.binance.org:8545/"
  );
  console.log({ library, web3Provider }, web3Provider.getSigner());
  const contract = new ethers.Contract(
    "0x261725549A8EA98F934B6bf8d3541e737Fb45d74",
    userFactoryABI,
    library?.getSigner(account)
  );
  const contractWithSigner = contract.connect(web3Provider.getSigner(account));
  const [fileUrl, updateFileUrl] = React.useState(``);
  const [userName, setuserName] = React.useState(``);
  async function onFileChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://dweb.link/ipfs/${added.path}`;
      console.log({ added });

      updateFileUrl(added.path);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  const handleRegister = async () => {
    console.log(
      "handleRegister",
      contractWithSigner.createUser,
      library?.getSigner(account),
      web3Provider.getSigner(account)
    );
    const txn = await contractWithSigner.createUser("bob", "ipfshashhere");
    console.log(txn);
    if (fileUrl.trim() && userName.trim() && account) {
      console.log({ contractWithSigner });
    }
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen p-10 bg-gray-800">
        <div className="w-6/12 my-5 ">
          <div className="my-5 ">
            <label
              htmlFor="userName"
              className="block text-xl font-medium text-gray-200"
            >
              Preferred Username
            </label>

            <input
              type="text"
              name="userName"
              id="userName"
              className="block w-full py-5 pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
              placeholder="Enter Preferred Username"
              onChange={(e) => setuserName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xl font-medium text-gray-200">
              Photo
            </label>
            <div className="flex items-center my-5 mt-1 ">
              <span className="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                <svg
                  className="w-full h-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <input type="file" onChange={onFileChange} />
            </div>
            {fileUrl && <img src={fileUrl} width="600px" />}{" "}
            <button
              type="button"
              onClick={handleRegister}
              className="px-3 py-2 my-5 text-sm font-medium leading-4 text-gray-200 border border-gray-300 rounded-md shadow-sm bg-gray hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const client = create("https://ipfs.infura.io:5001/api/v0");

export const IpfsFileUpload = (props: Props) => {
  const [fileUrl, updateFileUrl] = useState(``);
  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      console.log({ added });

      updateFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  return (
    <div>
      <div className="App">
        <h1>IPFS Example</h1>
        <input type="file" onChange={onChange} />
        {fileUrl && <img src={fileUrl} alt={fileUrl} width="600px" />}
      </div>
    </div>
  );
};
