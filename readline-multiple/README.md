# Usage
```js
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
```

Result:
```
1. foo
2. bar
```

Input `1 3`, press `Enter`, get:
```
[ { pressKey: '1', display: 'foo', value: 'value_foo' },
  { pressKey: '3', display: 'baz', value: 'value_baz' } ]
```