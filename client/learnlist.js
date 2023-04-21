
const baseURL = "http://localhost:4021";
let learnBtn = document.querySelector("#learnButton");
let displaysection = document.querySelector("#displaySection");

const getAllLearn = () => {
  axios
    .get(`${baseURL}/learn`)
    .then((res) => {
      displayLearningList(res.data); 
    })
    .catch((theseHands) => {
      console.log(theseHands);
    });
};


const createLearningCard = (problem) => {
  const learningContainer = document.querySelector("#learning-container");

  const learningCard = document.createElement("div");

  learningCard.classList.add("learning-card");

  learningCard.innerHTML = `
                    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="./images/coding_8kyu.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${problem.problem_name}</h5>
    <p class="card-text">Difficulty ${problem.difficulty}</p>
    <a href="#${problem.link}" class="btn btn-primary">Get Busy Learning</a>
  </div>
</div>
                `
 learningContainer.appendChild(learningCard);
};


const displayLearningList = (arr) => {
  const learningContainer = document.querySelector("#learning-container");

  learningContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createLearningCard(arr[i]);
  }
};

learnBtn.addEventListener("click", getAllLearn);
