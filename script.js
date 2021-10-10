// Mengambil element button pada class number jika ingin mengambil semua maka gunakan queryselectorAll
const numbers = document.querySelectorAll(".number")

// Untuk menambahkan event listener secara satu persatu maka gunakan forEach, dan tambahkan click event ke setiap element menggunakan addEventListener
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        // Untuk mengakses angka lakukan input event.target.value yang berasal dari atribut nilai pada tag button 
    inputNumber(event.target.value)
    // Dikerjakan untuk mengupdate atau merubah angka yang ditampilkan menggunakan function updateScreen dengan variable current number dikarenakanangka yang disimpan adalah sebuah string
    updateScreen(currentNumber)
    })
})

// Melakukan query selector untuk mendapatkan satu element pada calculator screen
const calculatorScreen = document.querySelector('.calculator-screen')
// Lakukan update untuk memperbarui nilai
const updateScreen = (number) => {
    calculatorScreen.value = number
}
// Setelah bagian atas terselesaikan terdapat permasalahan bahwa angka yang ditampilkan diawali dengan nol, untuk memperbaikinya menggunakan if statement
const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number
    } else {
        currentNumber += number
    }
}
// Definisikan 3 variabel menggunakan fitur let
let prevNumber = ''
let calculationOperator = ''
let currentNumber= '0'

// Kemudian pilih semua element button pada class operator
const operators = document.querySelectorAll(".operator")

// Untuk mennambahkan event listener secara satu persatu maka gunakan forEach, dan menambahkan click event ke setiap element menggunakan addEventListener
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        /// Untuk mengakses angka lakukan input event.target.value yang berasal dari atribut nilai pada tag button 
        inputOperator(event.target.value)
    })
})

// Definisikan inputOperator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}
// Menambahkan click event ke suatu element jadi menggunakan querySelector dan hanya ada satu sama dengan 
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})
// Mendefinisikan function calculate yang tersimpan pada variabel calculationOperator
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat (prevNumber) + parseFloat (currentNumber)
            break
        case "-":
            result = parseFloat (prevNumber) - parseFloat (currentNumber)
            break
        case "*":
            result = parseFloat (prevNumber) * parseFloat (currentNumber)
            break
        case "/":
            result = parseFloat (prevNumber) / parseFloat (currentNumber)
            break
        default:
            return
    }
    // Memperbarui variabel currentNumber yang menjadikan hasil kalkulasi yang ditampilkan dilayar
    currentNumber = result
    calculationOperator = ''
}

// Definisikan fungsi clear number
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
// Mengambil element button menggunakan kelas all-clear dan tambahkan click event 
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

// Untuk mengalkulasi angka desimal yaitu dengan mengambil element button yang memiliki kelas decimal dan tambahkan clickevent
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

// Definisikan function inputDecimal disini beri keterangan dot untuk memberikan bahwa tanda koma diganti dengan titik
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
} 
