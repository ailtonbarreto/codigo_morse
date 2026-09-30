// Tabela de criptografia
const encript = {
  "A": "#@", "B": "9!", "C": "x$", "D": "0?", "E": "t%",
  "F": "q&", "G": "µ*", "H": "4=", "I": "z+", "J": "§1",
  "K": "w>", "L": "ç<", "M": "7~", "N": "p^", "O": "¥2",
  "P": "b/", "Q": "3[", "R": "h]", "S": "8:", "T": "m;",
  "U": "£5", "V": "c|", "W": "2$", "X": "f#", "Y": "@",
  "Z": "k%",

  "1": "α1", "2": "β2", "3": "γ3", "4": "δ4", "5": "ε5",
  "6": "ζ6", "7": "η7", "8": "θ8", "9": "ι9", "0": "κ0",

  " ": "_",

  ",": "~,", 
  ".": "~.", 
  "!": "~!", 
  "?": "~?", 
  ":": "~:", 
  ";": "~;", 
  "'": "~'", 
  "(": "~(", 
  ")": "~)",

  "Á": "A´", "É": "E´", "Í": "I´", "Ó": "O´", "Ú": "U´",
  "À": "A`", "È": "E`", "Ì": "I`", "Ò": "O`", "Ù": "U`",
  "Ã": "A~", "Õ": "O~",
  "Â": "A^", "Ê": "E^", "Î": "I^", "Ô": "O^", "Û": "U^"
};


// Cria tabela invertida automaticamente
const encriptInvertido = Object.fromEntries(
  Object.entries(encript).map(([char, code]) => [code, char])
);

// Modo atual
let modo = "descript"; // começa como descriptografar

function inverterCampos() {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  const btn = document.getElementById("translate_btn");

  // Troca valores
  const temp = input.value;
  input.value = output.value;
  output.value = temp;

  // Alterna modo
  modo = modo === "encript" ? "descript" : "encript";

  // Atualiza placeholders e botão
  if (modo === "encript") {
    input.placeholder = "Mensagem";
    output.placeholder = "Mensagem Criptografada";
    btn.innerText = "Criptografar";
    btn.style.background = "#c0030d";
  } else {
    input.placeholder = "Mensagem Criptografada";
    output.placeholder = "Mensagem";
    btn.innerText = "Descriptografar";
    btn.style.background = "#03df9d";
  }

}



function traduzir() {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  const entrada = input.value.trim();

  if (modo === "encript") {
    // Texto → Código
    const texto = entrada.toUpperCase();
    const convertido = texto.split("").map(char => encript[char] || "").join(" ");
    output.value = convertido;

    // LIMPA O INPUT APÓS CRIPTOGRAFAR
    input.value = "";
    
  } else {
    // Código → Texto
    const convertido = entrada.split(" ").map(seq => encriptInvertido[seq] || "").join("");
    output.value = convertido;
  }
}


function copiarTexto() {
  const output = document.getElementById("output");
  const texto = output.value;

  navigator.clipboard.writeText(texto)
    .then(() => {
      output.value = "";
    });
}
