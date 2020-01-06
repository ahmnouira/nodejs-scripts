let o = [
   { "stars" : 40, "uid": 1 }, 
   { "stars" : 20, "uid" : 1 },
   { "stars" :5, "uid": 2},
   { "stars" :1, "uid": 2},
   { "stars" :70, "uid": 3},        
]

// get the uids
let uids =  o.map(v => v.uid).filter((value, index, array) => {

    return array.indexOf(value) === index;    
})
console.log('uids:', uids);

let totalS = [];
// get total starts to each uid
uids.forEach((uid, index, array) => {
    totalS.push(o.filter((value) => value.uid === uid).map((value, index, array) => value.stars).reduce((p, c) => p +c ))
})

let data = [{}]; 
// build the data 
for (let i = 0; i < uids.length; i ++) {
    data[i] = {
            'uid' : uids[i],
            'stars' : totalS[i]
      }
} 

console.log('data', data);

