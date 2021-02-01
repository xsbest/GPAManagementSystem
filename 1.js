var arr = [{
    name: '1级',
    children: [{
      name: '1-1级',
      children: [{
        name: '1-1-1级'
      }]
    }]
  },
  {
    name: '2级',
    children: [{
        name: '2-1级',
        children: [{
            name: '2-1-1级',
            children: []
          },
          {
            name: '2-1-2级',
            children: []
          }
        ]
      },
      {
        name: '2-2级',
        children: []
      }
    ]
  }
]

var throwObj = function (arr, target) {
  var res
  var path = []
  A(arr, target)

  function judgeFather(item, key) {
    while (key.length > 0) {
      key = key.substring(key, key.length - 2)
      if (item === key) {
        return true
      }
    }
    return false
  }
  // 找出父节点编号
  function B(arr, target) {
    // console.log(arr, target.key);
    console.log(judgeFather('1', '2-1'))
    return arr.filter((i) => {
      return judgeFather(i, target.key)
    })
  }

  function A(arr, target, item) {
    let num = ''
    if (item) {
      num = item.key + '-'
      path.push(item.key)
    }
    arr.forEach((i, index) => {
      i.key = num + (index + 1)
      // console.log(i);
      const {
        children,
        name
      } = i
      if (name == target) {
        res = i
      } else {
        if (children) {
          res == undefined ? A(children, target, i) : A(i.children, target)
        }
      }
    })
  }
  console.log(B(path, res))
  return B(path, res)
}
throwObj(arr, '2-1级')
// console.log(throwObj(arr, '2-1级'));
