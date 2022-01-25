console.clear();
const makeRequest =  async(url, method) => {
    try{

        const result = await $.ajax({
       url : url,
       metho : method,
    });

    return result;
}
catch(err)
{
    console.log(err);
}
};

const getdata = () => {
   makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET", {
    
        title: 'foo',
      body: 'bar',
      userId: 1,
   })

   .then((res) => console.log(res)) 
};
getdata();