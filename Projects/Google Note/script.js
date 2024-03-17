const addbutton = document.querySelector(".btn");

// const UpdateData = () =>{
    
    
// }
// empty string is falst value
function addnewNote(text='')
{
    //1. first method is to go this way to create whole html part only in js
    const note  = document.createElement('div')
    note.classList.add("div-note");

    //2. 2nd method
    const htmlnote  = `
    <div class="operation">
        <button class="edit"><i class="fas fa-edit "></i></button>
        <button class="delete"><i class="fas fa-trash-alt "></i></button>
    </div>
    <div class="main-text ${text?'':"hidden"}"></div>
    <textarea class="text-area ${text?"hidden":''}" rows="400" cols="6"></textarea>`;

    //3. Adding this html element in js part not html doc
    note.insertAdjacentHTML('afterbegin',htmlnote);
    // console.log(note);
    
    
    // getting the references
    const editbutton =  note.querySelector(".edit");
    // console.log(editbutton)
    const deletebutton = note.querySelector(".delete");
    const maintext = note.querySelector(".main-text");
    const textarea = note.querySelector(".text-area");

    maintext.innerHTML = text;

// deleting the node
    deletebutton.addEventListener('click',()=>{
        note.remove();
    })

// Toggle button - edit button switiching the main-text with textarea and vice versa

    editbutton.addEventListener('click',()=>{
        maintext.classList.toggle('hidden'); // if the hidden class is already there then it will remove the hidden if not there then add it.
        // for eg - main-text div is visible when you click on edit button it changes to hidden it.
        textarea.classList.toggle('hidden');
    })

    textarea.addEventListener('change',(event)=>{
    // we can also use input event here isntead of change but the issue is whenever we press the key it changes the value not at last.
    const value  = event.target.value;
    maintext.innerHTML = value;

    // UpdateData();
        const textAreaData = document.querySelectorAll('textarea');
        const notes = [];
        textAreaData.forEach((currVlaue,index,array)=>{
        notes.push(currVlaue.value); // we used 'value' because it is textarea 
        });
    
        console.log(notes);

        localStorage.setItem('notes',JSON.stringify(notes));
    })
    // append the child
    document.body.appendChild(note);
    // console.log(note);
    
} 

//getting data back from local storge
const getnotes = JSON.parse(localStorage.getItem('notes'));

console.log(getnotes);

if(getnotes)
{
    getnotes.forEach((n)=>{
        addnewNote(n);
        console.log(n);
    })
}

addbutton.addEventListener('click',()=>
    addnewNote());





