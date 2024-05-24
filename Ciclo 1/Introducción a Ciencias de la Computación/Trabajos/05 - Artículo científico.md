**Nombre del artículo:** [MLGO: a Machine Learning Guided Compiler Optimizations Framework](https://arxiv.org/abs/2101.04808)

**PDF:** https://arxiv.org/pdf/2101.04808

**Autores:** Mircea Trofin, Yundi Qian, Eugene Brevdo, Zinan Lin, Krzysztof Choromanski, David Li

**Año de publicación:** 2021

**Abstract:** El artículo...

**Citaciones:** https://app.litmaps.com/preview/191046459

- 27 referencias
- 44 citaciones
- **Citaciones futuras:**
	- **Wang**: Automatizando aprendizaje de reforzamiento en diseño de arquitectura para optimización de código.
	- **Colbert**: Generación de heurísticas para compilador de GPU usando aprendizaje de reforzamiento
	- **Falsafi**: Comprendiendo y aprovechando inlineamiento de funciones óptima
	- **Quetschlich**: Optimización de compiladores para computación cuántica usando aprendizaje de reforzamiento
	- **He**: Machine learning para vectorización de decisiones en kernel de OpenCL y SYCL.
	- **Navasca**: Prediciendo propiedades dinámicas de alocaciones de heap usando redes neuronales entrenadas en código estático: un abstracto intelectual.

**Referencia más citada:** Silver. Mastering the game of Go with deep neural networks and tree search

## Guion

¡Muy buenas! La investigación académica es un ámbito de mucha importancia en cualquier rama de la ciencia, al fin y al cabo es lo que permite encontrar bases científicas para nuevos descubrimientos y la innovación. Y... la ciencia de la computación no se queda atrás. En este video, vamos a adentrarnos al mundo de los papers académicos en esta disciplina.

El plan es tomar algún paper académico interesante y usar una herramienta llamada **LitMaps**, que nos permite evaluar su impacto mostrándonos un árbol con las citaciones y referencias hacia este documento.

En mi caso, el documento que voy a investigar hoy será este: "MLGO: a Machine Learning Guided Compiler Optimizations Framework". Básicamente, el título dice "MLGO: Un framework de optimizaciones de compilador guiada por machine learning"

Este paper tiene varios autores: Mircea Trofin, Yundi Qian, Eugene Brevdo, Zinan Lin, Krzysztof Choromanski, y David Li.

Fue publicado en 2021, y hasta el momento tiene 27 referencias y 44 citaciones en otros papers subsiguientes.

Viendo el **abstract** del paper podemos ver de qué trata. Verán, cuando uno crea un programa en un lenguaje compilado y lo va a correr, uno pasa el código por el **compilador**: un programa que convierte nuestro programa en dicho lenguaje a un código que puede correr la computadora.

Los compiladores suelen hacer **optimizaciones** a la hora de compilar código, usualmente con el objetivo de maximizar la velocidad del programa en su ejecución.

Este paper básicamente presenta un framework (un marco, una estructura) llamado MLGO que permite a los compiladores hacer estas optimizaciones usando **inteligencia artificial** en la forma de machine learning. Específicamente, permite hacerlo en lo que conocemos como LLVM, que es algo así como una "caja de herramientas": una infraestructura bastante en los compiladores de muchos lenguajes de programación.

En el artículo se comparan métodos tradicionales de optimización con aquellos logrados con este sistema MLGO.

También muestra dos posibilidades de algoritmos para machine learning para aplicar a este caso, que llaman "gradiente de política" y "estrategias de evolución".

---

- Mostrar las citas importantes
	- Pese a ser más o menos reciente, ya tiene 44 citas en otros papers.
- Mostrar citas de las citas
- Como ya dije: es un artículo reciente, pero ya ha tenido un buen impacto en este tema, de optimizaciones de compilador.

---

- Mostrar la bibliografía
- Litmaps de Silver (2016)
