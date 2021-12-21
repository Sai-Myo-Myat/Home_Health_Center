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
const time = document.querySelector('.time');
const timeTable = document.querySelector('.timeTable');

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

//time 
const forAM = ["8:00 - 8:30","8:30 - 9:00","9:00 - 9:30","9:30 - 10:00","10:00 - 10:30","10:30 - 11:00","11:00 - 11:30"]
const forPM = ["2:00 - 2:30","2:30 - 3:00","3:00 - 3:30","3:30 - 4:00","4:00 - 4:30","4:30 - 5:00","5:00 - 5:30"]
const makeTimeTable = (meridien) => {
        const table = `
        <table>
        <tr>
            <td>${meridien[0]}</td>
            <td>${meridien[1]}</td>
            <td>${meridien[2]}</td>
        </tr>
        <tr>
            <td>${meridien[3]}</td>
            <td>${meridien[4]}</td>
            <td>${meridien[5]}</td>
        </tr>
        <tr>
            <td>${meridien[6]}</td>
        </tr>
    </table> 
    <button class="ok btn">Done</button>
    `
    timeTable.innerHTML = table;
}

//making time table
time.addEventListener('click', () => {
    const amAndPm = rightDoctor[0];
    const amOrPm = amAndPm.split(',');
    console.log(amOrPm[1]);
    // amOrPm[1] === "8:00AM - 11:30AM" ? makeTimeTable(forAM) : makeTimeTable(forPM);
    if(amOrPm[1] === " 2:00PM - 5:30PM"){
        makeTimeTable(forPM);
    }else if(amOrPm[1] === " 8:00AM - 11:30AM") {
        makeTimeTable(forAM)
    }
    thirdPage.style.display = "none";
})

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
