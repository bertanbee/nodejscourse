/* eslint-disable */
const stripe = Stripe('pk_test_51KaowqKdFspcpfmUbJCzVzxQvLHAtO99nbusn5prYZ9z2FSxZtINc2J4hKsHP1kLBi9HgiJAFUzkdvjiwywh4LDe00YanPas5L');

const bookTour = async tourId => {
    const session = await axios(`http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`)

    console.log(session)
}

document.getElementById('book-tour').addEventListener('click', (e) => {
    e.target.textContent = 'Processing...'
    const { tourId } = e.target.dataset;
    bookTour(tourId)
});