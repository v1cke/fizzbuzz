function runFizzBuzzGame() {
    let inputNumber = document.getElementById('inputField').value;
    if (inputNumber >100){
        alert('Bitte nur Zahlen zwischen 1 und 100 eintragen');
        inputNumber = '';
        return
    }
    let outputTableBody = '';
    outputTableBody += '<thead><tr><th>Zahl</th><th>FizzBuzz-Wert</th></tr></thead>';
    for (let i = 1; i <= inputNumber; i++) {
        let fizzBuzzValue = '';
        if (i % 3 === 0) {
            fizzBuzzValue += 'Fizz';
        }
        if (i % 5 === 0) {
            fizzBuzzValue += 'Buzz';
        }
        if (fizzBuzzValue) {
            outputTableBody += '<tr><td>' + i + '</td><td>' + fizzBuzzValue + '</td></tr>';
        }
    }

    document.getElementById('outputTableBody').innerHTML = outputTableBody;
    
}