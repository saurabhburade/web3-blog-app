import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { injected } from "../../config/wallets";
import { useWeb3React } from "@web3-react/core";
function MyDialog() {
  const { account, activate } = useWeb3React();
  // The open/closed state lives outside of the Dialog and is managed by you
  let [isOpen, setIsOpen] = useState(false);

  function handleDeactivate() {
    // ...
  }
  console.log({ account });

  React.useEffect(() => {
    if (!account) {
      activate(injected);
    }
  }, [account]);
  return (
    /*
      Pass `isOpen` to the `open` prop, and use `onClose` to set
      the state back to `false` when the user clicks outside of
      the dialog or presses the escape key.

    */
    <div>
      <button
        onClick={() => setIsOpen(account ? false : true)}
        className="px-5 py-1 mx-2 font-semibold text-gray-200 bg-blue-700 rounded"
      >
        {account
          ? `${account.slice(0, 5)}...${account.slice(39, account.length)}`
          : " Connect Wallet"}
      </button>
      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />

            <div className="relative w-9/12 max-w-sm p-5 mx-auto bg-gray-900 rounded">
              <div className="flex items-center justify-between mb-3">
                <Dialog.Title className="font-semibold text-gray-200">
                  Connect Wallet
                </Dialog.Title>
                <button
                  className="hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  <IoMdClose className="text-xl font-semibold text-gray-200" />
                </button>
              </div>
              <div className="flex flex-wrap justify-around">
                <button
                  className="flex flex-col items-center p-5 mx-2 my-3 bg-gray-800 rounded"
                  onClick={() => {
                    activate(injected);
                    setIsOpen(false);
                  }}
                >
                  <img
                    src="https://github.com/sushiswap/sushiswap-interface/blob/canary/public/images/wallets/metamask.png?raw=true"
                    alt=""
                    className="w-10 m-1"
                  />
                  <h3 className="text-gray-200">Metamask</h3>
                </button>{" "}
                <button
                  className="flex flex-col items-center p-5 mx-2 my-3 bg-gray-800 rounded"
                  onClick={() => {
                    activate(injected);
                    setIsOpen(false);
                  }}
                >
                  <img
                    src="https://github.com/sushiswap/sushiswap-interface/blob/canary/public/images/wallets/metamask.png?raw=true"
                    alt=""
                    className="w-10 m-1"
                  />
                  <h3 className="text-gray-200">Metamask</h3>
                </button>{" "}
              </div>

              {/* ... */}
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default MyDialog;
