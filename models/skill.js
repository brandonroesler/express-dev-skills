const skills = [
    {skills: "javascript", done: false},
    {skills: "html", done: true},
    {skills: "css", done: true},
    {skills: "node", done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    skills.splice(id - 1 );
  }
  
  function create(skill) {
    skills.push(skill);
  }

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}