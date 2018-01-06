// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
$('#pixel_canvas').empty();
var rows = parseInt($('#input_height').val());
var cols = parseInt($('#input_width').val());
console.log(typeof(rows)+' '+cols);
for(var i = 0;i<rows;i++){
	$('#pixel_canvas').append('<tr id="tr-'+i+'">');
	console.log(typeof(rows)+' '+cols);
	for(var j = 0;j<cols;j++){
		
		$('#pixel_canvas').append('<td id="td-'+i+''+j+'" onclick="paint(this.id)"></td>');
	}
	$('#pixel_canvas').append('</tr>');
}
}

function paint(clicked_id){
	/*alert(clicked_id);*/
	id = '#'+clicked_id;
	/*alert(id);*/
	$(id).css("background-color", $('#colorPicker').val());
}
