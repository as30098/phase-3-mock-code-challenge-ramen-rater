// stable elements at the top
let ramenMenu = document.querySelector('#ramen-menu')

// fetch all of the data in the database currently

fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then((ramenObj) =>
  ramenObj.forEach(ramen =>
    turnRamenIntoImg(ramen)
  ));


// unstable element creation
let turnRamenIntoImg = (ramen) => {

  // artisanal way of creating elements
  // element creation
  let ramenImg = document.createElement('img')
  // attribute creation
  ramenImg.src = ramen.image
  // relationship creation
  ramenMenu.append(ramenImg)


}

// click individual ramen - event listener
ramenMenu.addEventListener('click', function() {

})



  // query on outer element

  // create event listeners for newly created elements

  // update rating and comment - event listener
    // evt.preventDefault() is needed to avoid refresh







