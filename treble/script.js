const note = document.querySelector('.note');
const noteLines = document.querySelector('.note-lines');
const start = document.querySelector('.start');
const n1 = document.querySelector('.n-1');
const n2 = document.querySelector('.n-2');
const n3 = document.querySelector('.n-3');
const n4 = document.querySelector('.n-4');
const n5 = document.querySelector('.n-5');
const n6 = document.querySelector('.n-6');
const answer = document.getElementById('answer');
const next = document.querySelector('.next');
const letterNotes = document.querySelectorAll('.note-letter');


let currentNote;

const musicNotes = [
    {   
        value: 'C',
        top: '213px',
        hidden: [n2,n3,n4,n5,n6],
        visible: [n1]
    },
    {   
        value: 'B',
        top: '221px',
        hidden: [n2,n3,n4,n5,n6],
        visible: [n1]
    },
    {
        value: 'A',
        top: '240px',
        hidden: [n3,n4,n5,n6],
        visible: [n1,n2]
    },
    {
        value: 'G',
        top: '251px',
        hidden: [n3,n4,n5,n6],
        visible: [n1,n2]

    },
    {
        value: 'F',
        top: '270px',
        hidden: [n4,n5,n6],
        visible: [n1,n2,n3]
    },
    {
        value: 'E',
        top: '281px',
        hidden: [n4,n5,n6],
        visible: [n1,n2,n3]
    },
    {
        value: 'D',
        top: '301px',
        hidden: [n5,n6],
        visible: [n1,n2,n3,n4]
    },
    {
        value: 'C',
        top: '311px',
        hidden: [n5,n6],
        visible: [n1,n2,n3,n4]
    },
    {
        value: 'B',
        top: '331px',
        hidden: [n6],
        visible: [n1,n2,n3,n4,n5]
    },
    {
        value: 'A',
        top: '341px',
        hidden: [n6],
        visible: [n1,n2,n3,n4,n5]
    },
    {
        value: 'G',
        top: '361px',
        hidden: [],
        visible: [n1,n2,n3,n4,n5,n6]
    },
    {
        value: 'F',
        top: '371px',
        hidden: [],
        visible: [n1,n2,n3,n4,n5,n6]
    },



]


function getNotes() {
    let r = Math.floor(Math.random() * musicNotes.length)


    noteLines.style.opacity = '1';
    note.style.opacity = '1';

    note.style.top = musicNotes[r].top;

    
    musicNotes[r].visible.forEach(element => {
        
        element.style.opacity = "1";
    });
    musicNotes[r].hidden.forEach(element => {
        
        element.style.opacity = "0";
    }); 

   currentNote = musicNotes[r].value ;

}


letterNotes.forEach(element=>{
    element.addEventListener("click", (e)=>{
        if(e.target.textContent === currentNote) {
            getNotes();
            answer.textContent = '';
            
        } else {
            answer.textContent = 'Try Again';
        }
    })
})


next.addEventListener('click',getNotes); 



