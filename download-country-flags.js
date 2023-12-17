import { utilService } from './util.service.js';

downloadCountryFlags()

function downloadCountryFlags() {
  const countries = getCountries()
  downloadFlags(countries)
    .then(() => {
      console.log('Your flags are ready')
    })
}

function getCountries() {
  const countries = utilService.readJsonFile('./newCountries.json')

  const sortedCountries = countries.sort((countryA, countryB) => countryA.population - countryB.population)
  const top5Countries = sortedCountries.splice(1, 5)

  return top5Countries
}

function downloadFlags(countries) {
  const prms = countries.map(country => {
    return utilService.download(country.flags.png, `./img/${country.name.common}.png`)
  })
  return Promise.all(prms)
}