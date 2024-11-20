const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString()); // Uncomment this if you want to log the time to the console
    clock.innerHTML = date.toLocaleTimeString(); // Corrected method
}, 1000);
