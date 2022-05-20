$(document).ready(onReady);

function onReady() {
  $('#addButton').on('click', saveKoala);
  getKoalas();

  $('#viewKoalas').on('click', '.delButton', delKoala); // dynamically created button
  $('#viewKoalas').on('click', '.rttButton', transferKoala);
};

function saveKoala() {
  let koalaToSend = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    ready_to_transfer: $('#readyForTransferIn').val(),
    notes: $('#notesIn').val()
  };
  console.log('adding:', koalaToSend);
  $.ajax({
    method: 'POST',
    url: '/koalas',
    data: koalaToSend
  }).then(function (response) {
    console.log('back from POST:', response);
    // display on the DOM
    getKoalas();
    // empty all inputs
    $('input').val('')
  }).catch(function (err) {
    console.log(err);
    alert('err ADD koala');
  });

};

function getKoalas() {
  console.log('in getKoalas');
  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then(function (response) {
    console.log('back from GET:', response);
    let el = $('#viewKoalas');
    el.empty();
    for (let i = 0; i < response.length; i++) {
if(response[i].ready_to_transfer == 'N'){
      el.append(`<tr><td>${response[i].name}</td><td>${response[i].gender}</td><td>${response[i].age}</td><td>${response[i].ready_to_transfer}</td><td>${response[i].notes}</td>
        <td><button class="delButton" data-id="${response[i].id}">Delete</button></td><td><button class="rttButton" data-id="${response[i].id}">Ready For Transfer</button></td> </tr>`);
        }else{
          el.append(`<tr><td>${response[i].name}</td><td>${response[i].gender}</td><td>${response[i].age}</td><td>${response[i].ready_to_transfer}</td><td>${response[i].notes}</td>
          <td><button class="delButton" data-id="${response[i].id}">Delete</button></td></tr>`);
        }
      }
  }).catch(function (err) {
    console.log(err);
    alert('err GET koalas');
  })
}; // end getKoalas


function transferKoala() {
  console.log('in transferKoala:', $(this).data('id'));
  $.ajax({
    method: 'PUT',
    url: '/koalas?id=' + $(this).data('id')
  }).then(function (response) {
    console.log(response);
    getKoalas();
  }).catch(function (err) {
    console.log(err);
    alert('error transferKoala');
  })
} // 


function delKoala() {
  console.log('in delKoala:', $(this).data('id'));
  // delete AJAX call
  $.ajax({
    method: 'DELETE',
    url: `/koalas?id=${$(this).data('id')}` // ex: /koalas?id=3
  }).then(function (response) {
    console.log(response);
    getKoalas();
  }).catch(function (err) {
    console.log(err);
    alert('error delKoala');
  })
} // end delKoala