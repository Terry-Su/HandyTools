const readMultipeLines = require('../index.js')

const linesData = [{
  pressKey: '1',
  display: 'React & redux',
  value: 'ReactReduxProjectPath'
}]


readMultipeLines(linesData).then(result => {
  console.log(result)
})