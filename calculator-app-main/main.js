const buttonsDiv = Array.from(document.querySelectorAll("button"));
let output = document.getElementById("output");

const restrict = ["-", "+", "/", "x"];

buttonsDiv.forEach((butt) => {
  let buttText = butt.textContent;

  butt.addEventListener("click", () => {
    let current = output.textContent;
    let lastChar = current.slice(-1);

    if (buttText === "DEL") {
      output.innerHTML = current.slice(0, -1) || "0";
    } 
    
    else if (buttText === "RESET") {
      output.innerHTML = "0";
    } 
    
    else if (buttText === "=") {

      try {
        let result = current.replace(/x/g, "*").replace(/,/g, ".");
        output.innerHTML = eval(result);
      } 
      catch {
        output.innerHTML = "Error";
      }

    }
    

    else if (restrict.includes(buttText) && restrict.includes(lastChar)) {
      console.log("block");
    } 
    
    else if (buttText === "," && current.includes(",")) {
      console.log("block");
    } 
    
    else if (current === "0" && restrict.includes(buttText)) {
      console.log("block");
    } 
    
    else if (current === "0") {
      output.innerHTML = buttText;
    } 

    else {
      output.innerHTML += buttText;
    }

  });

});