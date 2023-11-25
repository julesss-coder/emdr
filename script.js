console.log("Hello,world!");

const testButton = document.querySelector(".test-button");
testButton.addEventListener("click", function() {
    if (this.style.backgroundColor === "salmon") {
        Object.assign(this.style, {
            backgroundColor: "white",
            color: "salmon",
            // marginBottom: "20px",
        });
    } else {
        this.style.backgroundColor = "salmon";
        this.style.color = "white";
        // this.style.marginBottom = "10px";
    }
});

const stripe = document.querySelector("#stripe");
stripe.addEventListener("click", function() {
    this.classList.add("animate");
});