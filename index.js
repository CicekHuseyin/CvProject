const apiUrl = "http://localhost:3000/";
const leftProfile = document.getElementById("left-profile");
// console.log(profile);
fetch(apiUrl+"myInfo")
.then(res => res.json())
.then(data => 
        leftProfile.innerHTML=`<h2>${data.firstName} ${data.lastName}</h2>`
)
.catch(err=>console.log(err));

const loc = document.getElementById("location");
fetch(apiUrl+"locationInfo")
.then(res => res.json())
.then(data => 

    loc.innerHTML=`
          <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>${data.profession}</p>
          <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>${data.town}, ${data.city}</p>
          <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>${data.email}</p>
          <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>${data.phone}</p>
          <p><i class="fa-brands fa-github fa-fw w3-margin-right w3-large w3-text-teal"></i>${data.githubLink}</p>
    `
)
.catch(err=> console.log(err));

const skills=document.getElementById("skills");
fetch(apiUrl+"skills")
.then(res => res.json())
.then(data =>{
    data.forEach(result => {
        skills.innerHTML+=`
            <p>${result.skillName}</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
                <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">${result.value}%</div>
            </div>
        `;
    });
})
.catch(err => console.log(err));

const language=document.querySelector("#languages");
fetch(apiUrl+"languages")
.then(res => res.json())
.then(data => {
    data.forEach(result => {
        language.innerHTML+=`
            <p>${result.languageName}</p>
            <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-round-xlarge w3-teal" style="height:24px;width:${result.value}%"></div>
            </div>
        `
    });
})
.catch(err => console.log(err));

const experience = document.getElementById("work-experience");
fetch(apiUrl + "experiences")
.then(res => res.json())
.then(data => {
    data.forEach(result => {
        experience.innerHTML+=`
        <div class="w3-container">
            <h5 class="w3-opacity"><b>${result.title} / ${result.companyName}</b></h5>
            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${result.startDate} - ${result.endDate}</h6>
            <p>${result.description}</p>
            <hr>
        </div>
        `
    });
})
.catch(err => console.log(err));

const education = document.getElementById("education");
fetch(apiUrl + "educations")
.then(res => res.json())
.then(data => {
    data.forEach(result => {
        education.innerHTML+=`
            <div class="w3-container">
                <h5 class="w3-opacity"><b>${result.schoolName} / ${result.section}</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${result.startDate} - ${result.endDate}</h6>
                <p>Mezun Olduğu Puan : ${result.graduationGrade}</p>
                <hr>
            </div>
        `
    });
})