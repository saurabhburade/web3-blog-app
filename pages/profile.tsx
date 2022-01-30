import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import useWeb3 from "../hooks/useWeb3";
import userFactoryABI from "../config/abis/usersFactoryABI.json";
import userABI from "../config/abis/userABI.json";

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
          setuserFields(user)
          console.log({user});
          
      }
    };
      
      if (account) {
          fetchUser();
      }
  }, [account]);
  return (
    <div>
      <Header />

      {!!userFields && (
        <>
          <img
            src={`https://dweb.link/ipfs/${userFields?._profileImage}`}
            width="600px"
          />
        </>
      )}
    </div>
  );
}

export default profile;
