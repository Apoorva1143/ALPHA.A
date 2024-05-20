let usercode = 0;
let compscore =0;
  
const  choices = document.querySelectorAll(".image");


const gencompchoice =() => {
    let options =["rock","paper","scissors"];

}

const playgame = (userchoice) => {
    console.log ("user choice =",userchoice);
}


choices   .foreach((image) => {
    image.addeventlistener("click", () =>{
        const userchoice = choice.getattribute("id");
        console.log ("choice was clicked", userchoice);
    });
});