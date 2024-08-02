// Filer transaction by Name
const filterElementByName = () => {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
};


// Sort transactions by date
const sortList = () => {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("id01");
  switching = true;
  /* Make a loop that will continue until
        no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < b.length - 1; i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
            switch place with the current item: */

      if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
        /* if next item is numerically
              lower than current item, mark as a switch
              and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
            and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
};
