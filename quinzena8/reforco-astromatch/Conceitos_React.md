Props:
Props, que é uma abreviação de properties, ou propriedades, são informações que podem ser passadas para um componente. Pode ser uma string, um número, até mesmo uma função. Este valor pode então ser utilizado pelo componente que a recebe.

State:
O estado (ou state) da sua aplicação, pode ser definido como: o lugar onde os dados vem e se transformam ao longo do tempo.
O state do componente é similar as props, mas é privado e totalmente controlado pelo componente.

Componentes:
Componentes permitem você dividir a UI em partes independentes, reutilizáveis, ou seja, trata cada parte da aplicação como um bloco isolado, livre de outras dependências externas. Componentes são como funções JavaScript. Eles aceitam entradas como propriedades (chamadas “props”) e retornam elementos React (JSX) que descrevem o que deve aparecer na tela.

Diferança entre componente de classe e componente funcional:
Hoje a diferença basicamente é em questões de estilos, um segue o principio de orientação à objetos enquanto outro segue para uma abordagem funcional.
Mas, antigamente os componentes funcionais em React não podiam ter estado e ciclos de vida, nesse caso, a gente tinha que usar o componente de classe.
Mas, com a chagada dos Hooks é possível ter estado e ciclos de vida tanto no funcional quanto no de classe.
O novo padrão que tanto a comunidade quanto o React está adotando é cada vez mais seguir com a abordagem funcional.

Hooks:
Hooks são funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais. Hooks não funcionam dentro de classes — eles permitem que você use React sem classes.

useState:
useState é um Hook que te permite adicionar o state do React a um componente de função, é uma nova maneira de usar as mesmas capacidades que o this.state tem em uma classe.

useEffect: 
Se você está familiarizado com os métodos do ciclo de vida do React, você pode pensar no Hook useEffect como componentDidMount, componentDidUpdate, e componentWillUnmount combinados.