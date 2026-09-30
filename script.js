// const morse = {
//   "A": ".-", "B": "-...", "C": "-.-.", "D": "-..",
//   "E": ".", "F": "..-.", "G": "--.", "H": "....",
//   "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
//   "M": "--", "N": "-.", "O": "---", "P": ".--.",
//   "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
//   "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
//   "Y": "-.--", "Z": "--..",
//   "1": ".----", "2": "..---", "3": "...--", "4": "....-",
//   "5": ".....", "6": "-....", "7": "--...", "8": "---..",
//   "9": "----.", "0": "-----",
//   " ": "/"
// };

const morse = {
  "A": "#@",   "B": "9!",   "C": "x$",   "D": "0?",   "E": "t%", 
  "F": "q&",   "G": "µ*",   "H": "4=",   "I": "z+",   "J": "§1",
  "K": "w>",   "L": "ç<",   "M": "7~",   "N": "p^",   "O": "¥2",
  "P": "b/",   "Q": "3[",   "R": "h]",   "S": "8:",   "T": "m;",
  "U": "£5",   "V": "c|",   "W": "2$",   "X": "f#",   "Y": "@" ,
  "Z": "k%",  

  "1": "α1",   "2": "β2",   "3": "γ3",   "4": "δ4",   "5": "ε5",
  "6": "ζ6",   "7": "η7",   "8": "θ8",   "9": "ι9",   "0": "κ0",

  " ": "_"
};


const morseInvertido = Object.fromEntries(
  Object.entries(morse).map(([letra, codigo]) => [codigo, letra])
);

let modo = "morse"; // começa como Morse → Texto

function inverterCampos() {
  const input = document.getElementById("input");
  const output = document.getElementById("output");

  const temp = input.value;
  input.value = output.value;
  output.value = temp;

  modo = modo === "morse" ? "texto" : "morse";

  if (modo === "morse") {
    input.placeholder = "Morse";
    output.placeholder = "Texto";
  } else {
    input.placeholder = "Texto";
    output.placeholder = "Morse";
  }
}

function traduzir() {
  const entrada = document.getElementById("input").value.trim();

  if (modo === "morse") {
    const convertido = entrada.split(" ").map(seq => morseInvertido[seq] || "").join("");
    document.getElementById("output").value = convertido;
  } else {
    const texto = entrada.toUpperCase();
    const convertido = texto.split("").map(char => morse[char] || "").join(" ");
    document.getElementById("output").value = convertido;
  }
}

function copiarTexto() {
  const texto = document.getElementById("output").value;
  navigator.clipboard.writeText(texto)
    .then(() => alert("Texto copiado!"));
}