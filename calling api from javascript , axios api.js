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
