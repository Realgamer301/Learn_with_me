function protectpasscode() {
    const result = document.getElementById("tutorial").value;
    let password = 12345;
    let space = " ";
    if (result == space) {
        alert("space")
    } else {
        if (result == password) {
            location.href = "math.html"
        }
    }
}