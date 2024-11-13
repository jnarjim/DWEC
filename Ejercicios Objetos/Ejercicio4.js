
function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }

let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
  };
  
  multiplyNumeric(menu);
  
  menu = {
    width: 400,
    height: 600,
    title: "Mi menú"
  };