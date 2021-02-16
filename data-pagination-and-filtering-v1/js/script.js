/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
let html = '';
let itemsPerPage=9;
let title = '';


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage (list, page) {
  const startIndex = (page*itemsPerPage)-itemsPerPage;
  const endIndex = (page*itemsPerPage);
  const studentList = document.querySelector('.student-list');
  studentList.innerHTML='';
  for (let i=0; i<=list.length; i++) {
    if (i>= startIndex && i<endIndex) {
      if (list[i].name.title === "Miss") {
        title = `${list[i].name.title}`;
      } if (list[i].name.title === "Mr" || list[i].name.title === "Mrs") {
        title = `${list[i].name.title}.`;
      } else {
        title = '';
      }
      html = `
        <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${list[i].picture.large ? `${list[i].picture.large}` : ''}" alt="Profile Picture">
            <h3>${title} ${list[i].name.first ? `${list[i].name.first}` : ''} ${list[i].name.last ? `${list[i].name.last}` : ''}</h3>
            <span class="email">${list[i].email ? `${list[i].email}` : ''}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date ? `${list[i].registered.date}` : ''}</span>
          </div>
        </li>`;
    studentList.insertAdjacentHTML('beforeend',html);
  }
}
}

showPage(data,1);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
// function addPagination (list) {
//   const numberOfPaginationButtons = (list.length/9);
//   const linkList = document.querySelector(ul.link-list);
//   innerHTML to set linkList ='';
//   for (i<=numberOfPaginationButtons) {
//     paginationButton = create DOMelements to display pagination buttons:
//       <li>
//         <button type="button">1</button>
//       </li>
//       linkList. insertAdjacentHTML + beforeend (paginationButton);
//   }
//   const firstPaginationButton =
//   firstPaginationButton.className = 'active';
//
//   eventListener ('click', linkList) {
//     if event.target = paginationButton {
//       for (paginationButton.length) {
//       paginationButton.className = '';
//       }
//       event.target.className = 'active';
//       page = textContent of event.target
//       showPage(list,page)
//     }
//   }
// }


// Call functions
