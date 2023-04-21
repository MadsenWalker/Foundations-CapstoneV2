require('dotenv').config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});


module.exports = {
  getLearn: (req, res) => {

 sequelize.query(`select * from learn`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }, 


  addLearn: (req,res) => {
    let {problem,difficulty,link} = req.body;  
    

    sequelize
      .query(`INSERT INTO learn (problem_name,difficulty,link) VALUES('${problem}',${difficulty},'${link}')`)
      .then((dbRes) => {
       
        res.status(200).send()})
      .catch((err) => console.log(err));

  }
};
