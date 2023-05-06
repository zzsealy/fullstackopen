import Notes from "./components/Notes"
import NewNote from "./components/NewNote"

const App = () => {

  return(
    <div>
      < NewNote />
      <div>
        all <input type='radio' name='filter'
          onChange={() => filterSelect('ALL')} />
        important <input type='radio' name='filter'
          onChange={() => filterSelect('IMPORTANT')} />
        nonimportant <input type='radio' name='filter'
          onChange={() => filterSelect('NONIMPORTANT')} />
      </div>
      < Notes />
    </div>
  )
}

export default App