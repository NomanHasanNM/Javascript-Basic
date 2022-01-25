console.clear();
axios
.put('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },   
})
.then((res) => console.log(res))
.catch((err) => console.log(err)); 

axios
.patch('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'PATCH',
  body: JSON.stringify({
    title: 'Noman Hasan',
   
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },   
})
.then((res) => console.log(res))
.catch((err) => console.log(err)); 
axios
.delete('https://jsonplaceholder.typicode.com/posts/1')

.then((res) => console.log(res))
.catch((err) => console.log(err)); 



////*****//////

///create data/ delete data/ update data get data///


console.clear();
const makeRequest = async(config) => {
  return await axios(config); 
};
const getData = () => {
   makeRequest('https://jsonplaceholder.typicode.com/posts')
   .then((res) => console.log(res))
   .catch((err) => console.log(err));
};
getData();

const createData = () => {
    makeRequest( {
        url : 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
  data: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  }) 
   .then((res) => console.log(res))
    .catch((err) => console.log(err));
 };
 createData();

const updateData = () => {
    makeRequest( {
        url : "https://jsonplaceholder.typicode.com/posts/1",
        method: 'put',
  data: JSON.stringify({
      id:1,
    title: 'foohfhhfhf',
    body: 'barfjfjf',

  }),
  }) 
   .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
 };
 updateData();

const deleteData = () => {
    makeRequest( {
        url : "https://jsonplaceholder.typicode.com/posts/1",
        method: 'delete',
 
    })
   .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
 };
 deleteData();
