  
    const hamburger = document.getElementById("hamburger");  
    const menuInsight = document.getElementById("menuInsight");  
    const searchBtn = document.getElementById("searchBtn");  
    const input = document.getElementById("searchInput");  
    const items = document.querySelectorAll(".searchable");  
    const noResult = document.getElementById("noResult"); 
    const form = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      const data = new FormData(form);
      const endpoint = form.action;

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          toast.style.display = 'block';
          setTimeout(() => {
            toast.style.display = 'none';
          }, 3000);
          form.reset();
        } else {
          const err = await response.json();
          alert(err.message || 'Submission failed. Please try again.');
        }
      } catch (error) {
        alert('Error sending message. Please check your internet connection or try again.');
      }
    });

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

      noResult.textContent = "This may be directly visible or not available on this site.";  
      noResult.style.display = found ? "none" : "block";  
    });  
