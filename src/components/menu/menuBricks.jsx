import React from 'react';
import classnames from "classnames";

export const MenuTab = props => (
    <li className={classnames({ active: props.activeTab === props.toggleNum }, "menu_tab menu_tab_" + props.toggleNum )}>
        <a href="javascript:void(0)" onClick={() => {props.toggle(props.toggleNum);}}>
            <span>{props.name}</span>{" "}
        </a>
    </li>
)

export const CollapseMenuTab = props => (
    <div className="collapse_menu_container menu_tab">
        <a href="javascript:void(0)" className="collapse_menu" onClick={() => {props.closeMenu()}}>
            <span>{props.name}</span>
        </a>
    </div>
)

export const LogOutMenuTab = props => (
    <li className={"menu_tab"}>
        <a className={"log_out_image"} href="">
            <span>{props.name}</span>{" "}
        </a>
    </li>
)