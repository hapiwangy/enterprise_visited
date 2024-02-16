const table = document.getElementById('spectable');

// this is a function for adding informations to the table
function adding(result){
    let temp;
    let count = 0;

    result.forEach(element => {
    // 新建一個<td>元素，並設定內容
    let row = table.insertRow();
    var cell1 = row.insertCell(0);
    cell1.innerHTML = element['date'];
    var cell1 = row.insertCell(1);
    cell1.innerHTML = element['gender'];
    var cell1 = row.insertCell(2);
    cell1.innerHTML = element['location'];
    var cell1 = row.insertCell(3);
    cell1.innerHTML = element['age'];
    var cell1 = row.insertCell(4);
    cell1.innerHTML = element['CPU'];
    var cell1 = row.insertCell(5);
    cell1.innerHTML = element['RAM'];
    var cell1 = row.insertCell(6);
    cell1.innerHTML = element['storage'];
    var cell1 = row.insertCell(7);
    cell1.innerHTML = element['color'];
    var cell1 = row.insertCell(8);
    cell1.innerHTML = element['price'];  
    var cell1 = row.insertCell(9);
    cell1.innerHTML = element['knowing'];    
});
}
d3.csv('./surface_sales_mock_data.csv').then(
    result => {
        adding(result);
    }
)
