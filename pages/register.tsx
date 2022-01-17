import React, { ReactElement } from "react";
import { Header } from "../components/Header/Header";
import { create } from "ipfs-http-client";

interface Props {}

export default function register({ }: Props): ReactElement {
   const [fileUrl, updateFileUrl] = React.useState(``);
   async function onChange(e) {
     const file = e.target.files[0];
     try {
       const added = await client.add(file);
       const url = `https://dweb.link/ipfs/${added.path}`;
       console.log({ added });

       updateFileUrl(url);
     } catch (error) {
       console.log("Error uploading file: ", error);
     }
   }
  return (
    <div>
      <Header />
      <div className="bg-gray-800 p-10 h-screen flex flex-col items-center justify-center">
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
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full py-5 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter Preferred Username"
            />
          </div>
          <div>
            <label className="block text-xl font-medium text-gray-200">
              Photo
            </label>
            <div className="mt-1 flex items-center my-5 ">
              <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <input type="file" onChange={onChange} />
            </div>
              {fileUrl && <img src={fileUrl} width="600px" />}{" "}
            <button
              type="button"
              className=" bg-gray my-5 py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
        {fileUrl && <img src={fileUrl} width="600px" />}
      </div>
    </div>
  );
};
