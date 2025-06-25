document.addEventListener("DOMContentLoaded", function() {
  // Toggle folders
  var togglers = document.getElementsByClassName("caret");
  for (var i = 0; i < togglers.length; i++) {
    togglers[i].addEventListener("click", function() {
      var nested = this.parentElement.querySelector(".nested");
      if (nested) {
        nested.classList.toggle("active");
        this.classList.toggle("caret-down");
      }
    });
  }

  // Handle file click and display in viewer
  var files = document.getElementsByClassName("file");
  for (var j = 0; j < files.length; j++) {
    files[j].addEventListener("click", function() {
      var viewer = document.getElementById("viewer");

      // formatér tekst med linjeskift
      var formattedText = this.dataset.content.replace(/\\n/g, "<br>");
      var content = "<h2>" + this.textContent + "</h2><p>" + formattedText + "</p>";

      // hvis der er billede
      if (this.dataset.imgs) {
       var imgList = this.dataset.imgs.split('#');
       imgList.forEach(function(src) {
        content += "<img src='" + src.trim() + "' alt='værkbillede' style='max-width:100%; margin-top:1em;'>";
       });
      }


      viewer.innerHTML = content;
    });
  }
});
