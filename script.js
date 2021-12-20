const doctors = document.querySelectorAll('.Doctor');
const firstPage = document.querySelector('.firstPage');
const secondPage = document.querySelector('.secondPage');
const secondPageOne = document.querySelector('.secondPageOne');
const secondPageTwo = document.querySelector('.secondPageTwo');
const secondPageThree = document.querySelector('.secondPageThree');
const thirdPage = document.querySelector('.thirdPage');
const nextBtn = document.querySelector(".next");

nextBtn.addEventListener('click', () => {
    secondPage.style.display = "none";
    thirdPage.style.display = "flex";
})

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
