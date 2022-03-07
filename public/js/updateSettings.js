/* eslint-disable */

// type is either 'password' or 'data'
const updateSettings = async (data, type) => {
  try {
    const url = type === 'password' ? 'http://127.0.0.1:3000/api/v1/users/updatePassword' : 'http://127.0.0.1:3000/api/v1/users/updateMe'
    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      alert(`${type.toUpperCase()} updated successfully!`);
    }
  } catch (err) {
    alert(err);
  }
};

document.querySelector('.form-user-data').addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value)
    form.append('email', document.getElementById('email').value)
    form.append('photo', document.getElementById('photo').files[0])

    updateSettings(form, 'data');
});

