import React from "react";
import type { ThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

function ConnectWallet({ client }: { client: ThirdwebClient }) {
  const wallets = [createWallet("com.coinbase.wallet")];
  return (
    <ConnectButton
      client={client}
      appMetadata={{
        name: "XDD",
        url: "https://example.com",
      }}
      wallets={wallets}
    />
  );
}

export default ConnectWallet;
