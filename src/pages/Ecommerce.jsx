import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from "react-icons/go";

import {Stacked, Pie, Button, SparkLine} from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import welcomeBackground from '../data/welcome-bg.svg';

const percentageColors = {
  'red-600': 'text-red-600',
  'green-600': 'text-green-600',
};

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <section className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div
          className='dark:text-gray-200 dark:bg-(--secondary-dark-bg) h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center'
          style={{ backgroundImage: `url(${welcomeBackground})` }}
        >
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63,488.78</p>
            </div>
          </div>

          <div className='mt-6'>
            <Button 
              color="white"
              bgColor="#03C9D7"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className='m-3 flex flex-wrap justify-center gap-3 items-center'>
          {earningData.map((item) => (
            <div 
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-(--secondary-dark-bg) md:2-56 p-4 pt-9 rounded-2xl'
            >
              <button
              type='button'
                style={{backgroundColor: item.iconBg, color: item.iconColor}}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-md hover:drop-shadow-black'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm ${percentageColors[item.pcColor]} ml-3`}>{item.percentage}</span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='flex flex-wrap gap-2 justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-(--secondary-dark-bg) m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4 '>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <GoDotFill/>
                </span>
                <span>
                  Expense
                </span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span>
                  <GoDotFill/>
                </span>
                <span>
                  Budget
                </span>
              </p>
            </div>
          </div>

          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-(--border-color) m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5 hover:drop-shadow-md hover:drop-shadow-black cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>
              <div className='mt-8'>
                <p className='text-3xl font-semibold'>$48,487</p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>

              <div className='mt-5'>
                <SparkLine 
                  currentColor="#03C9D7"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  color="#03C9D7"
                  data={SparklineAreaData}
                />
              </div>

              <div className='mt-10'>
                <Button 
                  color="white"
                  bgColor="#03C9D7"
                  text="Download Report"
                  borderRadius="10px"
                  size="md"
                />
              </div>
            </div>

            <div>
              <Stacked 
                width="320"
                height="360"
              />
            </div>
          </div>
        </div>

        <div>
          <div 
            className='rounded-2xl md:w-400 p-4 m-3'
            style={{backgroundColor: '#03C9D7'}}
          >
            <div className='flex justify-between items-center'>
              <p className='font-semibold text-white text-2xl'>Earnings</p>

              <div>
                <p className='font-semibold text-white text-2xl mt-8'>63,448.78</p>
                <p className='text-gray-200'>Monthly Revenue</p>
              </div>
            </div>

            <div className='mt-6'>
              <SparkLine currentColor="#03C9D7" id="column-sparkline" height="100px" type="Column" data={SparklineAreaData} width="320" color="white" />
            </div>
          </div>

          <div className='bg-white dark:text-gray-200 dark:bg-(--secondary-dark-bg) rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10'>
            <div>
              <p className='font-semibold text-2xl'>$43,286</p>
              <p className='text-gray-400'>Yearly sales</p>
            </div>

            <div className='w-40'>
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Ecommerce;