document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let fullname = document.getElementById('fullname').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    let isValid = true;

    if (fullname === '') {
        showError('fullname', '✗ Họ tên không được để trống');
        isValid = false;
    } else {
        showSuccess('fullname', '✓ Hợp lệ');
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('email', '✗ Email không được để trống');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('email', '✗ Email không hợp lệ (thiếu tên miền)');
        isValid = false;
    } else {
        showSuccess('email', '✓ Hợp lệ');
    }

    if (password.length < 6) {
        showError('password', '✗ Mật khẩu phải có ít nhất 6 ký tự');
        isValid = false;
    } else {
        showSuccess('password', '✓ Hợp lệ');
    }

    if (confirmPassword === '') {
        showError('confirm-password', '✗ Vui lòng nhập lại mật khẩu');
        isValid = false;
    } else if (confirmPassword !== password) {
        showError('confirm-password', '✗ Mật khẩu xác nhận không khớp');
        isValid = false;
    } else {
        showSuccess('confirm-password', '✓ Hợp lệ');
    }

    if (isValid) {
        alert('Đăng ký thành công!');
    }
});

function showError(fieldId, message) {
    let input = document.getElementById(fieldId);
    let msgDiv = document.getElementById('msg-' + fieldId);

    input.className = 'error';
    msgDiv.className = 'msg error';
    msgDiv.textContent = message;
}

function showSuccess(fieldId, message) {
    let input = document.getElementById(fieldId);
    let msgDiv = document.getElementById('msg-' + fieldId);

    input.className = 'valid';
    msgDiv.className = 'msg valid';
    msgDiv.textContent = message;
}
