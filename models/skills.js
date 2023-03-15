const skills = [
    { id: 125223, skill: 'Martial Art', done: true },
    { id: 127904, skill: 'Speed reading', done: false },
    { id: 139608, skill: 'Solving Rubiks cube', done: false }
];

module.exports = {
    getAll,
    getOne,
    deleteOne,
    create
};

function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
}