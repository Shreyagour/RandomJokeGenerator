const btnEl=document.getElementById('btn');
// this is simply to get the btn element


const apikey="3wFRe8o2GNhRzf1J0FMlHg==wJI9taMrKQxIiXfj"; 
//my apikey

const options={
method:"GET",
headers:{
    "X-Api-Key":apikey
},
};// this is used to enable the specific paramters required to pass a fect request
const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1"//url to get the jokes from

async function getJoke(){
    //try to get the joke if network conditions are good
try {
    document.getElementById('joke').innerText="Updating..." //user clicked button joke is loading
    btnEl.disabled=true;//while the joke is loading button is non-functional
    btnEl.innerText="LOADING";//the text on button changed
   const response=await fetch(apiUrl,options); //used await bcoz there might be delay to get the reponse
   const data= await response.json();//when await is used function has to be asynchronus
   btnEl.disabled=false;//now the joke is loaded button is enabled again
    btnEl.innerText="TELL ME A JOKE";//the text on button is again changed
document.getElementById('joke').innerText=data[0].joke;//to manipulate the p element to display the joke
} catch (error) {
    document.getElementById('joke').innerText="SORRY TRY AGAIN LATER!";
    btnEl.disabled=true;
    btnEl.innerText="TELL ME A JOKE";

}

}
btnEl.addEventListener('click',getJoke);//when the button is clicked getJoke is called

