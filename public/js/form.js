let registerForm = document.getElementById('registerForm');
let submit = document.getElementById('submitButton');
let addAttendee = document.getElementById('addAttendee');
let attendeeCounter = 0;

/* Gestionnaire d'evenement qui remplit 3 fonctions :
*  Génération "dynamique" du tableau d'objets correspondant aux participants supplémentaires
*  Création d'un objet au format du modèle
*  Envoie au serveur de l'objet avec transformation en JSON
* */

registerForm.addEventListener('submit', (e) => {
    //console.log(registerForm.elements[0].value);
    e.preventDefault();
    let attendees = [];
    if(attendeeCounter > 0) {
        switch(attendeeCounter) {
            case 1:
                attendees.push({firstname: registerForm.elements[5].value,
                                lastname: registerForm.elements[6].value, email: registerForm.elements[7].value});
                break;
            case 2:
                attendees.push({firstname: registerForm.elements[5].value,
                    lastname: registerForm.elements[6].value, email: registerForm.elements[7].value},
                    {firstname: registerForm.elements[8].value,
                        lastname: registerForm.elements[9].value, email: registerForm.elements[10].value});
                break;
            case 3:
                attendees.push({firstname: registerForm.elements[5].value,
                        lastname: registerForm.elements[6].value, email: registerForm.elements[7].value},
                    {firstname: registerForm.elements[8].value,
                        lastname: registerForm.elements[9].value, email: registerForm.elements[10].value},
                    {firstname: registerForm.elements[11].value,
                        lastname: registerForm.elements[12].value, email: registerForm.elements[13].value});
                break;
            case 4:
                attendees.push({firstname: registerForm.elements[5].value,
                        lastname: registerForm.elements[6].value, email: registerForm.elements[7].value},
                    {firstname: registerForm.elements[8].value,
                        lastname: registerForm.elements[9].value, email: registerForm.elements[10].value},
                    {firstname: registerForm.elements[11].value,
                        lastname: registerForm.elements[12].value, email: registerForm.elements[13].value},
                    {firstname: registerForm.elements[14].value,
                        lastname: registerForm.elements[15].value, email: registerForm.elements[16].value});
                break;
            case 5:
                attendees.push({firstname: registerForm.elements[5].value,
                        lastname: registerForm.elements[6].value, email: registerForm.elements[7].value},
                    {firstname: registerForm.elements[8].value,
                        lastname: registerForm.elements[9].value, email: registerForm.elements[10].value},
                    {firstname: registerForm.elements[11].value,
                        lastname: registerForm.elements[12].value, email: registerForm.elements[13].value},
                    {firstname: registerForm.elements[14].value,
                        lastname: registerForm.elements[15].value, email: registerForm.elements[16].value},
                    {firstname: registerForm.elements[17].value,
                        lastname: registerForm.elements[18].value, email: registerForm.elements[19].value});
                break;
        }
    }
    console.log(attendees);


    let projectData = {
        AprojectName: registerForm.elements.projectName.value,
        BprojectDescription: registerForm.elements.projectDescription.value,
        Corganiser: {
            firstname: registerForm.elements.organiserFirstname.value,
            lastname: registerForm.elements.organiserLastname.value,
            email: registerForm.elements.organiserEmail.value
        },
        Dattendees: attendees
    };
    //console.log(projectData.organiser);
    let req = new XMLHttpRequest();
    req.open("POST", '/');
    req.setRequestHeader("Content-Type", "application/json");
    projectData = JSON.stringify(projectData);
    console.log(projectData);
    req.send(projectData);

});

/* Gestionnaire d'évènement qui rajoute 3 inputs pour ajouter un participant
*  L'evènement n'est plus pris en compte à partir du moment où un 5ème participant est ajouté
* */

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