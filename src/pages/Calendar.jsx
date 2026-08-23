import React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const PropertyPane = (props) => <div className='mt-5'>{props.children}</div>

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        id='specialDateCalendar'
        height="650px"
        selectedDate={new Date(2026, 0, 10)}
        eventSettings={{dataSource: scheduleData}}
        dragStart={ondragstart}
      >
        <ViewsDirective>
          {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item, index) => <ViewDirective key={index} option={item} />) }
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
      <PropertyPane>
        <table
          style={{ width: '100%', background: 'white' }}
        >
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>
                <DatePickerComponent
                  value={new Date(2026, 0, 1)}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  )
}

export default Calendar;