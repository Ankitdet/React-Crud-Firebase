import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

const LocationArrComponents = ({
  currentWeather,
  areaState,
  locationArrNorth,
  locationArrCenter,
  locationArrSouth,
  locationArrEast,
  twoFuncForWeather }) => {

  const locationSwitch = () => {
    switch(areaState){
      case '北部':
      return (
        <>
          { locationArrNorth.map(arr =>
            <Dropdown.Item key={arr.id} href="#" onClick={() => twoFuncForWeather(arr)}>{arr.location}</Dropdown.Item>
          )}
        </>
      )
      case '中部':
      return (
        <>
          { locationArrCenter.map(arr =>
            <Dropdown.Item key={arr.id} href="#" onClick={() => twoFuncForWeather(arr)}>{arr.location}</Dropdown.Item>
          )}
        </>
      )
      case '南部':
      return (
        <>
          { locationArrSouth.map(arr =>
            <Dropdown.Item key={arr.id} href="#" onClick={() => twoFuncForWeather(arr)}>{arr.location}</Dropdown.Item>
          )}
        </>
      )
      case '東部':
      return (
        <>
          { '東部' && locationArrEast.map(arr =>
            <Dropdown.Item key={arr.id} href="#" onClick={() => twoFuncForWeather(arr)}>{arr.location}</Dropdown.Item>
          )}
        </>
      )
      default:
      return (
        <>
          { locationArrNorth.map(arr =>
            <Dropdown.Item key={arr.id} href="#" onClick={() => twoFuncForWeather(arr)}>{arr.location}</Dropdown.Item>
          )}
        </>
      )
    }
  }

  return (
    <>
      <DropdownButton className='m-2' variant='light' title={currentWeather.locationName ? `縣市：${currentWeather.locationName}` : '選擇縣市'}>
        {locationSwitch()}
      </DropdownButton>
    </>
  )
}

export default  LocationArrComponents
