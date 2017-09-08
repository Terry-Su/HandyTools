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

const readlineSync = require('readline-sync')


/**
 * @param {*} linesData 
 * @param {*} questonTpl 
 */
function readMultipeLines(linesData, questonTpl) {
  questonTpl = questonTpl || (
    () => linesData.map(data => `${data.pressKey} ${data.display}`).join('\n')
  )
  const input = readlineSync.question(
    questonTpl(linesData)
  )

  return {
    then(callback) {
      const inputs = input.split(' ')
      const results = linesData.filter(item => inputs.includes(item.pressKey))
      return callback && callback(results)
    }
  }
}


module.exports = readMultipeLines