import type { NextPage } from "next";
import { channelPayoutProof } from "@joystreamjs/content";

const Home: NextPage = () => {
  const handleClick = async () => {
    const nodeEndpoint = "http://192.168.1.31:3333";
    const payloadDataObjectId = "0";
    const payoutProof = await channelPayoutProof(
      "URL",
      `${nodeEndpoint}/api/v1/files/${payloadDataObjectId}`,
      1
    );
    console.log(payoutProof);
  };
  return (
    <div>
      <button onClick={handleClick}>payoutproof</button>
    </div>
  );
};

export default Home;
