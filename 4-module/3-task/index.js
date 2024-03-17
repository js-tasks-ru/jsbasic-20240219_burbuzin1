function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i].cells;

    for (let cell of row) {
      let availableAttr = cell.getAttribute('data-available');
      if (!table.rows[i].cells[3].hasAttribute('data-available')) {
        table.rows[i].setAttribute("hidden", "true");
      }

      switch (availableAttr) {
        case 'true':
          table.rows[i].classList.add('available');
          break;
        case 'false':
          table.rows[i].classList.add('unavailable');
          break;
      }

      if (cell.innerText == "m") {
        table.rows[i].classList.add('male');
      }
      if (cell.innerText == "f") {
        table.rows[i].classList.add('female');
      }
      if (isFinite(cell.innerText) && cell.innerText < 18) {
        table.rows[i].style.textDecoration = "line-through";
      }
    }
  }
}
