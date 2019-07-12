let registerForm = document.getElementById('registerForm');
let submit = document.getElementById('submitButton');
let addAttendee = document.getElementById('addAttendee');
let attendeeCounter = 0;

registerForm.addEventListener('submit', (e) => {
    //console.log(registerForm.elements[0].value);
    e.preventDefault();
    let attendees = [];
    if(attendeeCounter > 0) {
        switch(attendeeCounter) {
            case 1:
                attendees.push({firstName: registerForm.elements[5].value,
                                lastName: registerForm.elements[6].value, email: registerForm.elements[7].value});
                break;
            case 2:
                attendees.push({firstName: registerForm.elements[5].value,
                    lastName: registerForm.elements[6].value, email: registerForm.elements[7].value},
                    {firstName: registerForm.elements[8].value,
                        lastName: registerForm.elements[9].value, email: registerForm.elements[10].value});
                break;
            case 3:
                attendees.push({firstName: registerForm.elements[5].value,
                        lastName: registerForm.elements[6].value, email: registerForm.elements[7].value},
                    {firstName: registerForm.elements[8].value,
                        lastName: registerForm.elements[9].value, email: registerForm.elements[10].value},
                    {firstName: registerForm.elements[11].value,
                        lastName: registerForm.elements[12].value, email: registerForm.elements[13].value});
                break;
            case 4:
                attendees.push({firstName: registerForm.elements[5].value,
                        lastName: registerForm.elements[6].value, email: registerForm.elements[7].value},
                    {firstName: registerForm.elements[8].value,
                        lastName: registerForm.elements[9].value, email: registerForm.elements[10].value},
                    {firstName: registerForm.elements[11].value,
                        lastName: registerForm.elements[12].value, email: registerForm.elements[13].value},
                    {firstName: registerForm.elements[14].value,
                        lastName: registerForm.elements[15].value, email: registerForm.elements[16].value});
                break;
            case 5:
                attendees.push({firstName: registerForm.elements[5].value,
                        lastName: registerForm.elements[6].value, email: registerForm.elements[7].value},
                    {firstName: registerForm.elements[8].value,
                        lastName: registerForm.elements[9].value, email: registerForm.elements[10].value},
                    {firstName: registerForm.elements[11].value,
                        lastName: registerForm.elements[12].value, email: registerForm.elements[13].value},
                    {firstName: registerForm.elements[14].value,
                        lastName: registerForm.elements[15].value, email: registerForm.elements[16].value},
                    {firstName: registerForm.elements[17].value,
                        lastName: registerForm.elements[18].value, email: registerForm.elements[19].value});
                break;
        }
    }
    console.log(attendees);

    let projectData = {
        projectName: registerForm.elements.projectName.value,
        projectDescription: registerForm.elements.projectDescription.value,
        studentCreator: {
            firstName: registerForm.elements.organiserFirstname.value,
            lastName: registerForm.elements.organiserLastname.value,
            email: registerForm.elements.organiserEmail.value
        },
        studentsAttendees: attendees
    };

    console.log(projectData);

    let req = new XMLHttpRequest();
    req.open("POST", '/');
    req.setRequestHeader("Content-Type", "application/json");
    projectData = JSON.stringify(projectData);
    req.send(projectData);

});

addAttendee.addEventListener('click', function onAdd(e) {
    attendeeCounter++;
    if(attendeeCounter === 5) addAttendee.removeEventListener('click', onAdd);
    console.log(attendeeCounter);
    let attendeeParaElt = document.createElement('p');
    let attendeeFirstnameLabelElt = document.createElement('label');
    attendeeFirstnameLabelElt.textContent = 'Prénom du participant N°: '+attendeeCounter;
    let attendeeFirstnameInputElt = document.createElement('input');
    attendeeFirstnameInputElt.type = 'text';
    attendeeFirstnameInputElt.name = 'attendeeFirstname';
    attendeeFirstnameInputElt.setAttribute('required', 'true');
    let attendeeLastnameLabelElt = document.createElement('label');
    attendeeLastnameLabelElt.textContent = 'Nom du participant N°: '+attendeeCounter;
    let attendeeLastnameInputElt = document.createElement('input');
    attendeeLastnameInputElt.type = 'text';
    attendeeLastnameInputElt.name = 'attendeeLastname';
    attendeeLastnameInputElt.setAttribute('required', 'true');
    let attendeeMailLabelElt = document.createElement('label');
    attendeeMailLabelElt.textContent = "Mail du participant N°: "+attendeeCounter;
    let attendeeMailInputElt = document.createElement('input');
    attendeeMailInputElt.type="email";
    attendeeMailInputElt.name = 'attendeeEmail';
    attendeeMailInputElt.setAttribute('required', 'true');
    registerForm.insertBefore(attendeeParaElt,addAttendee);
    registerForm.insertBefore(attendeeFirstnameLabelElt,addAttendee);
    registerForm.insertBefore(attendeeFirstnameInputElt,addAttendee);
    registerForm.insertBefore(attendeeLastnameLabelElt,addAttendee);
    registerForm.insertBefore(attendeeLastnameInputElt,addAttendee);
    registerForm.insertBefore(attendeeMailLabelElt,addAttendee);
    registerForm.insertBefore(attendeeMailInputElt,addAttendee);

});
