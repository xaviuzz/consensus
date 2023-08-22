---
date: 2023-08-21
---

## Descripccion
La convenencia o no de tener un mensaje estructurado con sus datos y metadatos para la comunicacion entre la app y el api

## TradeOff
- Un mensaje estructurado es predecible
- Solo podemos tipar la estructura pero no los contenidos que tendrian que ser adquiridos como any (conflicto con el [[eslint]])
- Podemos generar tipos para cada entidad que viaja en el dato aunque se antoja poco flexible a la larga
- Sin tipos en los datos no conseguimos una coleccion de DTO's
- Esos DTO's son compartidos en tre app y api, nos obligaria a tener un paquete donde estuviera todo el lenguage de comunicacion.

## Conclusion
Es demasiado pronto para dar una solucion completa , asi que vamos a quedarnos con la necesidad de tipar la estructura .
### Acuerdos
Los mensajes entre APP y API deberan responder a una estructura concreta de metadatos y de datos. Los posibles metadatos si estaran catalogados y tipados. No asi los datos.
### Acciones
- Cambiar en API Message por Data
- helper que setea data para las routes en API
- Usar el Mensaje para no autorizado
- Usar en el servicio de identity el mensaje


