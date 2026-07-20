const container = document.querySelector(".container")
const seats = Array.from(document.querySelectorAll(".row .seat:not(.occupied)"))
const count = document.querySelector("#count")
const total = document.querySelector("#total")
const movie = document.querySelector("#movie")

let ticketPrice = +movie.value  // the '+' in front convert it into a numeric value

//******************************/
// for the seats
const INDEXES = "INDEXES"
const SEATS = "SEATS-"

// for the movie and price
const MOVIE = "MOVIE"
const PRICE = "PRICE"
//******************************/

renderUI()

// Update the movie price
movie.addEventListener("change", e => {
  ticketPrice = +e.target.value
  updateSelectedCount()
  movieData(e.target.selectedIndex, e.target.value)
})


container.addEventListener("click", e => {
  if (!e.target.matches(".seat")) return

  const seat = e.target
  seat.classList.toggle("selected")

  updateSelectedCount()
})


//Update total and count
function updateSelectedCount() {
  const selectedSeats = seats.filter(seat => seat.classList.contains("selected"))
  count.textContent = `${selectedSeats.length}`
  total.textContent = `${(selectedSeats.length) * ticketPrice}`

  /* Getting selected seats indexes */
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
  localStorage.setItem(SEATS + INDEXES, JSON.stringify(seatsIndex))
}


function movieData(movie, price) {
  localStorage.setItem(MOVIE, movie)
  localStorage.setItem(PRICE, price)
}


// Load data from the local storage to the app
function renderUI() {
  const selectedSeats = JSON.parse(localStorage.getItem(SEATS + INDEXES))
  const movieIndex = localStorage.getItem(MOVIE)
  const moviePrice = localStorage.getItem(PRICE)

  if (selectedSeats === null && selectedSeats.length === 0) return

  seats.forEach((seat, index) => {
    if (selectedSeats.indexOf(index) === -1) return
    seat.classList.add("selected")
  })

  if (movieIndex === null) return
  movie.selectedIndex = movieIndex
}


// Initial count and total set
updateSelectedCount()