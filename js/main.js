// Create an E-commerce gallery using constructor notation
// Dynamically create your elements using JavaScript
// Use bootstrap to style it and display the items evenly
// possible additions: Build a website around it, put it into a slider, create a modal that pops up when one of the shirts is clicked, create a maginifier effect, etc.


// create a function with constructor notation
function Shirt(name, size, color, stock, image) {
	this.name = name
	this.size = size
	this.color = color
	this.stock = stock
	this.image = image
}


// create array
var shirtArray = new Array

var blacktee = new Shirt("Black Tee", "medium", "black", 150, "img/blackTee.png")
var bluetee = new Shirt("Blue Tee", "medium", "blue", 150, "img/blueTee.png")
var darkbluetee = new Shirt("Dark Blue Tee", "medium", "dark blue", 150, "img/darkblueTee.png")
var greytee = new Shirt("Grey Tee", "medium", "grey", 150, "img/greyTee.png")
var pinktee = new Shirt("Pink Tee", "medium", "pink", 150, "img/pinkTee.png")
var redtee = new Shirt("Red Tee", "medium", "red", 150, "img/redTee.png")


// Push into the array
shirtArray.push(blacktee)
shirtArray.push(bluetee)
shirtArray.push(darkbluetee)
shirtArray.push(greytee)
shirtArray.push(pinktee)
shirtArray.push(redtee)


// create next nodes 
for(i = 0; i < shirtArray.length; i++){
	var tName = document.createTextNode(shirtArray[i].name)
	 tSize = document.createTextNode("Available size:" + shirtArray[i].size)
	 tColor = document.createTextNode("Color: " + shirtArray[i].color)
	 tStock = document.createTextNode("In stock: " + shirtArray[i].stock)
	 tButton = document.createTextNode("Buy Now!")
	 tImage = shirtArray[i].image


// create the elements
	var newCol = document.createElement("DIV")
	 newDiv =  document.createElement("DIV")
	 nameH1 = document.createElement("H1")
	 sizeH4 = document.createElement("H4")
	 colorH4 = document.createElement("H4")
	 stockH4 = document.createElement("H4")
	 buyNow = document.createElement("BUTTON")
	 image = document.createElement("IMG")

// append text nodes and elements
nameH1.appendChild(tName)
sizeH4.appendChild(tSize)
colorH4.appendChild(tColor)
stockH4.appendChild(tStock)
buyNow.appendChild(tButton)
buyNow.className = "btn btn=primary btn"
image.src = tImage
image.className = "img-responsive"

newCol.className = "col-sm-4"
newDiv.className = "tshirt shirtName" + i + " thumbnail"
newDiv.appendChild(nameH1)
newDiv.appendChild(image)
newDiv.appendChild(sizeH4)
newDiv.appendChild(colorH4)
newDiv.appendChild(stockH4)
newDiv.appendChild(buyNow)
newCol.appendChild(newDiv)

	document.getElementById("shirts").appendChild(newCol)

}

