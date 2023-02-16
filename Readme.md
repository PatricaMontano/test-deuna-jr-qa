## Prueba QA junior

Para ejecutar el proyecto ejecute los siguientes comandos:

```sh
npm update
npm run cypress:open
```


## Descripción general: 
### Version de Cypress 
12.5.1
### Librerías Ocupadas adicionales 

- @badeball/cypress-cucumber-preprocessor
- @cypress/webpack-preprocessor
- @testing-library/cypress
- Cypress
- Cypress-iframe
- Ts-loader
- Typescript
- webpack

### Precondiciones

Se usó la opción chromeWebSecurity con la opción false para deshabilitar los errores por Cross origin 

### EJECUCION , PROBLEMAS RESOLUCIONES 

El siguiente caso de uso implementando la herramienta cypress se lo ha realizado de la siguiente manera, como se detalla a continuación. 

1. Prueba de humo para verificar brevemente la funcionalidad del sistema, esta nos dio un preámbulo de lo que veríamos previamente , como primera observación , se encontró un error persistente en la página https://kfc.co/ , textualmente : TypeError: Cannot read properties of undefined (reading 'currencyCode') , este error no afecta la funcionalidad de la página sin embargo la consola nos despliega un aviso de que está presente , como parte del trabajo observatorio , se verificó todas las páginas pertenecientes al grupo kfc encontrando el mismo resultado.


2. Con el preámbulo de la prueba de humo , podemos establecer con certeza el escenario de pruebas con una excepción importante, que en este caso es el error encontrado dentro de la página , el mismo que está encerrado haciendo uso de un try y catch, es importante tener en cuenta que al hacer uso de esa función debemos tener en cuenta que al usar esta función ignorará todos los errores de este tipo , por ello se ha tratado de ser muy específico e ignorar este error específico para que el test valide los resultados que esperamos obtener. 


### Problemas

- Uno de los problemas más importantes dentro de la prueba fue identificar un error en la página el mismo que si bien es cierto no afecta la funcionalidad del mismo , hace que la herramienta lo encuentre y detenga el test haciendo que una persona que está analizando el código pueda tener ciertos problemas al interpretar el mismo , la solución del mismo es ser más observadores , usar una prueba de humo funcional , validar y contrastar la consola del navegador con los avisos de cypress y con ello establecer reglas que evalúen el test tomando en cuenta el error persistente y limitando específicamente que solo obvie el error persistente en todas las páginas del grupo kfc , y aplicando la lógica implementada en paso 2. 


