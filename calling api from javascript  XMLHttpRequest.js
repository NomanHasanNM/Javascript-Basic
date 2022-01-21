console.clear();

 const makeRequest = (method,url,data) =>{

    return Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.setRequestHeader('Contect-type', 'appliction/json');
    xhr.onload = () =>{

        let data  = xhr.response;
        console.log(JSON.parse(data))
    }
    xhr.onerror = () => {
        console.log('errpr is here');
    }
    xhr.send(JSON.stringify(data));

 });
}
           
const  getData = () => {
    
     makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
     .then((res) => console,log(res))
     
}
getData();
const  sendData = () => {
    
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts',
   {
    title: 'foo',
    body: 'bar',
    userId: 1,
});
}
sendData();
const  updateData = () => {
    
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1',
   {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,

   });
}
updateData();

const  updateSingleData = () => {
    
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1',
   {

    title: 'This is here',
   });
}
updateSingleData();

const  deleteData = () => {
    
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1',
   {

    title: 'This is here',
   });
}
 deleteData();