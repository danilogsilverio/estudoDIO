# Entendendo o Desafio

Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎

Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.

**Dica:** Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.

## Instruções para entrega

### 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

### Objetivo:

Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja)

Além disso, deve ter um método chamado `atacar` que deve atender os seguintes requisitos:

- Exibir a mensagem: `"o {tipo} atacou usando {ataque}"`
- O `{tipo}` deve ser concatenado com o tipo que está na propriedade da classe.
- O `{ataque}` deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

  | Tipo      | Ataque                |
  |-----------|-----------------------|
  | mago      | usou magia            |
  | guerreiro | usou espada           |
  | monge     | usou artes marciais   |
  | ninja     | usou shuriken         |

### Saída

Ao final, deve-se exibir uma mensagem:

- `"o {tipo} atacou usando {ataque}"`
  Exemplo:
  - mago atacou usando magia
  - guerreiro atacou usando espada