

const getDate = ()=>{
    const date = document.getElementById("date");
    const now = new Date;

    let dateString = now.toUTCString().slice(0, 25);
    date.innerText = dateString
    setTimeout(()=>{getDate()}, 1000)
}
getDate()


const searchInput = document.getElementById("searchInput")
    searchInput.addEventListener("keydown", (e)=>{
        if(e.code == "Enter"){
            console.log(e.code);
            search()
        }else{

        }
    });

const search = ()=>{
    const searchInput = document.getElementById("searchInput").value
    if(searchInput != ""){
        searchInput.replace(" ", "+")
        window.location.href = ("https://www.google.com/search?q=" + searchInput)

    }
    console.log(searchInput);
}
search()