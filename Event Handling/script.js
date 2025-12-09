// Mouseover and mouseout events
    const box = document.getElementById("box")

    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = "skyblue"
    })

    box.addEventListener("mouseout", function () {
      box.style.backgroundColor = "lightgray"
    })

    // Input event
    const textInput = document.getElementById("textInput")

    textInput.addEventListener("input", function () {
      console.log(textInput.value)
    })

    // Submit event with validation
    const form = document.getElementById("myForm")
    const nameInput = document.getElementById("nameInput")

    form.addEventListener("submit", function (event) {
      if (nameInput.value === "") {
        event.preventDefault()
        alert("Field must not be empty")
      }
    })