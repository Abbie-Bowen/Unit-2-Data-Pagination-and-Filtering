/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

let itemsPerPage=9; //defaults display to nine students per page
const pagination = document.querySelector('.pagination');
const studentList = document.querySelector('.student-list');

//showPage function creates elements of one students and inserts itemsPerPage students onto a page
function showPage (list, page) {
  if ((page*itemsPerPage)>list.length) {
    page=(list.length/itemsPerPage);
  }
  const startIndex = (page*itemsPerPage)-itemsPerPage;
  let endIndex = (page*itemsPerPage);
  //elimnates errors that from the list of items being not evenly divisible by the itemsPerPage variable.
  if (list.length<endIndex) {
    endIndex=list.length;
  }
  //concatinates student data items into an html string & inserts string
  studentList.innerHTML='';
  for (let i=0; i<=list.length; i++) {
    if (i>= startIndex && i<endIndex) {
      //adds . after Mr or Mrs but not Miss
      let title ='';
      if (list[i].name.title) {
        if (list[i].name.title === "Miss") {
          title = `${list[i].name.title}`;
        } if (list[i].name.title === "Mr" || list[i].name.title === "Mrs") {
          title = `${list[i].name.title}.`;
        }
      } else {
        title = '';
      }
      //ternary operator in template literal below from https://wesbos.com/template-strings-html/
      const studentHTML = `
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
    studentList.insertAdjacentHTML('beforeend',studentHTML);
  }
}
}

function addItemsPerPageButton() {
  const addItemsPerPageButton = `
    <ul class="itemsPerPage">
    <li>
      <div>
      <button type="button" class="showmore">Show 18 Students Per Page</button>
      </div>
    </li>
    </ul>`;
  pagination.insertAdjacentHTML('beforeend',addItemsPerPageButton);
}
/*addPagination adds buttons for each page. the number of buttons is calculated by dividing the number of students by
the number of students per page.*/
function addPagination (list) {
  const numberOfPaginationButtons = (list.length/itemsPerPage);

  const linkList = document.querySelector('.link-list');
  linkList.innerHTML ='';
  for (let i=0; i<=numberOfPaginationButtons; i++) {
    let paginationButton = `
      <li>
        <button type="button" class = "inactive">${i+1}</button>
      </li>`;
      linkList.insertAdjacentHTML('beforeend',paginationButton);
  }
  //applies active formating to first page button
  const firstPaginationButton = document.querySelector('.link-list button:first-child');
  firstPaginationButton.className = 'active';
}

  //listens for clicks on page buttons and calls the showPage function to display the next page of students
pagination.addEventListener ('click', (e) => {
  if (e.target.tagName ==='BUTTON') {
  const button = e.target;
  const activeButtons = document.querySelector('.active');
  const list=data;
  const action = button.className;
  const nameActions = {
    showmore: () => {
      itemsPerPage = 18;
      button.textContent = 'Show 9 Students Per Page';
      button.className='showfewer';
      page = activeButtons.textContent;
      addPagination(list);
      showPage(list,page);
    },
    showfewer: () => {
        itemsPerPage = 9;
        button.textContent = 'Show 18 Students Per Page';
        button.className='showmore';
        page = activeButtons.textContent;
        addPagination(list);
        showPage(list,page);
    },
    inactive: () => {
        activeButtons.className='inactive';
        button.className='active';
        page = button.textContent;
        showPage(list,page);
    },
    active: () => {
      page = button.textContent;
      showPage(list,page);
    }
  };
  nameActions[action]();
}
});

addPagination(data);
addItemsPerPageButton();
showPage(data,1);
