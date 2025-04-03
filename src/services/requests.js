const baseURL = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

/*
  --------------------------------------------------------------------------------------
  Fetching tasks
  --------------------------------------------------------------------------------------
*/

export const fetchTasks = async () => {
    return new Promise((resolve, reject) => {
        fetch(baseURL, {
            method: 'get',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                resolve(data);
            })
            .catch((error) => {
                console.error('Error:', error);
                reject(error)
            });
    });
}