import React from "react";
import { useState } from "react";
import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");
interface Props {}

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
