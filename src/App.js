import {useState} from 'react'
import './master.css'

function App(){

  return (
    <main>
      <div>
        <label>How many Dice?
          <input type="number"/>
        </label>

        <label>Number of sides in each Die?
          <select name="" id="">
            <option value="4">D4</option>
            <option value="6">D6</option>
            <option value="8">D8</option>
            <option value="10">D10</option>
            <option value="12">D12</option>
            <option value="20">D20</option>
          </select>
        </label>
      </div>

      <button>Roll The Dice</button>
      <div>#output</div>
    </main>
  )
}

export default App
