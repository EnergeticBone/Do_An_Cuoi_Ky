document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var tel = document.getElementById('tel').value;
    var email = document.getElementById('email').value;

    var nameRegex = /^[a-ỹA-Ỹ\s]+$/;
    var telRegex = /^[0-9]+$/;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!nameRegex.test(name)) {
        alert('Họ và tên chưa đúng định dạng.');
        return false;
    }

    if (!telRegex.test(tel)) {
        alert('Số điện thoại chưa đúng định dạng.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Email chưa đúng định dạng.');
        return false;
    }

    alert('Gửi thành công!');
    return true;
});
