https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator

La "Non-null assertion operator" en TypeScript es un operador que le dice al compilador que el valor de una expresión nunca será nulo o indefinido, incluso si el tipo de esa expresión incluye nulos o indefinidos. Se denota utilizando el signo de exclamación (`!`) al final de una expresión.

Esto puede ser útil cuando tienes la certeza de que un valor no será nulo en un punto particular de tu código, pero TypeScript no puede inferirlo automáticamente. Al usar este operador, estás asumiendo la responsabilidad de garantizar que la expresión nunca sea nula en ese contexto. Si en realidad el valor es nulo y usas el operador de no nulo, podrían ocurrir errores en tiempo de ejecución.