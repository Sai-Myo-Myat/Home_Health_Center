const doctors = document.querySelectorAll('.Doctor');
const firstPage = document.querySelector('.firstPage');
const secondPage = document.querySelector('.secondPage');
const secondPageOne = document.querySelector('.secondPageOne');
const secondPageTwo = document.querySelector('.secondPageTwo');
const secondPageThree = document.querySelector('.secondPageThree');
const thirdPage = document.querySelector('.thirdPage');
const nextBtn = document.querySelector(".next");
const doctorList = document.querySelectorAll('.doctorList');
const doctorToBeBooked = document.querySelector('.doctorToBeBooked');

//array
const rightChoice = [];      // --> to make sure that user choose a doctor
const rightDoctor = [];

//to know user's choice ;
doctorList.forEach((choosenDoctor) => {
    choosenDoctor.addEventListener('click', () => {
        for (let i = 0; i < doctorList.length; i++) {
            doctorList[i].classList.remove('choosen');
            rightChoice.splice(0,1); // to correct if statement in nextBtn's function
        }
        choosenDoctor.classList.add('choosen');
        rightChoice.push('choosen');
    });
});

nextBtn.addEventListener('click', () => {
    //to make sure that user choose a doctor;
    const hadChoosen = rightChoice.length > 0;
    if(hadChoosen) {
        const choiceDoctor = document.querySelector('.choosen');
        rightDoctor.push(choiceDoctor.id);
        console.log(rightDoctor)
        secondPage.style.display = "none";
        takingDoctorName();
        thirdPage.style.display = "flex";
    }else {
        alert("Who Do You Want To Meet !")
    }
});

//Third Page creation
const takingDoctorName = () => {
    doctorToBeBooked.innerHTML = rightDoctor;
}

//time validation , time limit
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate() +1; //to be sure booking for tomorrow

const startingTimeForAM = new Date(currentYear,currentMonth,currentDay,8);
console.log("startingTimeForAM",startingTimeForAM)
const endTimeForAM = new Date(currentYear,currentMonth,currentDay,11,30)
console.log("endTImeForAm", endTimeForAM)
const startingTimeForPM = new Date(currentYear,currentMonth,currentDay,14);
console.log("stratingTImeForPM",startingTimeForPM)
const endTimeForPM = new Date(currentYear,currentMonth,currentDay,17,30);
console.log("endTimeforPM",endTimeForPM);

for(let i=0; i < doctors.length; i++) {
    const doctor = doctors[i];
    const whichDoctor = doctor.innerHTML;
    doctor.addEventListener('click', () => {
        secondPage.style.display = "flex";
        switch(whichDoctor) {
            case "Dentist":
                firstPage.style.display = "none";
                secondPageOne.style.display = "flex";
                break;
            case "Eye Specialist":
                firstPage.style.display = "none";
                secondPageTwo.style.display = "flex";
                break;
            case "General":
                firstPage.style.display = "none";
                secondPageThree.style.display = "flex";
                break;
        }
    })  
}

// first we need to create time table to show abaliable times by ourself
// each section long 30minutes
// that can be work without these undered two line 
// and each will be have id like "hour:minutes"
// to call Date() function , we will use id of each section;
