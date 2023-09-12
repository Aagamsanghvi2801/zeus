
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const dataList = document.getElementById('data-list');

      
        dataList.innerHTML = '';

       
        data.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = item.title;
            dataList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const myButton = document.getElementById("myButton");
myButton.addEventListener("click",fetchData);
