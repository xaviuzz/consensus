---
date: 2023-08-17
---

## Descripccion

Por lo visto [[ChakraUI]] exigue que los placeholders sean string y el useTranslation de [[I18Next]]  puede devolver undefined aunque nunca es nuestro caso or que tenemos el default a la propiedad.

```js
<Input 
placeholder={t('login.placeholder') as string} 
onChange={(e)=>{setLogin(e.target.value)}}
/>
```

## TradeOff
Podemos intentar wrapear t para que siempre devuelva, pero es complejo y el caso es solo en placeholders

Podemos hacer una funcion interna para recoger el placeholder que siempre devuelva

Podemos forzar con la ! aunque creo que esto puede darnos problemas con el linter

## Conclusion
Forzar con haciendo una [[asercion de no-nulo]] (!) es lo mas sencillo

### Acuerdos
![[Acuerdos#Placeholders]]

### Acciones
Cambiar en :
- src/components/login/CredentialsCheck.tsx:
- src/components/login/Password.tsx:


