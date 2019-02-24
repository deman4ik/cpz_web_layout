import React from 'react';
import { NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';

export const RoboLink = (props) => (
    <NavItem>
        <div className={'tabs_link_container ' + classnames({ active: props.activeTab === props.tabNum })}>
            <NavLink className={classnames({ active: props.activeTab === props.tabNum })}
                     onClick={() => {props.toggle(props.tabNum)}}
            >
                {props.name}
            </NavLink>
        </div>
    </NavItem>
)

export const RoboHeader = () => (
    <div className="col-12">
        <div className={'robots_tabs_header row'}>
            <div className="col-3">Robot Name</div>
            <div className="col-3">All Trades</div>
            <div className="col-3">Long Trades</div>
            <div className="col-3">Short Trades</div>
        </div>
    </div>
)

export const RoboCollapsedHeader = () => (
    <Row>
        <div className="col-2 align-self-center">
            <Row>Robot Name</Row>
        </div>
        <div className="col-1 align-self-center">Coin</div>
        <div className="col-1 align-self-center">Exchange</div>
        <div className="col-2 align-self-center">Initial Capital</div>
        <div className="col-2 align-self-center">Robot Balance</div>
        <div className="col-3 align-self-center">Performance</div>
        <div className="col-1 align-self-center text-right">
            <div className="row justify-content-end">Status</div>
        </div>
    </Row>
)
 