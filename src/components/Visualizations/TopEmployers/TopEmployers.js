import React, { Fragment, useEffect, useState } from 'react';
import {XYPlot,FlexibleXYPlot, HorizontalGridLines, VerticalBarSeries, XAxis, YAxis} from 'react-vis';


const visData = [
    {x: 'Amazon', y: 8},
    {x: 'Faceb', y: 5},
    {x: 'Goldman', y: 3},
    {x: 'JP', y: 2},
    {x: 'Google', y: 2},
   
  ];

  function TopEmployers(){

    return <div>
<XYPlot height={400} width={500} xDistance={0} xType="ordinal">
<HorizontalGridLines />
<VerticalBarSeries 
  data={visData} 
  labelAnchorX="middle"
  labelAnchorY="text-after-edge"
/>
<XAxis/>
<YAxis/>
</XYPlot>

    </div>
  }

  export default TopEmployers