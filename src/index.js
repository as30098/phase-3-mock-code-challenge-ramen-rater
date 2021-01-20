// stable elements at the top
let ramenMenu = document.querySelector('#ramen-menu')
let ramenDetail = document.querySelector('#ramen-detail')
let ramenRatingForm = document.querySelector('#ramen-rating')

// fetch all of the data in the database currently and populate images
fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then((ramenObj) =>
  ramenObj.forEach(ramen =>
    turnRamenIntoImg(ramen)
  ));

// turning url into img in div
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
ramenMenu.addEventListener('click', function(e) {
  e.preventDefault()
  // target image
  let ramenImg = document.querySelector('.detail-image')
  //update
  ramenImg.src.innerHTML = e.target.outerHTML
  console.log(e.target.outerHTML)

  // //target name
  // let ramenName = document.querySelector('.name')
  // //update
  // ramenName.innerText =

  // //target restaurant
  // let ramenRestaurant = document.querySelector('.restaurant')
  // //update
  // ramenRestaurant.innerText =
})

// update rating and comment - event listener
ramenRatingForm.addEventListener('submit', ratingAndComment)

let ratingAndComment = (evt) => {
  // evt.preventDefault() is needed to avoid refresh
   evt.preventDefault()
  // still slightly shaky on how to target object id
  fetch(`http://localhost:3000/ramens/${ramen.id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    },
    // the data is the user input...needs to be transformed to fit database
    // need to create the data variable still...
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(data => {
    // update rating
    // update comment
    // persist to the database
    // update the DOM with new info
  })
  .catch((error) => {
    console.error('Error:', error);
  })
}





