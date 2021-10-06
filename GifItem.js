class GifItem{
    constructor({img, buttonPosition, buttonText}, container){
        this.img = createImg('assets/' + img, buttonText)
        this.img.position(0,0)
        this.img.hide()
        this.button = createButton(buttonText)
        this.button.mousePressed(this.toggle)
        console.log(container)
        container.appendChild(this.button.elt)
        this.toggled = false
        this.allItems = null
    }

    toggle = () => {
        console.log('toggling', this.toggled)
            this.allItems.forEach(item => {
                item.toggled = false   
                item.button.elt.className = ''           
            }) 
        this.toggled = !this.toggled
        this.button.elt.className  = 'selectedButton'
    }

    hide(){
        this.img.hide()
    }

    show(){
        this.img.show()
    }
}