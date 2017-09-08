var readMultipeLines = require('readline-multiple')

var linesData = [
  {
    pressKey: '1',
    display: 'foo',
    value: 'value_foo'
  },
  {
    pressKey: '2',
    display: 'bar',
    value: 'value_bar'
  },
  {
    pressKey: '3',
    display: 'baz',
    value: 'value_baz'
  }
]

var questionTpl = function(linesData) {
  return linesData.map(
    function(data) {
      return data.pressKey + '. ' + data.display
    }
  )
  .join('\n')
  .concat('\n')
}

readMultipeLines(linesData, questionTpl)
  .then(data => {
    console.log(data)
  })