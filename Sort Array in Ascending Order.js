function sortAscending(arr) {
    return [...arr].sort((a, b) => a - b);
}

function sortDates(dates) {
    return [...dates].sort((a, b) => new Date(a) - new Date(b));
}

function sortStrings(arr) {
    return [...arr].sort();
}

function organizeTasksByDeadline(tasks) {
    const sortedTasks = tasks.map(task => ({
        ...task,
        deadline: new Date(task.deadline)
    })).sort((a, b) => a.deadline - b.deadline);
    
    console.log(`📅 Tasks organized by deadline:`);
    sortedTasks.forEach((task, index) => {
        const daysLeft = Math.ceil((task.deadline - new Date()) / (1000 * 60 * 60 * 24));
        console.log(`${index + 1}. ${task.name} - Due: ${task.deadline.toLocaleDateString()} (${daysLeft} days)`);
    });
    
    return sortedTasks;
}
console.log(sortAscending([5, 2, 8, 1])); 
console.log(sortAscending([2023, 2021, 2022])); 

const tasks = [
    { name: 'Project Report', deadline: '2025-08-15' },
    { name: 'Client Meeting', deadline: '2025-08-01' },
    { name: 'Code Review', deadline: '2025-08-10' }
];
organizeTasksByDeadline(tasks);
