
// about destructung assignment https://javascript.info/destructuring-assignment
function list(names){
    out=''
    len=names.length
    if (len==0) {
      return out
    }
    else if (len==1) {
      return names[0]['name']
    }
    else {
      out= names[0]['name']
      //name=names[0]['name']
      //out = `${name}`
      for (let i=1; i<(len-1); i++) {
          out+=', '+ names[i]['name']
  
        }
      out+=' & ' + names[len-1]['name']
      return out
      }
  }

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))


