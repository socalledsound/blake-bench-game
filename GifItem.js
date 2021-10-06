class GifItem{
    // not using the button position any more....
    constructor({img, buttonPosition, buttonText}, container){
        this.img = createImg('assets/' + img, buttonText)
        this.img.position(0,0)
        this.img.hide()
        this.button = createButton(buttonText)
        this.button.mousePressed(this.toggle)
        console.log(container)
        // i'm adding the button as a child of the container I made so the buttons go below the canvas
        container.appendChild(this.button.elt)
        this.toggled = false
        this.allItems = null
    }

    toggle = () => {
        console.log('toggling', this.toggled)
        // first we have to set everything to untoggled
            this.allItems.forEach(item => {
                item.toggled = false   
                item.button.elt.className = ''           
            }) 
            //then we'll set our thing's toggle value
        this.toggled = !this.toggled
        // this is just for styling in the css (on the index.html page )
        this.button.elt.className  = 'selectedButton'
    }

    hide(){
        this.img.hide()
    }

    show(){
        this.img.show()
    }
}