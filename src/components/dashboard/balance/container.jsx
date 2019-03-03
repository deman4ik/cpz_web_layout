import React from 'react';
import BalanceBlock from './balanceBlock.jsx';
import CryptoMiniRow from "../crypto/cryptoMiniRow.jsx";
import { BalanceHeader, BalanceTableHeader } from '../dashBoardBricks.jsx';

const BalanceContainer = props => (
    <div>
        <BalanceHeader />
        <div id="balance_block">
            <BalanceBlock valueName1="Bitfinex:" value1="67.12" valueName2="Okex:" value2="32.88"/>
        </div>
        <BalanceTableHeader />
        <div className="col-12">
            {props.balance.map(crypto => (
                <CryptoMiniRow key={crypto.name}
                               crypto={crypto}
                />
            ))}
        </div>
    </div>
)

export default BalanceContainer;
