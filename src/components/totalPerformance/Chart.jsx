    import React from "react";
    import PropTypes from "prop-types";

    import {scaleTime} from "d3-scale";
    import {curveMonotoneX} from "d3-shape";

    import {ChartCanvas, Chart} from "react-stockcharts";
    import {AreaSeries} from "react-stockcharts/lib/series";
    import {XAxis, YAxis} from "react-stockcharts/lib/axes";
    import {fitWidth} from "react-stockcharts/lib/helper";
    import {createVerticalLinearGradient, hexToRGBA} from "react-stockcharts/lib/utils";


    // import {ema} from "react-stockcharts/lib/indicator";
    // import {SingleValueTooltip, HoverTooltip, GroupTooltip, ToolTipText} from "react-stockcharts/lib/tooltip";

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
        render() {
            const height = 750;
            const {data, type, width, ratio} = this.props;
            console.log(this.props);

            const margin = {left: 70, right: 70, top: 20, bottom: 30};

            const gridHeight = height - margin.top - margin.bottom;
            const gridWidth = width - margin.left - margin.right;

            const showGrid = true;
            const yGrid = showGrid ? {innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.1,} : {};
            const xGrid = showGrid ? {innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.1} : {};

            // const ema20 = ema()
            //     .id(0)
            //     .options({windowSize: 20})
            //     .merge((d, c) => {
            //         d.ema20 = c;
            //     })
            //     .accessor(d => d.ema20);

            // const ema50 = ema()
            //     .id(2)
            //     .options({windowSize: 50})
            //     .merge((d, c) => {
            //         d.ema50 = c;
            //     })
            //     .accessor(d => d.ema50);

            // const dateFormat = timeFormat("%Y-%m-%d");
            // const numberFormat = format(".2f");


            // function tooltipContent(ys) {
            //     return ({currentItem, xAccessor}) => {
            //         return {

            //             y: [
            //                 {
            //                     label: "open",
            //                     value: currentItem.open && numberFormat(currentItem.open)
            //                 },
            //                 {
            //                     label: "high",
            //                     value: currentItem.high && numberFormat(currentItem.high)
            //                 },
            //                 {
            //                     label: "low",
            //                     value: currentItem.low && numberFormat(currentItem.low)
            //                 },
            //                 {
            //                     label: "close",
            //                     value: currentItem.close && numberFormat(currentItem.close)
            //                 }
            //             ]

            //                 .concat(
            //                     ys.map(each => ({
            //                         label: each.label,
            //                         value: each.value(currentItem),
            //                         stroke: each.stroke
            //                     }))
            //                 )
            //                 .filter(line => line.value),
            //             x: dateFormat(xAccessor(currentItem))
            //         };
            //     };
            // }


            return (
                <ChartCanvas ratio={ratio} width={width} height={300}
                             margin={{left: 50, right: 50, top: 10, bottom: 30}}
                             seriesName="MSFTEST"
                             data={data} type={type}
                             xAccessor={d => d.date}
                             xScale={scaleTime()}
                             xExtents={[new Date(2012, 11, 1), new Date(2013, 0, 5)]}
                >

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

                        {/*<SingleValueTooltip*/}
                        {/*yAccessor={ d => d.date}*/}
                        {/*tooltipContent={tooltipContent([*/}
                        {/*{*/}
                        {/*label: `${ema20.type()}(${ema20.options()*/}
                        {/*.windowSize})`,*/}
                        {/*value: d => numberFormat(d => d.close(d)),*/}
                        {/*stroke: ema20.stroke()*/}
                        {/*},*/}
                        {/*{*/}
                        {/*label: `${'svg'}(${100})`,*/}
                        {/*value: d => numberFormat(d => d.close(d)),*/}
                        {/*stroke: ema50.stroke()*/}
                        {/*}*/}
                        {/*])}*/}
                        {/*fontSize={15}*/}
                        {/*/>*/}


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

                        {/*<YAxis axisAt="right" orient="right" ticks={5} {...yGrid}/>*/}


                        <AreaSeries
                            yAccessor={d => d.close}
                            fill="url(#MyGradient)"
                            strokeWidth={2}
                            stroke="url(#tableLine)"
                            interpolation={curveMonotoneX}
                            canvasGradient={canvasGradient}
                        />

                        {/*<ToolTipText*/}
                            {/*x={xGrid} y={yGrid}*/}
                            {/*xLabel="Date"*/}
                            {/*yAccessor={d => d.close}*/}
                            {/*xDisplayFormat={timeFormat("%Y-%m-%d")} yDisplayFormat={format(".2f")}>*/}
                            {/*<tspan key="value" fill={'#fff'}>sss</tspan>*/}
                        {/*</ToolTipText>*/}
                    </Chart>
                </ChartCanvas>
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