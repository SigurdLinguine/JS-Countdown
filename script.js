document.getElementById("setTimer").addEventListener("click", function() {
    let seconds = document.getElementById("userInputSeconds").value * 1
    let minutes = document.getElementById("userInputMinutes").value * 60
    let hours = document.getElementById("userInputHours").value * 3600
    let count = seconds + minutes + hours
    console.log(seconds, minutes, hours)
    const timer = setInterval(function() {
      count--
      document.getElementById("display").innerHTML = count
      if (count === -1) {
        clearInterval(timer)
        document.getElementById("display").innerHTML = "Time's up!"
      }
    }, 1000)
})