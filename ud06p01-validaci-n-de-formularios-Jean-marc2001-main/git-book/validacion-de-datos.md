# ✅ Validación de Datos

Tómala como base y añade métodos que nos permitan validar los siguientes campos:&#x20;

<details>

<summary>🧑‍🦰Nombre y Apellidos</summary>

* [ ] Requerido
* [ ] Cadena de Texto entre 5 y 20 caracteres
* [ ] Al menos **5 caracteres** siendo el primero en mayúscula

</details>

<details>

<summary>🪪 DNI</summary>

* [ ] Requerido
* [ ] Cadena de texto de **longitud 9** caracteres

Se considera válido si cumple el siguiente patrón 00000000X donde:

* [ ] 0 puede ser cualquier número.&#x20;
* [ ] X puede ser TRWAGMYFPDXBNJZSQVHLCKE y debe corresponderse con el cálculo de la letra de los números anteriores.

</details>

<details>

<summary>📧 Correo electrónico</summary>

* [ ] Requerido
* [ ] Cadena de texto en formato `email`&#x20;
* [ ] Puede contener: letras mayúsculas y minúsculas del alfabeto inglés y números del 0 al 9, pero no empezar por número.&#x20;
* [ ] Puede contener el carácter punto, pero no al inicio, al final o repetirse consecutivamente.
* [ ] **En la parte del dominio**, además de lo anterior tendremos que permitir guiones `-` pero no al principio o final ni tampoco de manera consecutiva.&#x20;

</details>

<details>

<summary>🎂 Fecha de Nacimiento</summary>

* [ ] Requerido
* [ ] Campo tipo `date`

</details>

<details>

<summary>📱Número de Teléfono Móvil</summary>

* [ ] Requerido
* [ ] Cadena de texto de **longitud mínima 9**
* [ ] Debe empezar por el prefijo internacional: 0034, +34 o 34.&#x20;
* [ ] Seguido del número de móvil: 9 dígitos que empieza obligatoriamente por 6 o 7.&#x20;

</details>

<details>

<summary>🧭 Código Postal Español (00000)</summary>

* [ ] Requerido
* [ ] Contiene Exactamente 5 dígitos y, además:
* [ ] Las **2 primeras cifras** hacen referencia a la **provincia** y debe ser un numero entre el **01 al 52**.
* [ ] Las **3 últimas cifras** hacen referencia al distrito y debe ser un número entre el **000** al **999**

</details>

<details>

<summary>🔑 Password</summary>

* [ ] Requerido
* [ ] Cadena de texto entre 5 y 20 caracteres&#x20;
* [ ] debe contener al menos **1 letra mayúscula**, **1 minúscula** y **1 carácter especial.**
* [ ] Ambos campos password, deben tener el mismo contenido.

</details>



Para validar los tipos de campos se hará uso de [expresiones regulares](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular\_Expressions/Cheatsheet).

Aplica estas validaciones en las inserciones y modificaciones de los usuarios mostrando:&#x20;

1. Los mensajes de error correspondientes manteniéndose en el formulario actual con los valores que se introdujeron antes de iniciar la validación (no se debe resetear el formulario si ocurre un error).&#x20;
2. Si la operación ha sido exitosa (se pudo modificar o insertar un usuario), se mostrará un mensaje de confirmación en la vista del listado de usuarios.  **Nota:** Este apartado sólo se realizará en el caso de realizar el api de Spring.
