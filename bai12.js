document.getElementById('print-btn').addEventListener('click', function() {
    let day = parseInt(document.getElementById('input-day').value);
    let month = parseInt(document.getElementById('input-month').value);
    let year = parseInt(document.getElementById('input-year').value);

    let dateObj = new Date(year, month - 1, day);

    if (isNaN(dateObj.getTime())) {
        alert('Vui lòng nhập ngày tháng năm hợp lệ!');
        return;
    }

    let weekdays = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    let weekdayName = weekdays[dateObj.getDay()];

    document.getElementById('year-display').textContent = year;
    document.getElementById('month-display').textContent = 'Tháng ' + month;
    document.getElementById('day-display').textContent = day;
    document.getElementById('weekday-display').textContent = weekdayName;

    let now = new Date();
    let hours = now.getHours();
    let greeting = 'Chào buổi tối!';

    if (hours < 12) {
        greeting = 'Chào buổi sáng!';
    } else if (hours < 18) {
        greeting = 'Chào buổi chiều!';
    }

    document.getElementById('greeting-display').textContent = greeting;
});
