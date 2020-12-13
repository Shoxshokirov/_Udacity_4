function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Bokiyev",
        "Bebutov",
        "Shokirov",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
