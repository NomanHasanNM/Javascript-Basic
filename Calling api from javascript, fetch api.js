console.clear();
fetch('https://jsonplaceholder.typicode.com/posts',{
  method: "POST",
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
 }),
})
.then((res) => {
   if(!res.ok){
       const message = `Error: ${res,status}`;
       throw new Error(message);
   }
   return res.json();
})
.then((res) => console.log(res)
.catch((err) => console.log(err)));

const makeRequest = async(url) => {
 const res = await fetch(url);
 if(!res.ok)
 {
     const message = `Error : ${res.status}`;
     throw new Error(message);
 }
 const data = await res.json();
 return data; 
 };
  const getdata = () => {
      makeRequest('https://jsonplaceholder.typicode.com/posts')

     .then((res) => console.log(res)
     .catch((err) => console.log(err)));
};
getdata();

const senddata = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts',

        {
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

   .then((res) => console.log(res)
   .catch((err) => console.log(err)));
};
senddata();

const updatedata = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts',

        {
            method: 'POST',
            body: JSON.stringify({
          
              title: 'foojjhghghghgh',
              body: 'barhjhj',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })

   .then((res) => console.log(res)
   .catch((err) => console.log(err)));
};
updatedata();

const deletedata = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts',

        {
            method: 'POST',
            body: JSON.stringify({
            method: 'delet',
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })

   .then((res) => console.log(res)
   .catch((err) => console.log(err)));
};
deletedata();