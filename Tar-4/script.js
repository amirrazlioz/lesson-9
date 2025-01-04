// tar-4

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        const userList = document.getElementById('userList');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.name} - ${user.address.city}`;
            userList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Failed to fetch users:', error);
    }
}

fetchUsers();