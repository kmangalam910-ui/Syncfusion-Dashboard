import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const date1 = new Date('2012-01-01')

function filterValue(value) {
  return value.x >= date1
}

const returnValue = financialChartData.filter(filterValue)

const Financial = () => {

  const {currentMode} = useStateContext()

  return (
    <div className='m-4 md:m-10 p-10 mt-24 dark:bg-(--secondary-dark-bg) bg-white rounded-3xl'>
      <ChartsHeader category="Financial" title="AAPLE Historical" />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{border: {width: 0}}}
          tooltip={{enable: true, shared: true}}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair]} />
          <SeriesCollectionDirective>
            <SeriesDirective 
              dataSource={returnValue}
              xName='x'
              yName='low'
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Financial;