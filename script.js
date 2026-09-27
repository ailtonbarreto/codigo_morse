const morse = {
  "A": ".-", "B": "-...", "C": "-.-.", "D": "-..",
  "E": ".", "F": "..-.", "G": "--.", "H": "....",
  "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
  "M": "--", "N": "-.", "O": "---", "P": ".--.",
  "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
  "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
  "Y": "-.--", "Z": "--..",
  "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..",
  "9": "----.", "0": "-----",
  " ": "/"
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