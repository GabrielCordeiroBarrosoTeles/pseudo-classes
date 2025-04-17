Em CSS, **pseudo‑classes** são palavras-chave anexadas a seletores que permitem estilizar elementos HTML em estados ou condições específicas, sem a necessidade de adicionar classes ou IDs extras no marcado. Elas são precedidas por dois pontos (`:`).  

---

## Para que servem  
- **Estados de interação:** estilizar links visitados (`:visited`), botões pressionados (`:active`), campos em foco (`:focus`).  
- **Posições e estrutura:** selecionar o primeiro filho de um container (`:first-child`), elementos em posições específicas na lista (`:nth-child()`).  
- **Exclusões e condições:** aplicar estilos apenas a elementos que **não** atendem a um critério (`:not()`), ou que estejam desabilitados (`:disabled`).  

Isso permite uma folha de estilo mais declarativa e reduz a necessidade de manipular o DOM via JavaScript ou de poluir seu HTML com classes puramente de apresentação.

---

## Quando usar  
1. **Feedback visual ao usuário**  
   - Destacar botões ou links quando o usuário passa o mouse (`:hover`) ou clica (`:active`).  
   - Mostrar foco claro em formulários (`:focus`) para melhorar acessibilidade.  
2. **Estilos condicionais baseados em posição**  
   - Listas com itens listrados: aplicar fundo alternado a linhas pares/ímpar (`:nth-child(even)` / `:nth-child(odd)`).  
   - Marcar o primeiro ou o último item de um grupo de cards (`:first-child` / `:last-child`).  
3. **Regras avançadas sem alterar o HTML**  
   - Estilizar todos os `<input>` que não sejam do tipo `submit` (`input:not([type="submit"])`).  
   - Desabilitar estilos para botões já desabilitados (`button:disabled`).  

---

## Exemplos práticos  

### 1. Efeito hover em links  
```html
<style>
  a {
    color: #0366d6;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>

<a href="#">Visite nosso site</a>
```

### 2. Destaque de campo em foco  
```html
<style>
  input {
    border: 1px solid #ccc;
    padding: 0.5em;
    transition: border-color 0.2s;
  }
  input:focus {
    border-color: #007acc;
    outline: none;
  }
</style>

<input type="text" placeholder="Seu nome">
```

### 3. Listrando uma tabela com nth-child  
```html
<style>
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
</style>

<table>
  <tr><td>Item 1</td></tr>
  <tr><td>Item 2</td></tr>
  <tr><td>Item 3</td></tr>
  <tr><td>Item 4</td></tr>
</table>
```

### 4. Seleção por posição e condição  
```html
<style>
  /* Primeiro e último card */
  .card:first-child { margin-left: 0; }
  .card:last-child  { margin-right: 0; }

  /* Todos os inputs, exceto os do tipo submit */
  input:not([type="submit"]) {
    background: #eef;
  }

  /* Botões desabilitados */
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

<div class="card">Card 1</div>
<div class="card">Card 2</div>
<button disabled>Enviar</button>
<input type="text">
<input type="submit" value="Ok">
```

---

### Pseudo‑classes comuns  

| Pseudo-classe      | Uso                                        |
|--------------------|--------------------------------------------|
| `:hover`           | Quando o cursor passa sobre o elemento     |
| `:active`          | No instante em que o elemento é clicado    |
| `:focus`           | Quando o elemento (input, botão) recebe foco |
| `:visited`         | Para links já visitados pelo usuário       |
| `:first-child`     | Primeiro filho de um elemento pai          |
| `:last-child`      | Último filho de um elemento pai            |
| `:nth-child(n)`    | Enésimo filho (pode usar fórmulas)         |
| `:not(seletor)`    | Exclui elementos que correspondam ao seletor |
| `:disabled`        | Elementos de formulário desabilitados      |

Com pseudo‑classes, seu CSS fica mais limpo e poderoso, permitindo responder a interações e estruturas de forma dinâmica e sem JavaScript extra.
