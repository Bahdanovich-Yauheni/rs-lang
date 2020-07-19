import './cardArchive.less'
import React, {useEffect, useState} from 'react'
import { Bar } from 'react-chartjs-2'

const СardArchive = ({ learntWords, days }) => {
  let datesArray = [...days]
  
  const [filteredDate, setFilteredDate]= useState([]);

  const filterDate = (datesArray) => {
    let arrayOfValues = []
    if(datesArray){
      arrayOfValues = datesArray.reduce((acc, el) => {
        if(el){
          const value = Object.values(el[1]).reduce((accum, el) => {
            accum += el.guessed;
            return accum;
          }, 0)
          acc.push(value)
        }
        return acc
      }, [])
    }
    return arrayOfValues
  }

  useEffect(() => {
    setFilteredDate(filterDate(datesArray))
  }, [days])
   
  const DATA = filteredDate.length > 7 ? filteredDate.splite(0, 7) : filteredDate
  const datesAr = datesArray.map(el => el[0])

  const data = {
    labels: datesAr.length > 7 ? datesAr.splice(0, 7) : datesAr,
    datasets: [
      {
        data: DATA,
        backgroundColor: ['#7AB4CC', '#1F658A', '#D3E8ED', '#7AB4CC', '#1F658A', '#2C3E50', '#C00000'],
      },
    ],
  }

  return (
    <div className='tab'>
      <h2 className='learntWords'>
        <span>{learntWords}</span> of <span>3600</span> words learnt
      </h2>
      <div className='alpinist'>
        <img src='./images/marginalia-done.png' alt='we are crawling' />
      </div>
      <div className='bar-wrapper'>
        <Bar
          data={data}
          options={{
            legend: {
              display: false,
            },
            tooltips: {
              enabled: true,
            },
          }}
        />
      </div>
    </div>
  )
}
export default СardArchive
