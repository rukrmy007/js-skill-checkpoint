// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
};

const handleResponse = (response) => {
    return response.json();
};

const onSuccess = (data) => {
    let newUsers = data.map(user => user.name);
    console.log(newUsers);
};

getUser().then(handleResponse).then(onSuccess);