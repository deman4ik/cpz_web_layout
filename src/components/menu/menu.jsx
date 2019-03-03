import React from "react";
import classnames from "classnames";

import { NavContainer, LogOutContainer } from './menuContainers';
import { Logo } from './menuBricks';

/*
*   Базовый компонент меню, разбитый на два контейнера
*/

const Menu = props => (
    <div id="left-column" className={classnames({ close_menu: props.activeMenu }, props.colMenu )}>
        <div className="left-column-container">
            <div className="logo_container">
                <Logo/>
                <NavContainer toggle={props.toggle} activeTab={props.activeTab}/>
            </div>

            <LogOutContainer closeMenu={props.closeMenu}/>
        </div>
    </div>
);

export default Menu;