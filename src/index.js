module.exports = function check(str, bracketsConfig) {
  
   
  let pars = bracketsConfig.map(
  function double( letter ) {
    return letter.join('');
  }); //Вызываем функцию для каждого элемента, формируем новый массив из пар скобок.
  
  for (let i = str.length; i >= 0; i--) {  // цикл работает, пока длинна строки не достигнет 0.
    for (let j = 0; j < pars.length; j++) {  // перебираем пары скобок
        if (str.includes(pars[j])) {          // проверяем поочерёдно - содержит ли строка пару.
            str = str.replace(pars[j], '');   // если да - заменяем её на пустое место
        }
    }

  }
  if( str.length == 0){   // если после всего строка стала ровна 0 - правда
     return true
  } else { return false}  // иначе ложь
}
