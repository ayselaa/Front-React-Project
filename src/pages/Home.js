import React from 'react';
import BasicElements from '../components/BasicElements';
import Intro from '../components/Intro';
import Form from '../components/Form';
import Menu from '../components/Menu';
import Colornav from '../components/Colornav';
import Tabs from '../components/Tabs';

function Home() {
  return (
    <div>
      <Intro />
      <BasicElements />
      <Form/>
      <Menu/>
      <Colornav/>
      <Tabs/>
    </div>
  )
}

export default Home
