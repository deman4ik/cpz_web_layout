import React from 'react';
import { Nav } from "reactstrap";
import { RoboLinkAlt, MovingAverageTab, ChartComponentTab } from './robotsBricks';
import { TabContent } from "reactstrap";

export const NavPanelWidget = props => (
    <Nav tabs>
        <RoboLinkAlt Num={"1"} toggle={props.toggle}
            activeTab={props.activeTab}
            content={"Trading"}
            html={<div className={"tabs_value_title"}>$ 1,422.11</div>} />
        <RoboLinkAlt Num={"2"} toggle={props.toggle}
            activeTab={props.activeTab}
            content={"Balance"}
            html={<div className={"tabs_value_title"}>
                <span className={"top_value"}>+ 7,41%</span>
                <span className={"bottom_value"}>+ 3,90%</span>
            </div>} />
        <RoboLinkAlt Num={"3"} toggle={props.toggle}
            activeTab={props.activeTab}
            content={"Drawdawn"}
            html={<div className={"tabs_value_title"}>
                <span className={"top_value"}>$ 1,198.93</span>
                <span className={"bottom_value"}>+ 2,87%</span>
            </div>} />
    </Nav>
)

export const TabPaneWidget = props => (
    <TabContent activeTab={props.activeTab}>
        <MovingAverageTab activeTab={props.activeTab}
                          coin_name={props.coin_name}
                          tabNum={"1"}/>
        <ChartComponentTab tabNum={"2"}
                           coin_name={props.coin_name}
                           activeTab={props.activeTab}/>
        <ChartComponentTab tabNum={"3"}
                           coin_name={props.coin_name}
                           activeTab={props.activeTab}/>
    </TabContent>
)