import React from "react";
import { Row } from "reactstrap";
import classnames from "classnames";

import { MenuTab, CollapseMenuTab, LogOutMenuTab } from './menuBricks.jsx';

const Menu = props => (
  <div
    id="left-column"
    className={classnames({ close_menu: props.activeMenu }, props.colMenu )}
  >
    <div className="left-column-container">
      <div className="logo_container">
        <a href="#" className="logo_title" />
        <a href="#" className="logo_item" />

        <div className={"menu_container"}>
          <div className="row">
            <ul>
                <MenuTab toggleNum={"1"} name={"Dashboard"} toggle={props.toggle} activeTab={props.activeTab}/>
                <MenuTab toggleNum={"2"} name={"Data"} toggle={props.toggle} activeTab={props.activeTab}/>
                <MenuTab toggleNum={"3"} name={"Robots"} toggle={props.toggle} activeTab={props.activeTab}/>
                <MenuTab toggleNum={"4"} name={"Settings"} toggle={props.toggle} activeTab={props.activeTab}/>
            </ul>
          </div>
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