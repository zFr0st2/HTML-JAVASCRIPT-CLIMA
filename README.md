# HTML-JAVASCRIPT-CLIMA
## Uso
1. Asegúrate de tener acceso a internet.
2. Ejecuta el código en un entorno que admita JavaScript (por ejemplo, un navegador o Node.js).

## Código
```javascript
fetch('https://goweather.herokuapp.com/weather/Houston')
    .then(response => response.json())
    .then(function(data) {
        console.log('La temperatura es:', data.temperature)
        console.log('La velocidad del viento es:', data.wind)
    })
Resultados Esperados
El programa imprimirá en la consola la temperatura y la velocidad del viento de Houston.

Ejemplo de salida:
La temperatura es: 25°C
La velocidad del viento es: 10 km/h
Notas
Asegúrate de manejar adecuadamente los posibles errores de la solicitud a la API.
Puedes personalizar el código para realizar acciones adicionales con los datos proporcionados por la API.
Ten en cuenta que la API podría cambiar o estar fuera de servicio, lo que puede afectar la ejecución del código.
¡Espero que esta documentación sea útil! Si tienes alguna pregunta, ¡no dudes en preguntar! 🚀
¡Espero que encuentres útil esta documentación! Si tienes más preguntas o necesitas ajustes, estoy aquí para ayudarte. 🌟
