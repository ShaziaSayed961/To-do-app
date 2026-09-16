let closeBtn=document.getElementsByClassName("close-btn");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const cancelBtn = document.getElementById("cancel-btn");
let taskList=document.getElementsByClassName("task-list");
// for (let btn of addTaskBtn) {
// btn.addEventListener('click',()=>{
// // document.body.style.backgroundColor="blue";
   
// })}
let addTaskBtn1=document.getElementById("add-task-1");
// let addTaskBtn2=document.getElementById("add-task-2");
// let addTaskBtn3=document.getElementById("add-task-3");
const taskForm1=document.getElementById("task-form-1");
// const taskForm2=document.getElementById("task-form-2");
// const taskForm3=document.getElementById("task-form-3");

addTaskBtn1.addEventListener("click",()=>{
   taskForm1.classList.toggle("hidden")
})

// addTaskBtn2.addEventListener("click",()=>{
//    taskForm2.classList.toggle("hidden")
// })

// addTaskBtn3.addEventListener("click",()=>{
//    taskForm3.classList.toggle("hidden")
// })

//------------
// const closeBtn1 = document.getElementById("close-btn-1");

// closeBtn1.addEventListener("click", () => {
//     taskForm1.classList.add("hidden");
// });
//-----------------------------
for (let btn of closeBtn) {
btn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});
}

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click",()=>{
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden")
})