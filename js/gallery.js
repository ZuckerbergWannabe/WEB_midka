
$(document).ready(function () {


  let selectedCategory = "all";

  function filterMusic() {
    const searchText = $("#musicSearch")
      .val().toLowerCase().trim();

    let visibleCount = 0;

    $(".music-item").each(function () {
      const title = $(this).text().toLowerCase();

      const category = String(
        $(this).data("category")
      ).toLowerCase();

      const matchesSearch = title.includes(searchText);

      const matchesCategory =
        selectedCategory === "all" ||
        category === selectedCategory;

      if (matchesSearch && matchesCategory) {
        $(this).show();
        visibleCount++;
      } else {
        $(this).hide();
      }
    });

    $("#noMusicResults").toggle(visibleCount === 0);
  }

  $("#musicSearch").on("input", function () {
    filterMusic();
  });

  $(".music-filter").on("click", function () {
    selectedCategory = $(this).data("filter");

    $(".music-filter")
      .removeClass("active btn-primary")
      .addClass("btn-outline-primary");

    $(this)
      .addClass("active btn-primary")
      .removeClass("btn-outline-primary");

    filterMusic();
  });


  const images = $(".lightbox-image");
  let currentImage = 0;

  function showImage(index) {
    if (images.length === 0) return;

    currentImage =
      (index + images.length) % images.length;

    const imageSource = images
      .eq(currentImage).attr("src");

    $("#lightboxPhoto")
      .stop(true, true)
      .fadeOut(150, function () {
        $(this).attr("src", imageSource)
          .fadeIn(250);
      });
  }

  images.on("click", function () {
    currentImage = images.index(this);

    showImage(currentImage);

    $("#imageLightbox")
      .css("display", "flex")
      .hide()
      .fadeIn(250);
  });

  $("#lightboxNext").on("click", function () {
    showImage(currentImage + 1);
  });

  $("#lightboxPrev").on("click", function () {
    showImage(currentImage - 1);
  });

  $("#lightboxClose").on("click", function () {
    $("#imageLightbox").fadeOut(250);
  });

  $("#imageLightbox").on("click", function (event) {
    if (event.target === this) {
      $(this).fadeOut(250);
    }
  });

  $(document).on("keydown", function (event) {
    if (!$("#imageLightbox").is(":visible")) return;

    if (event.key === "Escape") {
      $("#imageLightbox").fadeOut(250);
    }

    if (event.key === "ArrowRight") {
      showImage(currentImage + 1);
    }

    if (event.key === "ArrowLeft") {
      showImage(currentImage - 1);
    }
  });

});
