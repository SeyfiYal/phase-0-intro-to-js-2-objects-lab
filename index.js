





function updateObjectWithKeyAndValue(employee,object, key, value) {
    var newObj = Object.assign({}, object, {[key]: value});
    return newObj;
  }
  

