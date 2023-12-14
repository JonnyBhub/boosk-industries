import React , { useState, useEffect } from 'react';
import { Button, View, Input} from '@aws-amplify/ui-react';
import { anvil } from "@ada-anvil/sdk-client";
import  CardanoWallet from "../components/CardanoWallet";


const Cardano = () => {
    const [connected, setConnected] = useState(false);
    const [openConnection, setOpenConnection] = useState(false);
    const [assets, setAssets] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const connectedWallet = () => {
        setConnected(anvil.wallet.isConnected());
        if (connected === true) {
            setOpenConnection(false);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            connectedWallet();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    });
    
    const chooseWallet = () => {
       setOpenConnection(true);     
    };

    const walletName = () => {
        if (connected) {
            return anvil.wallet.name();
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const policy = searchValue;

        const assets=  anvil.walletExt.getAssets({
            policies: [policy],
        });

        setAssets(assets);
        console.log(assets);
    };

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };


    return (
        <View>
            {!connected && !openConnection && <Button onClick={chooseWallet}>Connect Wallet</Button>}

            {!connected && openConnection && <CardanoWallet />}

            {connected && !openConnection &&
                <View>
                    <p>Welcome user</p>
                    <form onSubmit={handleSubmit}>
                        <Input 
                            type="text" 
                            placeholder="Enter The policy you want to search"
                            value={searchValue}
                            onChange={handleInputChange}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </View>
            }
        </View>
    );
};

export default Cardano;
