fetch("https://randomuser.me/api/?results=2")
.then((response) => response.json())
.then ((user) =>{
    // console.log(data);

for(let i=0 ; i < user.results.length; i++ ) {
    let detailedContainer = document.createElement("div");
    detailedContainer.classList.add("card");

    let genderTag = document.createElement("p")
    let nameTag = document.createElement("p")
    let emailTag = document.createElement("p")
    let phoneTag = document.createElement("p")
    let locationTag = document.createElement("p")
    let UserImage = document.createElement("img")


    genderTag.innerText = user.results[i].gender;
    emailTag.innerText = user.results[i].email;
    phoneTag.innerText = user.results[i].phone;
    nameTag.innerText = user.results[i].name.first + " " + user.results[i].name.last;
    UserImage.src = user.results[i].picture.thumbnail;
    locationTag.innerText = user.results[i].location.street.number
    

    detailedContainer.appendChild(genderTag);
    detailedContainer.appendChild(nameTag);
    detailedContainer.appendChild(emailTag);
    detailedContainer.appendChild(phoneTag);
    detailedContainer.appendChild(UserImage);
    detailedContainer.appendChild(locationTag);

    document.body.appendChild(detailedContainer);

}
console.log(data)

})