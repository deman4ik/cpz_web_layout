import React from "react";
import PropTypes from "prop-types";


import {scaleTime} from "d3-scale";
import {curveMonotoneX} from "d3-shape";

import {ChartCanvas, Chart} from "react-stockcharts";
import {AreaSeries} from "react-stockcharts/lib/series";
import {XAxis, YAxis} from "react-stockcharts/lib/axes";
import {fitWidth} from "react-stockcharts/lib/helper";
import {createVerticalLinearGradient, hexToRGBA} from "react-stockcharts/lib/utils";

import {InteractiveText, ClickCallback} from "react-stockcharts/lib/interactive";


import {discontinuousTimeScaleProvider} from "react-stockcharts/lib/scale";
import {ToolTipText} from "react-stockcharts/lib/tooltip";

import {timeFormat} from "d3-time-format";

import {format} from "d3-format";
import {
    CurrentCoordinate,
    MouseCoordinateX,
    MouseCoordinateY,
} from "react-stockcharts/lib/coordinates";


const canvasGradient = createVerticalLinearGradient([
    {stop: 0, color: hexToRGBA("#13B1E6", 0)},
    {stop: 0.9, color: hexToRGBA("#13B1E6", 0.4)},
    {stop: 1, color: hexToRGBA("#13B1E6", 0.8)}
]);


class AreaChart extends React.Component {


    constructor(props) {
        super(props);
        this.addTextLable = this.addTextLable.bind(this);
        this.state = {
            enableInteractiveObject: true,
            textList_1: [],
            x: -200,
            y: -200,

            valueText: '$ 7,230.69',
            dateText: 'Wednesday, Nov 22, 2017',
        };
    }

    addTextLable(e) {

        var formatter = new Intl.DateTimeFormat("en", { month: "short"}),
            formatterW = new Intl.DateTimeFormat("en", {weekday: "long"}),
            month2 = formatter.format(e.currentItem.date),
            week2 = formatterW.format(e.currentItem.date);


        var dateElem = week2 + ', ' + month2 + ' ' + e.currentItem.date.getDate()+ ', ' +  e.currentItem.date.getFullYear()
        this.setState({
            x: e.mouseXY[0],
            y: e.mouseXY[1],
            valueText: e.currentItem.close,
            dateText: dateElem


        });
    }

    render() {


        const height = 750;
        const {data, type, width, ratio } = this.props;


        const margin = {left: 70, right: 70, top: 20, bottom: 30};

        const gridHeight = height - margin.top - margin.bottom;
        const gridWidth = width - margin.left - margin.right;

        const showGrid = true;
        const yGrid = showGrid ? {innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.1,} : {};
        const xGrid = showGrid ? {innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.1} : {};





        return (
            <div>
                <ChartCanvas ratio={ratio} width={width} height={300}
                             margin={{left: 50, right: 50, top: 10, bottom: 30}}
                             seriesName="MSFTEST"
                             data={data} type={type}
                             xAccessor={d => d.date}
                             xScale={scaleTime()}
                             xExtents={[new Date(2011, 0, 1), new Date(2011, 1, 2)]}>

                    <Chart id={0} yExtents={d => d.close}>


                        <MouseCoordinateX
                            at="bottom"
                            orient="bottom"
                            displayFormat={timeFormat("%Y-%m-%d")}
                        />
                        <MouseCoordinateY
                            at="right"
                            orient="right"
                            displayFormat={format(".2f")}
                        />

                        <CurrentCoordinate yAccessor={d => d.close} fill="rgba(11,152,197,0.5)" r={14}/>
                        <CurrentCoordinate yAccessor={d => d.close} fill="rgba(11,152,197,1)" r={7}/>


                        <InteractiveText
                            enabled={true}
                            // textList={this.state.textList}
                            text={"Lorem ipsum..."}
                        />

                        <ClickCallback enabled={true}
                                       onClick={this.addTextLable.bind(d => d)}/>


                        <defs>
                            <linearGradient id="MyGradient" x1="0" y1="100%" x2="0" y2="0%">
                                <stop offset="0%" stopColor="#13B1E6" stopOpacity={0}/>
                                <stop offset="90%" stopColor="#13B1E6" stopOpacity={0.4}/>
                                <stop offset="100%" stopColor="#13B1E6" stopOpacity={0.8}/>
                            </linearGradient>
                            <linearGradient id="tableLine">
                                <stop offset="0%" stopColor="#9554E0" stopOpacity={1}/>
                                <stop offset="10%" stopColor="#16B4EB" stopOpacity={1}/>

                                <stop offset="90%" stopColor="#16B4EB" stopOpacity={1}/>
                                <stop offset="100%" stopColor="#9554E0" stopOpacity={1}/>

                            </linearGradient>
                            <linearGradient id="MyGradientGreen" x1="0" y1="100%" x2="0" y2="0%">
                                <stop offset="0%" stopColor="#65F5E5" stopOpacity={0}/>
                                <stop offset="50%" stopColor="#65F5E5" stopOpacity={0.3}/>
                                <stop offset="100%" stopColor="#65F5E5" stopOpacity={0.6}/>

                            </linearGradient>

                            <linearGradient id="MyGradientRed" x1="0" y1="100%" x2="0" y2="0%">
                                <stop offset="0%" stopColor="#CD3E60" stopOpacity={0}/>
                                <stop offset="50%" stopColor="#CD3E60" stopOpacity={0.3}/>
                                <stop offset="100%" stopColor="#CD3E60" stopOpacity={0.6}/>

                            </linearGradient>
                        </defs>

                        <XAxis axisAt="bottom" orient="bottom" ticks={6} stroke="rgba(255,255,255, 0.1)"
                               tickStroke='#ffffff' {...xGrid}/>
                        <YAxis axisAt="left" orient="left" percentScale={true} stroke="rgba(0,0,0, 0)"
                               tickStroke='#ffffff' {...yGrid} />

                        <AreaSeries
                            yAccessor={d => d.close}
                            fill="url(#MyGradient)"
                            strokeWidth={2}
                            stroke="url(#tableLine)"
                            interpolation={curveMonotoneX}
                            canvasGradient={canvasGradient}
                        />
                    </Chart>

                    <g>
                        <rect className={'label_background'} x={this.state.x - 100} y={this.state.y - 50} width="200"
                              height="50" stroke="#3D4977"
                              fill="#3D4977" rx="2" ry="2"/>
                        <polygon
                            points={(this.state.x - 10) + ',' + (this.state.y) + ' ' + (this.state.x) + ',' + (this.state.y + 10) + ' ' + (this.state.x + 10) + ',' + (this.state.y)}
                            fill="#3D4977" stroke="#3D4977" strokeWidth="0"/>
                        <ToolTipText x={this.state.x} y={this.state.y}
                                   >
                            <tspan className={'label_date_text'} x={this.state.x} textAnchor="middle" dy="-1em"
                                   fill={'#fff'}>{this.state.dateText}</tspan>
                            <tspan className={'label_date_value_text'} x={this.state.x} textAnchor="middle" key="value"
                                   dy="-1em"
                                   fill={'#fff'}>Performance: {this.state.valueText}</tspan>


                        </ToolTipText>
                    </g>
                </ChartCanvas>

            </div>
        );
    }
}

AreaChart.propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    ratio: PropTypes.number.isRequired,
    type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

AreaChart.defaultProps = {
    type: "svg",
};
AreaChart = fitWidth(AreaChart);

export default AreaChart;