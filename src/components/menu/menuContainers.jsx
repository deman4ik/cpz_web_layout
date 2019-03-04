import React from 'react';
import { Row } from "reactstrap";

import { MenuTab, CollapseMenuTab, LogOutMenuTab } from './menuBricks.jsx';

export const NavContainer = props => (
    <div className={"menu_container"}>
        <Row>
            <ul>
                <MenuTab toggleNum={"1"} name={"Dashboard"} toggle={props.toggle} activeTab={props.activeTab} />
                <MenuTab toggleNum={"2"} name={"Data"} toggle={props.toggle} activeTab={props.activeTab} />
                <MenuTab toggleNum={"3"} name={"Robots"} toggle={props.toggle} activeTab={props.activeTab} />
                <MenuTab toggleNum={"4"} name={"Settings"} toggle={props.toggle} activeTab={props.activeTab} />
            </ul>
        </Row>
    </div>
)

export const LogOutContainer = props => (
    <div className="log_out_container">
        <Row>
            <ul>
                <LogOutMenuTab name={"Log out"} />
            </ul>
            <CollapseMenuTab name={"Collapse menu"} closeMenu={props.closeMenu} />
        </Row>
    </div>
)