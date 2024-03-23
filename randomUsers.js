fetch('https://randomuser.me/api/?results=2')
.then(response => response.json())
.then(user => {
    console.log(user);
    for(let i=0; i < user.results.length; i++) {
        let detailedContainer = document.createElement("div");
     //   detailedContainer.classList.add("card");

      //  let userImage = document.createElement("img");

        let nameTag = document.createElement("p");
        let genderTag = document.createElement("p");
        let emailTag = document.createElement("p");
        let phoneTag = document.createElement("p");
        let locationNumberTag = document.createElement("p");
        let cityTag = document.createElement("p");
        let timeZoneTag = document.createElement("p");
        let DobTag = document.createElement("p");
        let CountryTag = document.createElement("p")
        let userImage = document.createElement("img");



        // let genderTag = document.createElement("p");
        // let emailTag = document.createElement("p");

        nameTag.innerText = user.results[i].name.first + " " + user.results[i].name.last;
        genderTag.innerText = user.results[i].gender;
        emailTag.innerText = user.results[i].email;
        phoneTag.innerText = user.results[i].phone;
        locationNumberTag.innerText = user.results[i].location.street.number;
        cityTag.innerText = user.results[i].location.city;
        timeZoneTag.innerText = user.results[i].location.timezone.description;
        DobTag.innerText = user.results[i].dob.age;
        CountryTag.innerText = user.results[i].location.country;

        


        userImage.src = user.results[i].picture.large;

        // src = link a URL 




// in order to define the innerText, you have to appendchild
        detailedContainer.appendChild(userImage);
        detailedContainer.appendChild(nameTag);
        detailedContainer.appendChild(genderTag);
        detailedContainer.appendChild(emailTag);
        detailedContainer.appendChild(phoneTag);
        detailedContainer.appendChild(locationNumberTag);
        detailedContainer.appendChild(cityTag);
        detailedContainer.appendChild(timeZoneTag);
        detailedContainer.appendChild(DobTag);
        detailedContainer.appendChild(CountryTag);

        document.body.appendChild(detailedContainer);
    }
})


//console.log(data.results[0])

