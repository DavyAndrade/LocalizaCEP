const form = document.getElementById("form-cep");
const cepInput = document.getElementById("cep");
const consultaBtn = document.getElementById("consultaBtn");

// Vigiando a entrada do usuário
cepInput.addEventListener("input", () => {
  let valor = cepInput.value.replace(/\D/g, ""); // entrada apenas de números

  if (valor.length > 5) {
    valor = valor.slice(0, 5) + "-" + valor.slice(5, 8);
  }

  cepInput.value = valor;

  if (valor.replace("-", "").length === 8) {
    consultaBtn.disabled = false;
  } else {
    consultaBtn.disabled = true;
  }
});

form.onsubmit = (e) => {
  e.preventDefault();
  consulta();
};

function consulta() {
  let cep = cepInput.value.replace("-", "");

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then((response) => response.json())
    .then((dados) => {
      if (dados.erro) {
        document.getElementById("resultado").innerHTML = `
        <div class="content__error">
          <p class="content__error-title">CEP não encontrado!</p>
          <p class="content__error-message">Verifique se o CEP está correto e tente novamente.</p>
        </div>
        `;
      } else {
        document.getElementById("resultado").innerHTML = `
        <section class="content__success">
          <h2 class="content__success-title">Endereço Encontrado</h2>
          <div class="content__success-box">
            <p class="content__success-label">CEP:</p>
            <p>${dados.cep}</p>
            </div>
          <div class="content__success-box">
            <p class="content__success-label">Logradouro:</p>
            <p>${dados.logradouro} 
          </div>
          <div class="content__success-box">
            <p class="content__success-label">Bairro:</p>
            <p>${dados.bairro}</p>
          </div>
          <div class="content__success-box">
            <p class="content__success-label">Cidade:</p>
            <p>${dados.localidade}</p>
          </div>
          <div class="content__success-box">
            <p class="content__success-label">Estado:</p>
            <p>${dados.uf}</p>
          </div>
        </section>
        `;
      }
    })
    .catch((erro) => {
      document.getElementById("resultado").innerHTML = `
        <div class="content__error">
          <p class="content__error-title">Erro!</p>
          <p class="content__error-message">Ocorreu um erro ao consultar o CEP. Tente novamente mais tarde.</p>
        </div>
      `;
      console.error(erro);
    });
}
