let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 10000); 
}

function showParagraph() {
	let element = document.getElementById("hidden_p");
	let myButton = document.getElementById("link");

	if(element.classList.contain("hidden")){
		element.classList.remove("hidden");
		myButton.innerHTML = "See More";
	}
	else{
		element.classList.add("hidden");
		myButton.innerHTML = "Show Less";
	}
}

function showGrade() {
	let resultP = document.getElementById("results");
	let questionOne = document.getElementById("question-one").value;
	let questionTwo = document.getElementById("question-two").value;
	let questionThree = document.getElementById("question-three").value;
	let questionFour = document.getElementById("question-four").value;
	
	if (questionOne == "correct"){
		resultP.innerHTML += " <br> Question one correct"
	}
	else if (questionTwo == "correct"){
		resultP.innerHTML += "<br> Question two correct"
	}
	else if (questionThree == "correct"){
		resultP.innerHTML += "<br> Question three correct"
	}
	else if (questionFour == "correct"){
		resultP.innerHTML += "<br> Question four correct"
	}
}