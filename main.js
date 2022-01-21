
const changeShape = () => {
    const square = document.getElementById("square");
    if (square.style.backgroundColor === "purple") {
      square.style.backgroundColor = "cyan";
      square.style.borderRadius = "50%";
      square.style.border = "5px dotted blue";
      document.body.style.backgroundColor = "#FFE5B4";
    } else {
      square.style.backgroundColor = "purple";
      square.style.borderRadius = "0";
      square.style.border = "5px dashed #C8A2C8";
      document.body.style.backgroundColor = "lightyellow";

    }
  };
  

  function clearBg() {
    window.location.reload();
  }
  
  const btnSquare = document.getElementById("btn-square");
  const btnRefresh = document.getElementById("btn-refresh");
  
  btnSquare.addEventListener("click", changeShape);
  btnRefresh.addEventListener("click", clearBg);
  