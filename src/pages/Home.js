import React from 'react';
import BasicElements from '../components/BasicElements';
import Intro from '../components/Intro';
import Form from '../components/Form';
import Menu from '../components/Menu';
import Colornav from '../components/Colornav';
import Tabs from '../components/Tabs';
import Alerts from '../components/Alerts'
import Typography from '../components/Typography';
import DisplayTitles from '../components/DisplayTitles';
import SpecalizedTitles from '../components/SpecalizedTitles';
import Paragraphys from '../components/Paragraphys';
import Images from '../components/Images';
import Corusel from '../components/Corusel';
import Nucleo from '../components/Nucleo'


function Home() {
  return (
    <div>
      <Intro />
      <BasicElements />
      <Form/>
      <Menu/>
      <Colornav/>
      <Tabs/>
      <Alerts/>
      <Typography/>
      <DisplayTitles/>
      <SpecalizedTitles/>
      <Paragraphys/>
      <Images/>
      <Corusel/>
      <Nucleo/>
    </div>

  )
}

export default Home
