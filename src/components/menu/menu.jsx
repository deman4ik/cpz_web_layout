import React from "react";
import { Row } from "reactstrap";
import classnames from "classnames";

import { MenuTab, CollapseMenuTab, LogOutMenuTab, Logo } from './menuBricks.jsx';

const Menu = props => (
    <div
        id="left-column"
        className={classnames({ close_menu: props.activeMenu }, props.colMenu )}
    >
        <div className="left-column-container">
            <div className="logo_container">
                <Logo/>
                <div className={"menu_container"}>
                    <Row>
                        <ul>
                            <MenuTab toggleNum={"1"} name={"Dashboard"} toggle={props.toggle} activeTab={props.activeTab}/>
                            <MenuTab toggleNum={"2"} name={"Data"} toggle={props.toggle} activeTab={props.activeTab}/>
                            <MenuTab toggleNum={"3"} name={"Robots"} toggle={props.toggle} activeTab={props.activeTab}/>
                            <MenuTab toggleNum={"4"} name={"Settings"} toggle={props.toggle} activeTab={props.activeTab}/>
                        </ul>
                    </Row>
                </div>
            </div>

            <div className="log_out_container">
                <Row>
                    <ul>
                        <LogOutMenuTab name={"Log out"}/>
                    </ul>
                    <CollapseMenuTab name={"Collapse menu"} closeMenu={props.closeMenu}/>
                </Row>
            </div>
        </div>
    </div>
);

export default Menu;