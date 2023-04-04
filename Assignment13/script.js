
const addPlayer = document.getElementById('addPlayer');




var counter = 0;
addPlayer.addEventListener('click', () => {
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var country = document.getElementById('country');
  var score = document.getElementById('score');

  const container = document.getElementById('container');
  const innerDiv = document.getElementById('innerDiv');






  if (firstName.value == "" || lastName.value == "" || country.value == "" || score.value == "") {
    innerDiv.innerHTML = "<p>All fields are required</p>";
  } else {

    innerDiv.innerText = "";
    const fullName = firstName.value + " " + lastName.value;

    container.innerHTML += `
    <table>
        <tr id="tr${counter}">
          <td>${fullName}</td>
          <td>${country.value}</td>
          <td id="scoreData${counter}">${score.value}</td>
          <td>
            <button onclick="deleteElement(${counter})" id="delete">Delete</button>
            <button id="plusFive(${counter})" onclick="plusFive(${counter})">+5</button>
            <button id="subFive(${counter})" onclick="subFive(${counter})">-5</button>
          </td>
        </tr>
      </table>
    `;

   
    counter = counter + 1;





  }
  firstName.value = "";
  lastName.value = ""; 
  country.value = ""; 
  score.value = ""; 
})


function deleteElement(counter) {
  const trDel = document.getElementById(`tr${counter}`);
  trDel.remove();
}


function plusFive(counter) {
  const scoreData = document.getElementById(`scoreData${counter}`);
  scoreData.innerText = (+scoreData.innerText) + 5;
  console.log(scoreData);
}
function subFive(counter) {
  const scoreData = document.getElementById(`scoreData${counter}`);
  scoreData.innerText = (+scoreData.innerText) - 5;
  console.log(scoreData);
}