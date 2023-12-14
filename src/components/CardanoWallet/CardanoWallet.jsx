import React from 'react';
import { View, SelectField } from '@aws-amplify/ui-react';
import { anvil } from "@ada-anvil/sdk-client";

const wallets = ["nami", "eternl"];

function isWallet(str) {
  return wallets.includes(str);
}

const CardanoWallet = () => {

  const connectWallet = async (wallet) => {
    try {
      if (isWallet(wallet)) await anvil.wallet.connect(wallet);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <View>
      <SelectField onChange={event => connectWallet(event.target.value)}>
      {wallets.map(wallet => (
        <option key={wallet} value={wallet}>
          {wallet}
        </option>
      ))}
    </SelectField>
    </View>
  );
};

export default CardanoWallet;
