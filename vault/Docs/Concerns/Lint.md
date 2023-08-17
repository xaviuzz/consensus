---
date: 2023-08-17
---

## Descripccion
La conveniencia de usar un sistema de Lintado para asegurar buenas practicas en el codigo.

## TradeOff
- A veces el Linter es demasiado restrictivo
- Podemos seleccionar que reglas aplicamos
- Existen conjuntos de reglas especificos para React
	- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
	- [React](https://github.com/jsx-eslint/eslint-plugin-react)
	- [ChakraUI](https://github.com/yukukotani/eslint-plugin-chakra-ui)
- Podemos ponerlo en un hook precommit o prepush, aunque resulta complicado y requiere setup especifico por parte del developer
- Podemos ponerlo en la CI pero parar el build por el lintado no me parece tan interesante y ademas de momento no tenemos la Ci funcionando.
## Conclusion

### Acuerdos
![[Acuerdos#Lint]]

### Acciones
- Poner eslint con los plugins:
	- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
	- [React](https://github.com/jsx-eslint/eslint-plugin-react)
	- [ChakraUI](https://github.com/yukukotani/eslint-plugin-chakra-ui)

- Eliminar todos los warnings y errores identificados por el Linter


