import React, { useState } from 'react'
import { description, temperature, airFlow, rain, styleSvg, refreshSvg, textStyle } from '../../style/weather'
import { areaArr, locationArrNorth, locationArrCenter, locationArrSouth, locationArrEast } from '../../apiComponents/weatherAPI'
import LocationArrComponents from './LocationArrComponents'
import ValueConmponents from './ValueConmponents'
import WeatherDetail from './WeatherDetail'
import { Container, Row, Col, Dropdown, DropdownButton, Button } from 'react-bootstrap'
import { ReactComponent as RefreshIcon } from './images/refresh.svg'

const WeatherContent = ({ currentWeather, setCurrentWeather, weatherHandler }) => {

  const [btnState, setBtnState] = useState(false)
  const [areaState, setAreaState] = useState('北部')

  const twoFuncForAreaChange = (areaArr) => {
    setAreaState(areaArr.area)
    setCurrentWeather({...currentWeather, locationName: ''})
  }

  const twoFuncForWeather = (weatherArr) => {
    setCurrentWeather({...currentWeather, locationName: weatherArr.location})
    setBtnState(true)
  }

  const twoFuncForChangeBtn = () => {
    weatherHandler()
    setBtnState(false)
  }

  return (
    <Container>
      <Row>
          <DropdownButton className='m-2' variant='light' title={`地區：${areaState}`}>
            { areaArr.map(arr =>
              <Dropdown.Item key={arr.areaid} href="#" onClick={() => twoFuncForAreaChange(arr)}>{arr.area}</Dropdown.Item>
            )}
          </DropdownButton>
          <LocationArrComponents currentWeather={currentWeather} areaState={areaState} locationArrNorth={locationArrNorth} locationArrCenter={locationArrCenter} locationArrSouth={locationArrSouth} locationArrEast={locationArrEast} twoFuncForWeather={twoFuncForWeather} />
        { btnState ?
          <Button className='m-2' variant='info' onClick={() => twoFuncForChangeBtn()}>Submit</Button> : ''
        }
        <Col className='m-2' xs={4} sm={2} md={1}>
          <Button variant="light" onClick={() => twoFuncForChangeBtn()}><RefreshIcon style={refreshSvg} /></Button>
        </Col>
      </Row>
      <WeatherDetail currentWeather={currentWeather} description={description} temperature={temperature} airFlow={airFlow} rain={rain} styleSvg={styleSvg} />
      <ValueConmponents currentWeather={currentWeather} textStyle={textStyle} />
    </Container>
  )
}

export default WeatherContent
