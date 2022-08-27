function toggleShow(){
  const showAndHide = document.querySelector("#about");
  const toggleAboutButton = document.querySelector(".toggle-about-button");
  if (showAndHide.classList.contains("hide")){
    showAndHide.classList.remove("hide");
    showAndHide.classList.add("show");
    if(showAndHide.classList.contains("english")){
      toggleAboutButton.innerHTML = "Read less";
    }else{
      toggleAboutButton.innerHTML = "Leer menos";
    }
  }else{
    showAndHide.classList.remove("show");
    showAndHide.classList.add("hide");
    if(showAndHide.classList.contains("english")){
      toggleAboutButton.innerHTML = "Read more";
    }else{
      toggleAboutButton.innerHTML = "Leer más";
    }
  }
}


