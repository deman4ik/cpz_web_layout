import React from "react";
import CounDropdowns from './crypto/counDropdowns.jsx';
import { Row } from 'reactstrap';

export const BalanceTableHeader = () => (
    <div className="row crypto_balance_title">
        <div className="col-4">Name/Price</div>
        <div className="col-4">24h change</div>
        <div className="col-4 text-right">Balance</div>
    </div>
)

export const BalanceHeader = () => (
    <div className="row">
        <div className="col-3 balance_block_title balance_block_title_icon">
            <span>Balance</span>
        </div>
        <div className="col-9 balance_block_title_name">
            <CounDropdowns/>
        </div>
    </div>
)

export const RobotsHeader = () => (
    <div className="col-12 robots_line">
        <Row>
            <div className="col-1">
                <div className="row">Robot Name</div>
            </div>
            <div className="col-1">Coin</div>
            <div className="col-1">Exchange</div>
            <div className="col-2">Initial Capital</div>
            <div className="col-2">Robot Balance</div>
            <div className="col-2 col-2_5">Performance</div>
            <div className="col-2 col-2_5">
                <div className="row">Started</div>
            </div>
        </Row>
    </div>
)