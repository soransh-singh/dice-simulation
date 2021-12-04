import {useState} from 'react'
import './master.css'

function App(){
  const [data, setData] = useState({
    throws: "1",
    sides: "6"
  })

  const [isRolled, setIsRolled] = useState(false)

  const [output, setOutput] = useState({
    eachResult: [],
    string: "",
    sum: 0
  })

  function handleChange(event) {
    const {name, value} = event.target
    setData(prevData =>({
      ...prevData,
      [name]: value
    }))
  }

  function handleRoll(event) {
    event.preventDefault()
    setIsRolled(true)
    setOutput({
      eachResult: [],
      string: "",
      sum: 0
    })

    let temp = []
    for (let i = 0; i < data.throws; i++) {
      const num = Math.ceil(Math.random()*data.sides)
      temp.push(num)
    }

    setOutput((prevOutput)=>({
      ...prevOutput,
      string: `${data.throws} D${data.sides} dice is rolled!!!`,
      eachResult: [...temp],
      sum: temp.length? temp.reduce((total, num)=>total+num): 0
    }))

  }


  return (
    <div>
      <header>
        <h1 className="logo"><i class="fas fa-dice-d20"></i> Dice Simulation</h1>
      </header>
      <main className="container">
        <form onSubmit={handleRoll} className="form grid">
          <div className="flex">
            <input
              type="number"
              name="throws"
              id="throws"
              value={data.throws}
              onChange={handleChange}
            />
            <label htmlFor="throws">How many Dice?</label>

        </div>

          <div className="flex">
            <select
              name="sides"
              id="sides"
              value={data.sides}
              onChange={handleChange}
            >
              <option value="4">D4</option>
              <option value="6">D6</option>
              <option value="8">D8</option>
              <option value="10">D10</option>
              <option value="12">D12</option>
              <option value="20">D20</option>
            </select>
            <label htmlFor="sides">Number of sides in each Die?</label>

          </div>

          <button className="btn">Roll The Dice <i class="fas fa-dice"></i></button>

        </form>

        {isRolled &&
          <div className="output">
            <h3>{output.string}</h3>
            <p>This is your result</p>
            <p>| {output.eachResult.join(" | ")} |</p>
            <h2>sum : {output.sum}</h2>
          </div>}

      </main>
    </div>
  )
}

export default App
