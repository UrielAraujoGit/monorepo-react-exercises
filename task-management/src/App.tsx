import { useState } from 'react'
import './App.css'
import { Boards } from './components/boards/boards'
import BoardsProvider from './components/board-context/boards-context.provider'



function App() {

  const [btnOnOffNewBoard, setBtnOnOffNewBoard] = useState(false)

  const fnBtnOnOffNewBoard = () => {
    setBtnOnOffNewBoard(!btnOnOffNewBoard)
  }


  return (
    <>
           
        <BoardsProvider>
          <Boards
            fnBtnOnOffNewBoard={fnBtnOnOffNewBoard}
            btnOnOffNewBoard={btnOnOffNewBoard}
          ></Boards>
        </BoardsProvider>
      
    </>
  )
}

export default App
