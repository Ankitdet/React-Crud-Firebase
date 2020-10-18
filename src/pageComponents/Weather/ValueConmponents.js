import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ValueConmponents = ({ currentWeather, textStyle }) => {

  const huivSwitch = () => {
    switch(true) {
      case (0 <= currentWeather.huiv && currentWeather.huiv < 3):
        return('低量級')
      case (3 <= currentWeather.huiv && currentWeather.huiv < 6):
        return('中量級')
      case (6 <= currentWeather.huiv && currentWeather.huiv < 8):
        return('高量級')
      case (8 <= currentWeather.huiv && currentWeather.huiv < 11):
        return('過量級')
      case (11 <= currentWeather.huiv):
        return('危險級')
      default:
        return('低量級')
    }
  }

  return (
    <>
      <Row style={textStyle}>
        <Col xs={12} md={6} lg={4} xl={4} >
          <div className='mr-2 mt-4'>{currentWeather.pers} hpa</div>
        </Col>
        <Col xs={12} md={6} lg={4} xl={4} >
          <div className='mr-2 mt-4'>{currentWeather.hfx} 公尺/秒</div>
        </Col>
        <Col xs={12} md={6} lg={4} xl={4} >
          <div className='mr-2 mt-4'> 紫外線：
            { currentWeather && huivSwitch() }
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ValueConmponents
