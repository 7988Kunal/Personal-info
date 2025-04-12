  
    const hamburger = document.getElementById("hamburger");  
    const menuInsight = document.getElementById("menuInsight");  
    const searchBtn = document.getElementById("searchBtn");  
    const input = document.getElementById("searchInput");  
    const items = document.querySelectorAll(".searchable");  
    const noResult = document.getElementById("noResult");  

    // Toggle menu  
    hamburger.addEventListener("click", () => {  
      menuInsight.classList.toggle("show");  
      noResult.style.display = "none";  
      input.value = "";  
      items.forEach(item => item.style.display = "block");  
    });  

    // Search on click  
    searchBtn.addEventListener("click", () => {  
      const filter = input.value.trim().toUpperCase();  

      menuInsight.classList.add("show");  

      if (filter === "") {  
        noResult.textContent = "Please enter some characters to search.";  
        noResult.style.display = "block";  
        items.forEach(item => item.style.display = "none");  
        return;  
      }  

      let found = false;  

      items.forEach(item => {  
        const text = item.textContent || item.innerText;  
        if (text.toUpperCase().startsWith(filter)) {  
          item.style.display = "block";  
          found = true;  
        } else {  
          item.style.display = "none";  
        }  
      });  

      noResult.textContent = "This is not available on this site.";  
      noResult.style.display = found ? "none" : "block";  
    });  