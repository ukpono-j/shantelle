   {/* <button class="trigger">Click here to trigger the modal!</button>
        <div class="modal">
          <div class="modal-content">
            <span class="close-button">&times;</span>
            <h1>Hello, I am a modal!</h1>
          </div>
        </div> */}



        const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);




// [...Array(10)].map((elementInArray, index) => ( 
//   <div key={index}>
//     Text in Loop
//   </div>
// ))