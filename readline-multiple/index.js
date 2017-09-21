/**
 * Read multipe lines
 */

/*
 * linesData template:
   [{
     pressKey: '1',
     display: 'display name',
     value: 'value'
   }]
 */

var readlineSync = require('readline-sync')


/**
 * @param {*} linesData 
 * @param {*} questonTpl 
 */
function readMultipeLines(linesData, questionTpl) {
  questionTpl = questionTpl || function (linesData) {
    return linesData.map(
      function (data) {
        return data.pressKey + '. ' + data.display
      }
    )
      .join('\n')
      .concat('\n')
  }
  console.log(questionTpl(linesData))
  var input = readlineSync.question('')

  return {
    then(callback) {
      var inputs = input.split(' ')
      var results = linesData.filter(
        function (item) {
          return inputs.includes(item.pressKey)
        }
      )
      return callback && callback(results)
    }
  }
}


module.exports = readMultipeLines