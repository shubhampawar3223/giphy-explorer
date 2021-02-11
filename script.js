let mainDiv = document.createElement("div")
let contentDiv = document.querySelector(".content")
let rowElement= document.createElement("div");
rowElement.setAttribute("class","row ");
contentDiv.append(rowElement);
function search(){
 let val = document.querySelector(".t").value;

let response = fetch("https://api.giphy.com/v1/gifs/search?q="+val+"&api_key=ujbjaICHmqVM8SvIs2OZkfzl9EhR9QFI&limit=20")

response.then((val)=>{
    return val.json();
})
.then((data)=>{
    console.log(data)
    showData(data);
})
.catch((e)=>{
    console.log(e)
})
}

function showData(data){
    rowElement.innerHTML="";  
    for(let i=0;i< data.data.length; i++){
      let cardelement= createCard(data.data[i].images.fixed_height.url)  
    rowElement.append(cardelement); 
    }
}

function createCard(img_url){
    let imgElement = document.createElement("img");
    imgElement.setAttribute("class"," p-2");
    imgElement.setAttribute("src",img_url);
    return imgElement;
}
