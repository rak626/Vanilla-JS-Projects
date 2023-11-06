function calculateTimeRemaining(inputDate) {
    const targetDate = new Date(inputDate);
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        alert('The specified date has already passed.');
    }

    const totalSeconds = Math.floor(timeDifference / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
}
const inputDate = 'October 24 2023 09:00:00';

function renderDate() {
    const remainingTime = calculateTimeRemaining(inputDate);
    document.getElementById('day').value = remainingTime.days;
    document.getElementById('hour').value = remainingTime.hours;
    document.getElementById('minute').value = remainingTime.minutes;
    document.getElementById('second').value = remainingTime.seconds;
}

setInterval(renderDate, 0.8);
