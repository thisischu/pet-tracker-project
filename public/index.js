const getEl = (el) => document.querySelector(el);
const createEl = (el) => document.createElement(el);

const form = getEl("form");
form.reset();

//This function is used to create a post request
const getOptsWithBody = (body, method = 'POST') => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

//Fetch Data from the DB Pets
const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(response.statusText);
    if (response.status === 204) return [{}];
    return [await response.json()];
  } catch (error) {
    return [null, error];
  }
};

const displayPet = (name, profilePicture, options, friendly) => {
  //get Element
  const card = getEl("#pet-list");

  //create Element
  const li = createEl("li");

  const petName = createEl("h3");
  const pic = createEl("img");
  const species = createEl("p");
  const isFriendly = createEl("p");

  const button = createEl("button");

  //add Content
  petName.textContent = name;
  pic.src = profilePicture;
  species.textContent = `Species: ${options}`;
  isFriendly.textContent = friendly ? "Friendly" : "Not Friendly";
  button.textContent = "Remove";

  //append Data
  li.appendChild(petName);
  li.appendChild(pic);
  li.appendChild(species);
  li.appendChild(isFriendly);
  li.appendChild(button);
  card.appendChild(li);
};

form.addEventListener("submit", function async (e) {
  e.preventDefault();

  //get formData
  const formData = new FormData(e.target);
  console.log(formData);

  //turn form data into obj to access
  const { name, profilePicture, options, friendly } =
    Object.fromEntries(formData);

  displayPet(name, profilePicture, options, friendly);

  const postBody = getOptsWithBody({ name, profilePicture, options, friendly })

  fetchData("/pets", postBody)

  //reset form
  form.reset();
});

const loadInitialPets = async () => {
  const pets = await fetchData('/pets');

  console.log(pets[0])
  pets[0].forEach(pet => {
    displayPet(pet.pet_name, pet.picture_url, pet.species, pet.is_friendly);
  });

}

loadInitialPets()

