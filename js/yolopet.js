let petData;

fetch("./data/petdata.json")
	.then(response => response.json())
	.then(data => petData = data)
	.then(petData => showList(petData));

	function showList(petData) {
		const petCount = document.querySelector("#pet-count");
		petCount.innerHTML = `
			We currently have ${ petData.length } pets available for adoption! Select one from the list to see the details.
			<br />
			<span>(you can tab thru the list and 'enter' will show the details)</span>
		`;
		const petList = document.querySelector("#pet-list");
		let frag = document.createDocumentFragment();

		petData.forEach(function(obj, ix, arr) {
			const pet = document.createElement("li");
			pet.setAttribute("class", "pet");
			pet.style.backgroundImage = `url(${ obj.animalPictures[0] })`;
			pet.tabIndex = `${ ix+1 }`;
			pet.addEventListener("click", () => showDetail(obj, ix));
			// <img src = ${obj.animalPictures[1]} alt='' />
			pet.innerHTML = `
				<span class='animal-name'>${ obj.animalName }</span>
				<span class='animal-sex'>(${ obj.animalSex === "Male" ? "M" : "F" })</span>
				<span class='animal-age'>${ obj.animalAgeString ? obj.animalAgeString.slice(0, 6) : "n/a" }</span>
			`
			frag.appendChild(pet);
			petList.appendChild(frag);
		}) // forEach
	}; // showList


	function showDetail(obj, ix){
		// console.log(obj, ix);
		const petDetails = document.querySelector("#pet-details");
		petDetails.classList = "out";
		setTimeout(function(){
			petDetails.classList = "in";
			petDetails.innerHTML = `
				<img
					src="${ obj.animalPictures }"
					alt="${ obj.animalName }" />
				<div class="summary">
					<p class="animal-name">name: <span>${ obj.animalName }</span></p>
					<p class="animal-sex">sex: <span>(${ obj.animalSex === "Male" ? "M" : "F" })</span></p>
					<p class="animal-age">age: <span>${ obj.animalAgeString ? obj.animalAgeString : "unknown" }</span></p>
					<p class="adoption-fee">adoption fee: <span>${ obj.animalAdoptionFee ? obj.animalAdoptionFee : "$ 199" }</span></p>
					<p class="animal-description">${ obj.animalDescriptionPlain }</p>
				</div>
			`;
		}, 600); // ∧ = css transition dur
	}; // showDetail

	window.addEventListener('keydown', showDetailOnEnter);

	function showDetailOnEnter(e) {
		let ix = e.target.getAttribute("tabindex") - 1;
		let obj = petData[ix];
		if (e.keyCode == '32') {
			e.preventDefault();
			showDetail(obj, ix);
		}
		else if (e.keyCode == '13') {
			showDetail(obj, ix);
		}
	};
