const produtos = [
  { nome: "Base Líquida Matte", preco: "R$ 59,90" },
  { nome: "Batom Nude", preco: "R$ 29,90" },
  { nome: "Máscara de Cílios", preco: "R$ 39,90" },
  { nome: "Paleta de Sombras", preco: "R$ 79,90" },
  { nome: "Pó Compacto", preco: "R$ 49,90" },
  { nome: "Sérum Facial", preco: "R$ 89,90" },
  { nome: "Hidratante Facial", preco: "R$ 69,90" },
  { nome: "Shampoo Premium", preco: "R$ 54,90" },
  { nome: "Condicionador Premium", preco: "R$ 54,90" },
  { nome: "Kit Skincare", preco: "R$ 149,90" }
];

// Duplica até chegar perto de 50
const listaFinal = [];
while (listaFinal.length < 50) {
  listaFinal.push(...produtos);
}

const container = document.getElementById("lista-produtos");

listaFinal.slice(0, 50).forEach(produto => {
  const card = document.createElement("div");
  card.className = "card-produto";
  card.innerHTML = `
    <h3>${produto.nome}</h3>
    <p>${produto.preco}</p>
    <button>Comprar</button>
  `;
  container.appendChild(card);
});
