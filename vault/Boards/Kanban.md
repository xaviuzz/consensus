---

kanban-plugin: basic

---

## CONCERNS

- [ ] [[Quiero tener un mensaje estructurado]]<br>#Concern
- [ ] Donde persisto los usuarios?<br>#Concern
- [ ] La existencia de helper solo para poder testear al usar el Toast de chakraUI<br>#Concern
- [ ] JWT sin caducidad<br>#Concern
- [ ] datos y codigo mezclados en I18n app<br>#Concern
- [ ] Test necesita la `<MemoryRouter>`<br>#Concern
- [ ] Para poder hacer IC tenemos que desplegar<br>#Concern
- [ ] Testeo de contextos<br>#Concern


## BLOCKED



## TODO

- [ ] Middleware que setea data para las routes en API [[Quiero tener un mensaje estructurado]]<br>#Emergent
- [ ] Usar el Mensaje para no autorizado [[Quiero tener un mensaje estructurado]]<br>#Chore
- [ ] Usar en el servicio de identity el mensaje [[Quiero tener un mensaje estructurado]]<br>#Emergent


## DOING

- [ ] Cambiar en API Message por Data<br>[[Quiero tener un mensaje estructurado]]<br>#Chore


## DONE

- [ ] El lintado propio de chackra no funciona y me importa un carajo<br>#Concern
- [ ] cambiar el nombre setPassword como prop en password<br>/app/src/components/login/Password.tsx<br>#Chore
- [ ] Incorporar un test E2E accesibilidad<br><br>[[E2E Acesibilidad]]<br>#Emergent<br>#Refactor <br>#Pomodoros_4
- [ ] Eliminar todos los warnings y errores identificados por el Linter<br><br>[[Lint]]<br>#Chore
- [ ] Poner eslint con los plugins:<br>	- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)<br>	- [React](https://github.com/jsx-eslint/eslint-plugin-react)<br>	- [ChakraUI](https://github.com/yukukotani/eslint-plugin-chakra-ui)<br>	<br>[[Lint]]<br>#Chore<br>Los de chackra no funcionan
- [ ] Usar asercion de no nulo <br>Cambiar en :<br>- src/components/login/CredentialsCheck.tsx:<br>- src/components/login/Password.tsx:<br><br>[[as String en placeholders]]<br>#Chore
- [ ] [[E2E Acesibilidad]]<br>#Concern
- [ ] [[Lint]]<br>#Concern
- [ ] [[as String en placeholders]]<br>#Concern
- [ ] Opcion olvidar identidad<br>[[Acceso seguro]]<br>#Task
- [ ] Identidad en agora<br>[[Acceso seguro]]<br>#Task
- [ ] credenciales validos<br>[[Acceso seguro]]<br>#Task
- [ ] credenciales no validos<br>[[Acceso seguro]]<br>#Task
- [ ] Endpoint login<br>[[Acceso seguro]]<br>#Task
- [ ] Subir Provider y Container a APP<br>#Chore
- [ ] Rellenar I18Ns<br>#Chore
- [ ] Login Form<br>[[Acceso seguro]]<br>#Task
- [ ] Hacer guarda en agora<br>[[Acceso seguro]]<br>#Task
- [ ] Crear ruta agora<br>[[Acceso seguro]]<br>#Chore
- [ ] Enrutar todo a login<br>[[Acceso seguro]]<br>#Chore
- [ ] Poner en github actions<br>[[Boilerplate]]<br>#Task
- [ ] Rehacer favico<br>[[Boilerplate]]<br>#Chore
- [ ] Seleccionar design system<br>[[Boilerplate]]
- [ ] Pelar malinali<br>[[Boilerplate]]
- [ ] Alta de proyecto en github<br>[[Boilerplate]]
- [ ] subida inicial del proyecto<br>[[Boilerplate]]
- [ ] Implementar el design sytem #Emergent <br>[[Boilerplate]]


## GONE

- [ ] Seleccionar iconos<br>[[Boilerplate]]<br>#Chore
- [ ] Falla la IC<br>#Bug
- [ ] poner lanzamiento de test por nombre en el makefile<br>#Chore<br>En realidad ya estaba
- [ ] endpoint logout<br>[[Acceso seguro]]<br>#Task
- [ ] 




%% kanban:settings
```
{"kanban-plugin":"basic","hide-tags-in-title":true,"tag-colors":[{"tagKey":"#Emergent","color":"rgba(132, 140, 155, 1)","backgroundColor":"rgba(25, 99, 33, 0.74)"},{"tagKey":"#Chore","color":"","backgroundColor":"rgba(37, 91, 182, 0.62)"},{"tagKey":"#Task","color":"","backgroundColor":"rgba(135, 72, 15, 0.49)"},{"tagKey":"#Bug","color":"rgba(157, 164, 179, 1)","backgroundColor":"rgba(247, 51, 7, 0.66)"}],"show-checkboxes":false,"new-note-folder":"Docs/Concerns","new-note-template":"Templates/Concern.md"}
```
%%