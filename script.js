const addbtn=document.querySelector("#addbtn");
const popup=document.querySelector(".popup");
const body=document.querySelector("#body");
const popupClose=document.querySelector("#popup-close");
const add=document.querySelector("#add");
const title=document.querySelector("#note-title");
const date=document.querySelector("#date");
const desc=document.querySelector("#desc");
const form=document.querySelector("#input");
const notescontainer=document.querySelector(".notescontainer");
const content=document.querySelector("#content");

let notes=localStorage.getItem('notes')?JSON.parse(localStorage.getItem('notes')):[];


function display()
{
    for(let i=0;i<notes.length;i++)
    {
        const div=document.createElement("div");
        div.className="notesbox";
        div.innerHTML=`<p id="title">${notes[i].title}</p>
        <p id="date">${notes[i].date}</p>
        <p id="info">${notes[i].desc}</p>
        <i class="fa-solid fa-trash trash"></i>`;
        notescontainer.append(div);
        body.append(notescontainer);
        let trash=div.querySelector(".trash");
        trash.addEventListener('click',()=>{
            notes = notes.filter((elem)=>elem.id != notes[i].id);
            localStorage.setItem('notes',JSON.stringify(notes));
            location.reload();
        })
    }
}




addbtn.addEventListener('click',()=>
{
    popup.style.visibility="visible";
    popup.style.top="23%";
    body.style.opacity="0.7";
    popup.style.transition="opacity 0s,top 0.5s"
})

popupClose.addEventListener('click',closepop);

function closepop()
{
    popup.style.visibility="hidden";
    popup.style.top="19%";
    body.style.opacity="1"; 
    form.reset();
}

add.addEventListener('click',Add);

function Add()
{
    var note=
    {
        title:title.value,
        date:date.value,
        desc:desc.value,
        id:Math.random()
    };
    notes.push(note);
    localStorage.setItem('notes',JSON.stringify(notes));
    closepop();
    location.reload();
}

window.onload=function()
{
    display();
}

// notes.forEach((item,index,arr)=>
// {
//     console.log(index);
// });

{/* <div class="notesbox">
    <p id="title">Title</p>
    <p id="date">Date</p>
    <p id="info">Information</p>
    <i class="fa-solid fa-trash"></i>
</div>  */} 