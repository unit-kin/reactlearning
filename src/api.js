// api.js

const fetchTasks = () => {
    return new Promise((resolve) => {
        // Simulate an API call delay (e.g., 1 second)
        setTimeout(() => {
            const tasks = [
                { id: 1, text: 'Learn React' },
                { id: 2, text: 'Build a Todo App' },
                // Add more tasks as needed
            ];
            resolve(tasks);
        }, 1000);
    });
};

export default fetchTasks;
