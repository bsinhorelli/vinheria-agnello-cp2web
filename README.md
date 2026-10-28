# 🍷 vinheria-agnello

Sistema de controle de estoque da **Vinharia Agnello**, desenvolvido no **Checkpoint 02** com foco em **JavaScript**. 

---

## 👥 Membros do grupo

- Bruno Sinhorelli - 574415
- Diógenes Costa - 559127
- Roberto Felipe - 575266

---

## 📄 O que foi implementado no Checkpoint 02

O script `src/js/script.js` implementa o fluxo principal de cadastro de vinhos. Em um laço `do...while`, o usuário informa por `prompt` o **nome**, a **safra** e a **quantidade em estoque** de cada vinho, e o sistema processa os dados até o usuário decidir parar.

### 🛡️ Validação de entradas
- `solicitarTexto()`: repete a pergunta enquanto o nome estiver vazio.
- `solicitarNumero()`: repete a pergunta enquanto o valor não for um número válido maior que zero.

### 🏷️ Classificação por safra
- `classificarVinho()`: classifica o vinho de acordo com o ano.

| Safra | Classificação |
|---|---|
| 2020 ou mais | jovem |
| de 2000 a 2019 | amadurecido |
| antes de 2000 | antigo |

### ⚠️ Estoque baixo
- `estoqueBaixo()`: retorna `true` quando o estoque é menor que 5 unidades.
- `mostrarDados()`: exibe nome, safra, estoque e classificação no console e emite um `alert` quando o estoque está baixo.

### 📊 Resumo final
- `exibirResultadoFinal()`: ao encerrar o cadastro, mostra um `alert` com:
  - total de vinhos cadastrados;
  - quantidade de vinhos com estoque baixo;
  - nome e safra do vinho mais antigo.

### 🧠 Conceitos utilizados
Funções, estruturas condicionais, laços de repetição (`do...while` e `while`), validação de entrada, template strings, `prompt`, `alert` e `console.log`.

---

## 🔗 Link do projeto

https://bsinhorelli.github.io/vinheria-agnello-cp2web/


