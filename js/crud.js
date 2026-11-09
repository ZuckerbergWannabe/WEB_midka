$(document).ready(function () {

  const storageKey = "badBunnyConcerts";

  let concerts = [];

  // READ data from localStorage
  try {
    concerts = JSON.parse(
      localStorage.getItem(storageKey)
    ) || [];

    if (!Array.isArray(concerts)) {
      concerts = [];
    }
  } catch (error) {
    concerts = [];
  }

  function saveConcerts() {
    localStorage.setItem(
      storageKey,
      JSON.stringify(concerts)
    );
  }

  // READ: display all concerts
  function displayConcerts() {
    $("#concertRows").empty();

    concerts.forEach(function (concert) {
      const row = $("<tr>");

      $("<td>").text(concert.city).appendTo(row);
      $("<td>").text(concert.venue).appendTo(row);
      $("<td>").text(concert.date).appendTo(row);

      const actions = $("<td>");

      $("<button>")
        .text("Edit")
        .addClass("btn btn-warning btn-sm me-2 editBtn")
        .attr("data-id", concert.id)
        .appendTo(actions);

      $("<button>")
        .text("Delete")
        .addClass("btn btn-danger btn-sm deleteBtn")
        .attr("data-id", concert.id)
        .appendTo(actions);

      row.append(actions);
      $("#concertRows").append(row);
    });
  }

  // CREATE and UPDATE
  $("#concertForm").on("submit", function (event) {
    event.preventDefault();

    const city = $("#concertCity").val().trim();
    const venue = $("#concertVenue").val().trim();
    const date = $("#concertDate").val();

    if (!city || !venue || !date) {
      alert("Please fill all fields.");
      return;
    }

    const editId = $("#concertId").val();

    if (editId) {
      // UPDATE existing concert
      const concert = concerts.find(function (item) {
        return item.id === editId;
      });

      if (concert) {
        concert.city = city;
        concert.venue = venue;
        concert.date = date;
      }

    } else {
      // CREATE new concert
      const newConcert = {
        id: String(Date.now()) +
          Math.random().toString(36).slice(2),
        city: city,
        venue: venue,
        date: date
      };

      concerts.push(newConcert);
    }

    saveConcerts();
    displayConcerts();

    this.reset();
    $("#concertId").val("");
    $("#concertSubmit").text("Add Concert");
  });

  // EDIT button
  $("#concertRows").on("click", ".editBtn", function () {
    const id = String($(this).attr("data-id"));

    const concert = concerts.find(function (item) {
      return item.id === id;
    });

    if (!concert) return;

    $("#concertId").val(concert.id);
    $("#concertCity").val(concert.city);
    $("#concertVenue").val(concert.venue);
    $("#concertDate").val(concert.date);

    $("#concertSubmit").text("Save Changes");
  });

  // DELETE button
  $("#concertRows").on("click", ".deleteBtn", function () {
    const id = String($(this).attr("data-id"));

    const confirmed = confirm(
      "Are you sure you want to delete this concert?"
    );

    if (!confirmed) return;

    concerts = concerts.filter(function (concert) {
      return concert.id !== id;
    });

    saveConcerts();
    displayConcerts();

    // Reset edit form if needed
    $("#concertForm")[0].reset();
    $("#concertId").val("");
    $("#concertSubmit").text("Add Concert");
  });

  displayConcerts();

});