const baseURL = "http://localhost:4021/learn";

const learnBtn = document.querySelector('#customBtn')
const war1 = document.querySelector('#warBtn1')
const war2 = document.querySelector('#warBtn2')
//selection of elementals



const addToList = (body) => {
  axios
    .post(baseURL, body)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
  //function to func
  const submitHandler = () => {
    let problem = document.querySelector("#problem");
    let difficulty = document.querySelector("#difficulty");
    let link = document.querySelector("#link");
  

  let bodyObj = {
    problem: problem.value,
    difficulty: difficulty.value,
    link: link.value,
  };
  addToList(bodyObj);

  problem.value = "";
  difficulty.value = "";
  link.value = "";
  learnBtn.textContent = "added!";
};


const codeWar1 = () => {
  

  let bodyObj = {
    problem: "Remove First and Last Letter",
    difficulty: 8,
    link: "https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0",
  };
  addToList(bodyObj);
  war1.textContent = "added!";
 
};

const codeWar2 = () => {
  let bodyObj = {
    problem: "Miles per gallon to kilometers per liter",
    difficulty: 8,
    link: "https://www.codewars.com/kata/557b5e0bddf29d861400005d",
  };
  addToList(bodyObj);
  war2.textContent='added!'
};





learnBtn.addEventListener("click", submitHandler);
war1.addEventListener('click', codeWar1)
war2.addEventListener('click', codeWar2)

    




//event listener