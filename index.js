function getScore(){
    let firstCity= Math.floor(Math.random() *6);
    let secondCity= Math.floor(Math.random() *6);


    document.getElementById("img1").src='images/'+ firstCity + '.png' 
    document.getElementById("img2").src='images/'+ secondCity + '.png'


    if ( firstCity > secondCity) {
    document.getElementById('name').innerHTML = 
    '<span style="color: orange;"> Nairobi wins, Joel is happy  </span>'}
    else if (firstCity < secondCity) {
        document.getElementById('name').innerHTML=
        "<span style='color: red'> Mombasa wins, Joel is sad </span>"; }
        else if(firstCity = secondCity) {
            document.getElementById('name').innerHTML= "<span style='color:black;'> No winner this time! </span>";}        
}

getScore() 