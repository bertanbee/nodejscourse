exports.hideAlert = () => {
    const el = document.querySelector('.alert');
    if(el) el.parentElement.removeChild(el);
}

exports.showAlert = (type,msg) => {
    const el = document.querySelector('.alert');
    if(el) el.parentElement.removeChild(el);

    const markup = `<div class"alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

    el = document.querySelector('.alert');
    window.setTimeout(el.parentElement.removeChild(el), 3000);
}
