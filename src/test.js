const Test = () => {
  const trees = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          { value: 4 },
          { value: 5 },
        ]
      },
      {
        value: 3,
        children: [
          { value: 6 },
          { value: 7 },
        ]
      }
    ]
  };

  function getTreeValues(tree) {
    let arr = [];
    tree.value && arr.push(tree.value);
    if (Array.isArray(tree.children)) {

      tree.children.forEach((el) => {
        arr = arr.concat(getTreeValues(el));
      })
    }
    return arr;
  }

  console.log('getTreeValues', getTreeValues(trees));

  function getUnique(arr) {
    let uniqueEl = [];
    arr.forEach((el) => {
      !uniqueEl.includes(el) && uniqueEl.push(el);
    })
    return uniqueEl;
  }

  console.log('unique', getUnique([1, 1, 2, 2, 4, 2, 3, 7, 3]))


  function getUniqueEl(arr) {
    let uniqueEl = [];
    let bla = {};
    arr.forEach((el) => {
      bla[el] ? bla[el] += 1 : bla[el] = 1;
    })
    console.log(bla);
    for (let key in bla) {
      bla[key] === 1 && uniqueEl.push(Number(key));
    }
    return uniqueEl;
  }

  console.log('uniqueEl', getUniqueEl([1, 1, 2, 2, 4, 2, 3, 7, 3]))

  function flat(deepArr) {
    let result = [];
    deepArr.forEach((el) => Array.isArray(el) ? result = result.concat(flat(el)) : result.push(el))
    return result;
  }

  console.log('flat', flat([1, [2, [3, [4, 5]]]]));

  function multiplyNum(arr) {
    return arr.filter((item) => typeof item === 'number').map((num) => num * 2);
  }

  console.log('multiplyNum', multiplyNum([1, 2, null, 7, 8, null, 3]));

  function getTreeSum(tree) {
    let sum = 0;
    tree.value && (sum += tree.value);
    if (Array.isArray(tree.children)) {

      tree.children.forEach((el) => {
        sum += getTreeSum(el);
      })
    }
    return sum;
  }

  console.log('getTreeSum', getTreeSum(trees));


  function oddSort(arr) {
    let result = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
    arr.map(num => {
      num % 2 === 0 && result.splice(arr.indexOf(num), 0, num)
    });
    return result;
  }

  console.log('oddSort', oddSort([7, 3, 4, 9, 5, 2, 17]))


  function isEqualSymbols(firstStr, secondStr) {
    if (firstStr.length !== secondStr.length) {
      return false;
    }

    return Array.from(firstStr).every((symbol) => Array.from(secondStr).includes(symbol))

    // if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
    //   return true;
    // }

    // return false;
  }

  console.log('isEqualSymbols', isEqualSymbols('кот', 'ток'));
  console.log('isEqualSymbols', isEqualSymbols('кот', 'тик'));


  function Bomb(time, message) {
    this.time = time;
    this.message = message;

    setTimeout(() => {
      this.showMessage();
    }, this.time);

    this.showMessage = function () {
      console.log(this.message);
    };
  }

  // new Bomb(3000, 'Boom!');
  // new Bomb(5000, 'Ha Ha Ha!');

  function rle(string) {
    let symbol = '';
    let count = 1;

    return string.split('').map((sym, index) => {
      if (sym === symbol) {
        count += 1;
        if (index === string.length - 1) {
          console.log('last');
          return count;
        }
      } else {
        symbol = sym;
        if (count > 1) {
          let res = `${count}${sym}`;
          count = 1;
          return res;
        }
        else {
          return sym;
        }
      }
    }).filter((item) => item !== undefined).join('');

  }

  console.log('rle', rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
  // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'
  console.log('rle', rle('ZZZABBEEE'));



  return (
    <div className="input-text">
    </div>
  );
};

export default Test;