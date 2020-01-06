let qualities = [

    { id: 1, name: "Friendly", image: 'Friendly.jpg'},
    { id: 2, name: "Equality", image: 'Equality.jpg'},
    { id: 3, name: "Humour", image: 'humour.jpg'},
    { id: 4, name: "Understand", image: 'understand.jpg'},
    { id: 5, name: "Honest", image: 'honest.jpg'},
    { id: 6, name: "Change", image: 'change.jpg'},

]

let quality = 

{ id: 1, name: "Friendly", image: 'Friendly.jpg'}


let notes = [

    {Friendly: 5, Equality: 4, Humour: 5, Understand: 5, Honest: 0, Change: 5},
    {Friendly: 5, Equality: 3, Humour: 4, Understand: 2, Honest: 0, Change: 5}, 
    {Friendly: 5, Equality: 2, Humour: 5, Understand: 3, Honest: 0, Change: 5},  
]


let noteE = notes.map((notes) => notes.Equality).reduce((p, c) => p + c );

let noteH = notes.map((notes) => notes.Humour).reduce((p, c) => p + c ); 


/* function sum(name) {
    console.log('name', name)
  return  notes.map((note) => note[name]).reduce((p, c) => p + c)
} 
 */ 

// qualities.map((quality) => quality['vote'] = sum(quality.name))


 qualities.map((quality) => {

    quality['stars'] = notes.map((note) =>  note[quality.name]).reduce((p, c) => p + c ); 
    quality['voters'] = notes.length;    
    quality['moy'] = (quality['stars'] / notes.length).toFixed(2); 
   
    });


notes.map((value, index, array) => {
    value.Change * 3; 
}) 


console.log(notes);
