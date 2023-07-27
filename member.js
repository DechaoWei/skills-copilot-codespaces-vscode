function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JavaScript', 'CSS', 'HTML']
    };

    // Add a method to the object
    member.showSkills = function () {
        for (var i = 0; i < this.skills.length; i++) {
            console.log(this.skills[i]);
        }
    };

    member.showSkills();
}
