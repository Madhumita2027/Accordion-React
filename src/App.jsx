import { useState } from 'react'
import { questions } from './api.js'
import MyAccordian from './MyAccordian'


function App() {
  
  const [data, setData] = useState(questions)

  return(
    <>
      <div className='text-white w-screen h-screen flex justify-center items-center'>
        <div className='w-1/2 h-3/4 bg-white text-black rounded-2xl flex flex-col items-center p-4'>
          <h1 className='text-2xl font-sans pb-3 underline underline-offset-4'>React Interview Questions</h1>
          <section className='flex flex-col'>
          {
              data.map( (curElem) => {
                return <MyAccordian key={curElem.id} {...curElem} />
              })
            }          
          </section>
        </div>
      </div>
    </>
  )
}

export default App