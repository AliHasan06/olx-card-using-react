import React from 'react'

import Card from './components/Card';


const App = () => {
  return (
    <>
    <h1>olx</h1>
    <div className='flex justify-content-center mt-4 '><Card   title="google pixel" description="expensive phone" price="1000$"></Card>
    <Card  title="iphone X" description="battery health 91%" price="500%"></Card>
    <Card  title="Sony Xperia" description="black color" price="400$"></Card>
    <Card  title="iphone 12" description="battery health 91%" price="550%"></Card>
    <Card  title="Kia Stonic" description="fresh import" price="10000$"></Card>
    <Card  title="Toyota corrolla" description="2010 model" price="20000$"></Card></div>
    </>
  )
}

export default App