## ✨ Sobre o Projeto

O **LocalizaCEP** é uma aplicação web simples e responsiva para consulta de endereços a partir do CEP, utilizando a <a href="https://viacep.com.br/" target="_blank">API ViaCEP</a>. O projeto foi desenvolvido com foco em praticidade, usabilidade e design moderno.

## 🚀 Tecnologias Utilizadas

- <strong>HTML5</strong>
- <strong>CSS3</strong> (com reset e variáveis CSS)
- <strong>JavaScript (ES6+)</strong>
- <strong>API ViaCEP</strong> (consumo via <code>fetch</code>)
- <strong>Google Fonts</strong> (Inter)

## 📁 Estrutura do Projeto

```
LocalizaCEP/
├── index.html
├── README.md
├── public/
│   └── LocalizaCEP-logo.svg
├── src/
│   ├── css/
│   │   ├── reset.css
│   │   └── style.css
│   └── js/
│       └── script.js
```

## 🖥️ Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/DavyAndrade/LocalizaCEP.git
   ```
2. Abra o arquivo <code>index.html</code> em seu navegador.
3. Digite um CEP válido no campo e clique em <strong>Consultar CEP</strong>.
4. O endereço será exibido na tela, ou uma mensagem de erro caso o CEP não seja encontrado.

## 📦 Funcionalidades

- Máscara automática para o campo de CEP.
- Validação de entrada (apenas números, formato 00000-000).
- Consumo da API ViaCEP para busca de endereço.
- Exibição de mensagens de sucesso e erro.
- Layout responsivo e moderno.

## 🛠️ Customização

- O estilo pode ser alterado em <code>src/css/style.css</code>.
- O JavaScript pode ser modificado em <code>src/js/script.js</code>.

## 🤝 Créditos

- [ViaCEP](https://viacep.com.br/) — API gratuita de consulta de CEP.
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

---

<div align="center">
  <sub>Desenvolvido com ❤️ por Davy Andrade</sub>
</div>
