
//Select Grid
const grid = document.getElementById("pixel_canvas");
//Select color input
const colorSelect = document.getElementById("colorPicker");
// Select size input
const heightSelect = document.getElementById("input_height");
const widthSelect = document.getElementById("input_width");
//form
const form = document.getElementById('sizePicker');



form.addEventListener('submit', makeGrid);

function makeGrid(event) {
  let i,j,row,cell;
  let color = colorSelect.value
  let height = heightSelect.value
  let width = widthSelect.value
  let arr = [];

  console.log(height);
  //remove table
  while(grid.rows.length > 0) {
    grid.deleteRow(0);
  }


  for(i = 0; i < height; i++){
    row = grid.insertRow();
    for(j = 0; j < width; j++){
      cell = row.insertCell();
      arr.push(cell);
    }
  }
  arr.forEach(function(el){
    el.addEventListener('click', function(){
      if(el.style.backgroundColor != 'white'){
        el.style.backgroundColor='white';
      }else{
        el.style.backgroundColor=color;
      }
    })
  })
  event.preventDefault();
  return false;
}



// When size is submitted by the user, call makeGrid()
