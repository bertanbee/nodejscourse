/* eslint-disable */
const stripe = Stripe('pk_test_51KaowqKdFspcpfmUbJCzVzxQvLHAtO99nbusn5prYZ9z2FSxZtINc2J4hKsHP1kLBi9HgiJAFUzkdvjiwywh4LDe00YanPas5L');

const bookTour = async tourId => {
    try {
      // 1) Get checkout session from API
      const session = await axios(
        `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
      );
      console.log(session);
  
      // 2) Create checkout form + chanre credit card
      await stripe.redirectToCheckout({
        sessionId: session.data.session.id
      });
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  