# Efeitos dos agrotóxicos na saúde

Este projeto começou a partir de um dos trabalhos das disciplinas de Desenvolvimento de Aplicativos Web e Datavis Studio II, no segundo semestre do Master em Jornalismo de Dados, Automação e Data Storytelling do Insper. Nas disciplinas, desenvolvemos um mini-projeto chamado Passo a Passo cujo objetivo era compreender o uso de eventos de scroll e click em Javascript, e praticar o uso da propriedade de CSS em conjunto com javascript para esconder e exibir elementos em sequência.

Na ocasião, eu estava trabalhando em uma pauta sobre os efeitos dos agrotóxicos na saúde para o site O Joio e O Trigo. Uma das demandas era apresentar um mapa do corpo humano apontando os principais impactos provocados pela exposição aos agrotóxicos. Foi quando decidi testar a ideia no protótipo desenvolvido em aula. 

A opção que havia sido apontada em um primeiro momento era de uma imagem estática. Porém, após a aula do passo a passo, observei a possibilidade de substituir a imagem estática por algo mais interativo, que desse movimento ao corpo humano. 

### Desafios

O primeiro passo foi criar as imagens no Figma. Para encontrar os desenhos do corpo humano e dos órgãos que seriam destacados na figura usei o plugin Storyset by Feepik. O modelo que eu criei foi melhorado pelas designers Clara Borges e Denise Matsumoto de O Joio e O Trigo. O desafio era tornar as figuras do corpo humano. 

Na primeira monitoria do projeto final com o professor Vinicius Sueiro, percebemos que o scroll não seria a melhor opção para apresentar o mapa do corpo humano, uma vez que obrigaríamos o leitor a rolar 19 páginas — número de efeitos dos agrotóxicos que seriam apresentados por meio dos desenhos. A solução proposta pelo professor foi transformá-lo em um carrossel. Assim, o leitor teria a opção de continuar observando o mapa (ao rolar para a lateral) ou seguir com a leitura do texto (rolando para baixo). 

Para isso, foi necessário usar a biblioteca Swiper e fazer algumas adaptações para que o projeto funcionasse tanto na versão Desktop quanto no mobile. Na versão Desktop, o leito pode usar os botões ou arrastar as figuras. No mobile, a opção mais intuitiva é a de arrastar, por isso, escondemos os botões. 

### Resultado

O resultado final pode ser observado na pasta V2 ou clicando [aqui](https://schirlei.github.io/efeitos-agrotoxicos/v2/). O projeto será publicado em reportagem prevista para o dia 25/07 no site de [O Joio e O Trigo](https://ojoioeotrigo.com.br/). 

Agradeço ao professor Vinicius Sueiro pela orientação e colocaboração com este trabalho. Também agradeço pelas aulas e orientações dos professores Carol Rozendo e Rodrigo Menegat. 

### Contato
E-mail: schirleialves@gmail.com
