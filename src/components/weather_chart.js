import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function WeatherChart({data, color}) {

  return (
    <Sparklines height={50} margin={5} data={data}>
      <SparklinesLine color={color} />
    </Sparklines>
  )
}
