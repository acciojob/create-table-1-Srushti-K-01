function insert_Row() {
    //Write your code here
	//access table 1st
	//create new row using insertrow
	//create new cell using insertcell
	//give innertext new cell1
	
	let table = document.getElementById("sampleTable");
    let newRow = table.insertRow(0);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}

}
