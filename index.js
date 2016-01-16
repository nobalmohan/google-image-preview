function init() {

  var previewImage = document.getElementsByClassName("previewImage");

  //For all the image loaded, map it wht a click event
  for (var i = 0; i < previewImage.length; i++) {
    previewImage[i].addEventListener("click", function() {
      showPreview(this, previewImage);
    }, false);
  }

};

function showPreview(selectedImageSrc, previewImage) {

  //Enable the preview container
  document.querySelector(".image-preview-container").style.display = "block";

  //Set the preview source to the selected image
  document.getElementById("previewImage").setAttribute("src", selectedImageSrc.getAttribute("src"));
  // Open image in new page
  document.getElementById("viewImage").setAttribute("href", selectedImageSrc.getAttribute("src"));


  //Previous Image function
  var previousImage = document.getElementById("previousImage");
  previousImage.onclick = function() {
    showPreviousImage(selectedImageSrc.dataset.result, previewImage);
  };

  //Next image function
  var nextImage = document.getElementById("nextImage");
  nextImage.onclick = function() {
    showNextImage(selectedImageSrc.dataset.result, previewImage);
  };

  //Close event
  var closePreview = document.getElementById("closePreview");
  closePreview.onclick = function() {
    document.querySelector(".image-preview-container").style.display = "none";
  };

};

function showPreviousImage(selectedImage, previewImage) {
  for (var i = 0; i < previewImage.length; i++) {
    if (previewImage[i].dataset.result === selectedImage) {
      if (previewImage[i - 1]) {
        previewImage[i - 1].click();
      } else {
        previewImage[11].click();
      }
    }
  }
};

function showNextImage(selectedImage, previewImage) {
  for (var i = 0; i < previewImage.length; i++) {
    if (previewImage[i].dataset.result === selectedImage) {
      if (previewImage[i + 1]) {
        previewImage[i + 1].click();
      } else {
        previewImage[0].click();
      }
    }
  }

};
