import React from 'react'
import BillInput from './BillInput'
import SelectPercentage from './SelectPercentage'
import Output from './Output'
import Reset from './Reset'

function TipCalculator() {
  return (
    <div>
        <BillInput />
        <SelectPercentage />
        <Output />
        <Reset />
    </div>
  )
}

export default TipCalculator