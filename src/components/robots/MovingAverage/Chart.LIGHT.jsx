import React from "react";
import PropTypes from "prop-types";

import {format} from "d3-format";

import {ChartCanvas, Chart} from "react-stockcharts";
import {
    BarSeries,
    CandlestickSeries,
} from "react-stockcharts/lib/series";
import {XAxis, YAxis} from "react-stockcharts/lib/axes";
import {
    CrossHairCursor,
    EdgeIndicator,
    MouseCoordinateY,
} from "react-stockcharts/lib/coordinates";

import {discontinuousTimeScaleProvider} from "react-stockcharts/lib/scale";

import {ema, heikinAshi, sma} from "react-stockcharts/lib/indicator";
import {fitWidth} from "react-stockcharts/lib/helper";
import {last} from "react-stockcharts/lib/utils";

class HeikinAshi extends React.Component {
    render() {
        const ha = heikinAshi();
        const ema20 = ema()
            .id(0)
            .options({windowSize: 20})
            .merge((d, c) => {
                d.ema20 = c;
            })
            .accessor(d => d.ema20);

        const ema50 = ema()
            .id(2)
            .options({windowSize: 50})
            .merge((d, c) => {
                d.ema50 = c;
            })
            .accessor(d => d.ema50);

        const smaVolume50 = sma()
            .id(3)
            .options({windowSize: 50, sourcePath: "volume"})
            .merge((d, c) => {
                d.smaVolume50 = c;
            })
            .accessor(d => d.smaVolume50);

        const {type, data: initialData, width, ratio} = this.props;

        const calculatedData = smaVolume50(ema50(ema20(ha(initialData))));
        const xScaleProvider = discontinuousTimeScaleProvider
            .inputDateAccessor(d => d.date);
        const {
            data,
            xScale,
            xAccessor,
            displayXAccessor,
        } = xScaleProvider(calculatedData);

        const start = xAccessor(last(data));
        const end = xAccessor(data[Math.max(0, data.length - 150)]);
        const xExtents = [start, end];


        const margin = {left: 40, right: 80, top: 30, bottom: 50};
        const height = 400;

        const gridHeight = height - margin.top - margin.bottom;
        const gridWidth = width - margin.left - margin.right;
        const showGrid = true;
        const yGrid = showGrid ? {innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.1,} : {};
        const xGrid = showGrid ? {innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.1} : {};


        return (
            <ChartCanvas height={height}
                         ratio={ratio}
                         width={width}
                         margin={margin}
                         type={type}
                         seriesName="MSFT"
                         data={data}
                         xScale={xScale}
                         xAccessor={xAccessor}
                         displayXAccessor={displayXAccessor}
                         xExtents={xExtents}
            >
                <Chart id={1}
                       yExtents={[d => [d.high, d.low], ema20.accessor(), ema50.accessor()]}
                       padding={{top: 10, bottom: 20}}
                >
                    <XAxis axisAt="bottom" orient="bottom" tickStroke='#6987B9' {...xGrid}/>
                    <YAxis axisAt="right" orient="right" ticks={5} stroke="rgba(0,0,0, 0)"
                           tickStroke='#6987B9'  {...yGrid}/>
                    <MouseCoordinateY
                        at="right"
                        orient="right"
                        displayFormat={format(".2f")}
                        fill={'#40DDFF'}
                        itemType="first"
                        lineStroke={'#40DDFF'} lineOpacity={1} textFill={'#fff'} fontSize={14}

                    />

                    <CandlestickSeries

                        fill={d => d.close > d.open ? "#1CA46B" : "#CD3E60"}
                        wickStroke={d => d.close > d.open ? "#1CA46B" : "#CD3E60"}
                        wick={10}
                        opacity="1"
                        stroke={'none'}
                        strokeWidth={10}
                        candleStrokeWidth={10}

                    />

                    <EdgeIndicator itemType="first" orient="right" edgeAt="right"
                                   yAccessor={ema20.accessor()} fill={'#1CA46B'} lineStroke={'#1CA46B'} lineOpacity={1}
                                   textFill={'#fff'} fontSize={14}/>
                    <EdgeIndicator itemType="first" orient="right" edgeAt="right"
                                   yAccessor={ema50.accessor()} fill={'#CD3E60'} lineStroke={'#CD3E60'} lineOpacity={1}
                                   textFill={'#fff'} fontSize={14}/>

                </Chart>
                <Chart id={2}
                       yExtents={[d => d.volume, smaVolume50.accessor()]}
                       height={150} origin={(w, h) => [0, h - 150]}
                >

                    <BarSeries yAccessor={d => d.volume} fill={d => d.close > d.open ? "#67809F" : "#67809F"}
                               opacity={0.7}/>

                </Chart>
                <CrossHairCursor/>
            </ChartCanvas>
        );
    }
}

HeikinAshi.propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    ratio: PropTypes.number.isRequired,
    type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

HeikinAshi.defaultProps = {
    type: "svg",
};

HeikinAshi = fitWidth(HeikinAshi);

export default HeikinAshi;
