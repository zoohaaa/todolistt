// const's //

const notComp = document.querySelector('.nocomp');

const doComp = document.querySelector('.comp');

const date = new Date();

const toDoItems = document.getElementsByClassName
('to-do-items')[0];

const input = document.getElementById('input');

const trashIcon = document.getElementById('trash');

const changeIcon = document.getElementById('change');

const clockIcon = document.getElementById('clock');



// function press Enter to add task //





input.addEventListener('keydown', function(event){
    
    if(event.key === "Enter")
    addItem();
})


 // function addItem //


function addItem(){

    let divParent = document.createElement('div');

    divParent.className = 'item';

    divParent.innerHTML = '<div>'+input.value+'</div>';

    let divChild = document.createElement('div');

    let changeIcon = document.createElement('i');

    let checkIcon = document.createElement('i');

    let trashIcon = document.createElement('i');

    let clockIcon = document.createElement('i');


     // Icon and function icon's //
     

     // Clock icon // 


     clockIcon.className = 'fas fa-clock';
     clockIcon.style.color = 'lighgray';

     // Checkbox Icon //

  
    checkIcon.className = 'fas fa-check-square';
    checkIcon.style.color = 'lightgray';

    // Change Icon //


    changeIcon.className = 'fas fa-pen';
    changeIcon.style.color = 'blue';

    // CheckIcon function //


    checkIcon.addEventListener('click', function(){

        checkIcon.addEventListener('click', done);

        function done() {

            checkIcon.style.color = 'limegreen';
            trashIcon.className = 'fas fa-xmark';
            trashIcon.style.color = 'red';
            doComp.appendChild(divParent);
            trashIcon.addEventListener('click', function(){
            divParent.remove();
                })
            }   
    })
    // ClockIcon function // 


    clockIcon.addEventListener('click', function(){

        alert(date.toUTCString());
    })

    // ChangeIcon function //

    changeIcon.addEventListener('click', function(){

        input.value = divParent.innerText;
        const parent =  changeIcon.parentElement;
        parent.parentElement.remove(divChild);

    })

 // Append Child //



    notComp.appendChild(divParent);



    divChild.appendChild(changeIcon);


    divChild.appendChild(checkIcon);


    divChild.appendChild(clockIcon);


    divChild.appendChild(trashIcon);


    divParent.appendChild(divChild);


    toDoItems.appendChild(divParent);


    input.value = '';


}
