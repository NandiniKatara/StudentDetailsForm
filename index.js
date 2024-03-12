function submitPersonDetails() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const rollNo = document.getElementById("rollNo").value;
    const dob=document.getElementById("dob").value;
    const hobbies=document.getElementById("hobbies").value;
    if (firstName === "" || lastName === "" || age === "" || gender === "" || rollNo === "" || dob==="" || hobbies==="") {
alert("Please fill in all fields.");
return;
}
alert("Details added Successfully !!")
    // const personDetails = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     age: age,
    //     gender: gender,
    //     rollNo: rollNo
    // };
    let personsArray = [];
    if(localStorage.getItem("studentDatabase")){
        personsArray = JSON.parse(localStorage.getItem("studentDatabase"));
    }
    let personDetails = { rollNo: rollNo, firstName: firstName, lastName: lastName, age: age, gender: gender, dob:dob ,hobbies:hobbies };
    personsArray.push(personDetails);
    let detailString = JSON.stringify(personsArray);

    localStorage.setItem("studentDatabase", detailString);
}

function displayDetails(event) {
    event.preventDefault(); 
    const rollToSearch = document.getElementById("roll").value;
    let personsArray = [];
    if(localStorage.getItem("studentDatabase")){
        personsArray = JSON.parse(localStorage.getItem("studentDatabase"));
    }

    console.log("recieved value ", personsArray)

    const foundPerson = personsArray.find(person => person.rollNo == rollToSearch);
    console.log("found person is", foundPerson)
    const detailsContent = document.getElementById("detailsContent");
    const myDetails = document.getElementById("myDetails");
    if (foundPerson) {
        detailsContent.innerHTML = `
            <strong>Roll Number:</strong> ${foundPerson.rollNo}<br>
            <strong>First Name:</strong> ${foundPerson.firstName}<br>
            <strong>Last Name:</strong> ${foundPerson.lastName}<br>
            <strong>Age:</strong> ${foundPerson.age}<br>
            <strong>Gender:</strong> ${foundPerson.gender}<br>
            <strong>Date of Birth:</strong> ${foundPerson.dob}<br>
            <strong>Hoobies:</strong> ${foundPerson.hobbies}<br>

        `;
    } else {
        detailsContent.innerHTML = "Student not found with the this Roll Number.";
    }
}