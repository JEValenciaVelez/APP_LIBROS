# APP_LIBROS



---

<br />

---

## **📋 PARA COMENZAR...**



3. En la carpeta **`server`** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
       PORT=PuertDePreferencia
       URL_DB=mongodb://PuertoDeMongDB/NombreBaseDeDatos
   ```

4. Reemplazar **`URL_DB`** y **`PORT`** con tus propias credenciales para conectarte a mongoDB. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).


<br />

---

## **📖 ENUNCIADO GENERAL**

La idea de este proyecto es construir una aplicación web a partir de la API  en la que se pueda:

-  Buscar libros.
-  Filtrarlos.
-  Borrar libros
-  Crear nuevos libros.
-  Actualizar Libros



### **Únicos end-points que se pueden utilizar**

-  **Libros**: _"http://PORT/books"_
-  **Por nombre**: _"http://PORT/books/book"_
-  **actualizar**: _"http://PORT/books_
-  **eliminar**: _"http://PORT/books_
-  **crear**: _"http://PORT/books_


<br />

---

<div align="center">

## **📁 INSTRUCCIONES**

</div>

<br />

### **🖱 BASE DE DATOS**

MongoDB

**📍 MODELO 1 | Books**

-  Title. \*
-  image. \*
-  genres. \*
-  author. \*
-  date. \*


<br />



### **🖱 BACK-END**

 servidor utilizando **NodeJS** y **Express**. conectado a bases de datos mediante **Mongoose**.

 cuenta con las siguientes rutas:

#### **📍 GET | /books**

-  Obtiene un arreglo de objetos, donde cada objeto es un libro con su información.

#### **📍 GET | /books/book**

-  Esta ruta obtiene el detalle de un libro específico. Es decir que devuelve un objeto con la información pedida  de un libro.
-  El libro es recibido por parámetro (title).
-  Tiene que incluir los datos del género del libro al que está asociado.
.

#### **📍 POST | /books**

-  Esta ruta recibirá todos los datos necesarios para crear un libro.
-  Toda la información debe ser recibida por body.
-  Debe crear un libro en la base de datos.

#### **📍 DELETE | /books**

-  Esta ruta recibirá todos los datos necesarios para eliminar un libro.
-  Toda la información debe ser recibida por body.
-  Se elimina por titulo del libro.


#### **📍 PUT | /books**

-  Esta ruta recibirá todos los datos necesarios para actualizar un libro.
-  Toda la información debe ser recibida por body.
-  Se debe enviar el titulo del libro a actualizar.


<br />

---

<br />

### **🖱 FRONT-END**

 aplicación utilizando **React** y **Redux** con las  siguientes vistas:

**📍 LANDING PAGE |**  página de inicio o bienvenida con:

-  imagen de fondo representativa al proyecto.
-  Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** la página principal del SPA:

-  SearchBar: un input de búsqueda para encontrar libros por nombre.
-  Sector en el que se vea un listado de cards con los libros. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta **`GET /books`** y deberá mostrar su:
   -  Imagen.
   -  Nombre.
   -  Géneros.
-  Botones/Opciones para **buscar, crear, actualizar, eliminar** libro.
-  Paginado: paginado que muestra un total especificado de libros por pagina.


<br />



<br />

<div align="center">
<img src="https://th.bing.com/th/id/R.fc8eac6d4b67c57625f7cb3c9168d981?rik=9toB0qGlhQvdRg&pid=ImgRaw&r=0" alt="" />
</div>
