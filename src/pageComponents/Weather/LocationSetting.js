import React, { useState } from 'react'

// STEP 1：匯入 availableLocations
import { availableLocations } from './utils'

// ...
// STEP 2：從 availableLocations 取出 cityName 來做為讓使用者可以選擇地區的清單
const locations = availableLocations.map((location) => location.cityName)

const LocationrSetting = ({ setCurrentPage }) => {
  // ...
}

export default LocationrSetting
