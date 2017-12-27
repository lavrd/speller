const url = 'https://speller.yandex.net/services/spellservice.json/checkText?text='
const options = '&options=2095'

export default (text) => {
  return fetch(url + text + options).then(response => {
    return response.json()
  })
}
