const getPhotos = ()=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(data => photos(data))
}
const photos = picttures =>{
    const images = document.getElementById("image");
    picttures.forEach(picture =>{
        const div = document.createElement("div");
        div.innerHTML=`
        <h3>${picture.title}</h3>
        <img src="${picture.url}">`
        images.appendChild(div);
    })
}
