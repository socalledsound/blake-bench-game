
let man
const numGifs = 3
let gifItems

const container = document.getElementById('buttonContainer')

function preload() {
  // not sure what this does
  man = loadImage('assets/man.png');
  // let's load them all from the data thing in another file
  gifItems = Array.from({length: numGifs}, (el, i) => {
    return new GifItem(GIFDATA[i], container)
  })  
  // afterwards add them all to themselves
  // there's better ways to do this but it gets complicated
  gifItems.forEach(item => {
    item.allItems = gifItems
  })

}
  

function setup() {
  createCanvas(400, 400);
  background(220,220,50);

}

// now we just have to loop over them all
function draw() {
    gifItems.forEach( item => {
      if(item.toggled){
        item.show()
      }else{
        item.hide()
      }
    })
}
