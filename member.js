function skillsMember() {
    return {
        name: 'John Doe',
        age: 25,
        skills: ['HTML', 'CSS', 'JS'],
        salary: 50000,
        getSalary: function() {
            return this.salary;
        }
    }
}