// Listing Element
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type Assertion
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById(
    'education'
    ) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
        'experience'
    ) as HTMLTextAreaElement;
    const skillsElement = document.getElementById(
        'skills'
    ) as HTMLTextAreaElement;

    //**  
const usernameElement = document.getElementById(
    "username"
)as HTMLInputElement

// Check if all elements are preent
   if( profilePictureInput && 
    nameElement &&
     emailElement && 
     phoneElement && 
     educationElement && 
     experienceElement && 
     skillsElement 
   ) {

    //.......................//

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//


//** 
const username =usernameElement.value;
const uniquePath =`resumes/${username.replace(/\s+/g, ' _')}_cv.html`
    
// picture elements
const profilePicturefile = profilePictureInput.files?.[0]
const profilePictureURL = profilePicturefile ? 
URL.createObjectURL(profilePicturefile) 
: '';

   


   // Create Resume Output
   const resumeOutput =`
   <h2>Resume</h2>
   ${profilePictureURL> `<img src="${profilePictureURL} alt="profile Picture" class="profilePicture">`  }
   <p> <strong>Name:</strong> ${name} </p>
   <p><strong>Email:</strong> ${email} </p>
   <p><strong>phone Number:</strong> ${phone} </p>

   <h3>Education</h3>
   <p>${education}</p>

   <h3>Experience</h3>
   <p>${experience}</p>

   <h3>Skills</h3>
   <p>${skills}</p>
   `;



   //** 
   const downloadLink = document.createElement('a')
   downloadLink.href = 'data:text/html;charset=utf-8' + encodeURIComponent(resumeOutput)
   downloadLink.download = uniquePath;
   downloadLink.textContent = 'Download Your 2024 Resume';


// Resume Output
   const resumeOutputElement = document.getElementById('resumeOutput')
   if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
    resumeOutputElement.classList.remove(`hidden`);

    // Create container for buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.id = "buttonContainer";
    resumeOutputElement.appendChild(buttonContainer);

    // Add Download PDF button
    const downloadButton = document.createElement("button")
    downloadButton.textContent = "Download as PDF";
    downloadButton.addEventListener("click", () =>{
    window.print();
    })
    buttonContainer.appendChild(downloadButton)

    //Add Shareable Link button
    const shareLinkButton = document.createElement("button");
    shareLinkButton.textContent = "Copy Shareable Link";
    shareLinkButton.addEventListener("click", async () => {
        try{
            const shareableLink = `https://yourdomain.com/resumes/${name.replace(
            /\s+/g, 
            ' _'
        )}_cv.html`;
        // Use Clipboard API to copy the shareable link
        await navigator.clipboard.writeText(shareableLink);
        alert(`shareable link copied to clipboard!`);
      }catch(error){
        console.error("Failed to copy link: ", error);
        alert("Filed to copy link to clipboard Please try again.")
      }
    });
buttonContainer.appendChild(shareLinkButton);
   }else{
    console.error('the resume output elements are missing');
   }
   }else{
    console.error('one or more elements are missing')
   }
})