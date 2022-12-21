import { useState, useEffect} from 'react'
import axios from 'axios'

const OneNote = ({country}) => {
  return (
    <li>
      <p>{country.name.common}</p>
    </li>
  )
}

const CountryDetail = ({ country }) => {
  return (
    <div>
      <h2>name: {country.name.common}</h2>
      <p>area: {country.area}</p>
      <p>language: {Object.keys(country.languages).map((key, index) => {
        return (
          <small>      { key }: {country.languages[key]} </small>
        )
      })}</p>
      <p>flag: {country.flag}</p>
    </div>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [initCountries, setInitCountries] = useState([])
  let promptWord = 'Please input more detail'
  const hooks = () => {
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data)
        setInitCountries(response.data)
      })
  }

  useEffect(hooks, [])

  const handleFilterCountry = (event) => {
    let inputCountry = event.target.value;
    let filteredCountry = []
    initCountries.map(country => {
      if (country.name.common.includes(inputCountry) === true) {
        filteredCountry.push(country)
      }
    })
    if (filteredCountry.length > 1) {
      promptWord = 'Please input more detail'
    } else {
      promptWord = ''
    }
    setCountries(filteredCountry)
  }

  if (countries.length === 1) {
    return (
      <div>
        <form>
          <input onChange={handleFilterCountry} placeholder='input filter country'></input>
        </form>
        <CountryDetail country={countries[0]} />
      </div>
    )
  } else {
    return (
      <div>
        <form>
          <small>{promptWord}:   </small>
          <input onChange={handleFilterCountry} placeholder='input filter country'></input>
        </form>
        <ul>
          {countries.map(country => <OneNote key={country.name.common} country={country} />)}
        </ul>
      </div>
    )
  }
}

export default App