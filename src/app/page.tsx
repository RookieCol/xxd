import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import ConnectWallet from "@/components/common/ConnectWallet";
import Nouns3D from "@/components/views/dashboard/Nouns3D";

export default function Home() {
  return (
    <main className="p-6 flex flex-col gap-4">
      <Nouns3D />
      <div className="flex flex-row gap-4 justify-center items-center">
        <button>Checkout</button>
        <button>Sell or Buy ticket (secondary market)</button>

        {/* <ConnectWallet client={client} /> */}
      </div>
      <button>Create event</button>
    </main>
  );
}
