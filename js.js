let axios = require('axios');
document.getElementById('show').onclick = function(){
    axios.get('./getdata.php')
    .then(function(response){
        for(let i = 0; i < response.data.length;i++){
            renderdata(response.data[i]);
        }
    })
}
document.getElementById('new').onclick = function(){
    dataJSON = {
        name:"",
        adress:"",
        phone:""
    };
    dataJSON.name = document.getElementById('name').value;
    dataJSON.adress = document.getElementById('adress').value;
    dataJSON.phone = document.getElementById('phone').value;
    let jsonData = JSON.stringify(dataJSON);
    console.log(jsonData);
    axios.post('./getdata.php',jsonData)
    .then(function(response){
        console.log(response.data);
    })
    
}
document.getElementById('delet').onclick = function(){
    axios.delete(`./getdata.php`,{
        data:{name:document.getElementById('name').value}
    })
    .then(function(response){
        console.log(response.data);
    })
}

document.getElementById('change').onclick = function(){
    dataJSON = {
        name:"",
        adress:"",
        phone:""
    };
    dataJSON.name = document.getElementById('name').value;
    dataJSON.adress = document.getElementById('adress').value;
    dataJSON.phone = document.getElementById('phone').value;
    let jsonData = JSON.stringify(dataJSON);
    console.log(jsonData);
    axios.put(`./getdata.php`,jsonData)
    .then(function(response){
        console.log(response.data);
    })
}

function renderdata(datadb){
   let div1 =  document.createElement('div');
   let span1 = document.createElement('span');
   span1.innerHTML = datadb.full_name;

   let div2 =  document.createElement('div');
   let span2 = document.createElement('span');
   span2.innerHTML = datadb.addresss;

   let div3 =  document.createElement('div');
   let span3 = document.createElement('span');
   span3.innerHTML = datadb.phone;

   div1.appendChild(span1);
   div2.appendChild(span2);
   div3.appendChild(span3);

   document.getElementById('d1').appendChild(div1);
   document.getElementById('d2').appendChild(div2);
   document.getElementById('d3').appendChild(div3);
}