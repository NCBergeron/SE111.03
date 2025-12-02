//Getting the food image tag
var foodImage = document.getElementById("food")

//Getting the button
var foodButton = document.getElementById("foodButton")

//Creating a method that changes the src of the image
function changeImage() {
    console.log(foodImage.src)
    foodImage.src = "hotdog.png"
}

//If the button is clicked, execute the changeImage
foodButton.addEventListener('click', changeImage)


//----------------- Parent and Child Objects -----------------

//Getting the first child

//Gets the first child that is a p tag
document.querySelector('p')


var divPTag = document.getElementById("divContainer").children[0];

//Giving the p tag in the class of bigText
divPTag.setAttribute('id','bacon')

var test = document.getElementById('bacon')


console.log()

document.createElement('')
h1Element.innerText ="This is a new h1 tag"
console.log(h1Element)
divPTag.appendChild(h1Element)

//Method to nuke div container
function bf()
{
    var aboutToDieDiv = document.getElementById('divContainer')
    //document remove child
    document.querySelector('body').removeChild(aboutToDieDiv)
}
document.querySelector('body'),

//Button that executes order 66
document.getElementById('order66').addEventListener('click',bf)


//Get all elements with the name tag
var names = document.querySelectorAll('.names')

for(var i = 0; i < names.length; i++)
{
    console.log(names[i].innerText)
}
        

//Query Selection | Advanced

var adnanceDiv = document.getElementById("advanced")
//Getting the element of the id advanced then grabbing the first element h2
console.log(document.querySelector("#advanced h2").innerText)
//Getting the element of the id advanced then grabbing the first element h2 then the second element p
console.log(document.querySelector("#advanced h2 p").innerText)
//Getting the element of the id advanced then grabbing the first element 
console.log(document.querySelector("#advanced #generalgrevious").innerText)