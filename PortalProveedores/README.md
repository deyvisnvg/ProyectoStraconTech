# <div align="center"> PROYECTO PORTAL PROVEEDORES </div>

![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white) ![Python](https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white) 
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)


<div align="center">
  <img src="https://media2.giphy.com/media/uurtMtTKqkJda4dk8Y/200w.webp?cid=ecf05e47ipyhr4vjtllb1xiqwtxh39uto775myk2rj700nth&rid=200w.webp&ct=g" title="logo" alt="logo" width="250" height="250" />&nbsp;
</div>

### <div align="center">BACKEND</div>


# Empezando

1. Acceder a la ruta del proyecto

   ```bash
   cd ./PortalProveedores
   ```

2. Generar nuestro ambiente virtual

   ```bash
   python -m venv env
   ```

3. Inicializar nuestro ambiente virtual

   ```bash
   source ./env/Scripts/activate
   ```

4. Instalar dependencias desde requirements.txt:

   ```bash
   pip install -r requirements.txt
   ```

5. Crear la Base de Datos en PostgreSQL:

   ```bash
   CREATE DATABASE dbportal;
   ```

6. Actualizar las credenciales de la DB en el settings.py de Django:

   ```bash
   DATABASES = {
    "default": {
      "ENGINE": "django.db.backends.postgresql",
      "NAME": "dbportal",
      "USER": "postgres",
      "PASSWORD": "root",
      "HOST": "localhost",
      "PORT": "5432",
     }
   }
   ```

7. Realizar la migracion de la DB:

   ```bash
   python manage.py makemigrations
   # and
   python manage.py migrate
   ```

8. Ejecute el servidor de desarrollo:

   ```bash
   python manage.py runserver
   ```

# Funcionalidades de la Rest Api

Cada una de las funcionalidades implementadas, seran consumidas desde el Frontend.

### App Proveedor

- **Listar**

  > Method: GET

  > http://127.0.0.1:8000/api/proveedor

  - Response

    ```bash
    [
        {
            "id": 1,
            "nombreProveedor": "CrediVargas",
            "direccion": "Melinas",
            "celular": "51923974746",
            "asociacion": 1
        },
        {
            "id": 2,
            "nombreProveedor": "Falabella",
            "direccion": "Centenario",
            "celular": "51923974741",
            "asociacion": 1
        }
    ]
    ```

- **Insertar**

  > Method: POST

  > http://127.0.0.1:8000/api/proveedor

  _Body:_

  - Para **insertar proveedor**, enviar el siguiente **json** en el body del Postman. Ej.

    ```bash
    {
      "nombreProveedor": "Vargas",
      "direccion": "Mangos",
      "celular": "51923974742",
      "asociacion": 1
    }
    ```

- **Listar por ID**

  > Method: GET

  > http://127.0.0.1:8000/api/proveedor/1

  - Response

    ```bash
    {
      "id": 1,
      "nombreProveedor": "CrediVargas",
      "direccion": "Melinas",
      "celular": "51923974746",
      "asociacion": 1
    }
    ```

- **Modificación Parcial**

  > Method: PATCH

  > http://127.0.0.1:8000/api/proveedor/1

  _Body:_

  - Para **Modificar Parcialmente**, enviar el siguiente **json** en el body del Postman. Ej.

    ```bash
    {
      "nombreProveedor": "CrediVargas"
    }
    ```

### App Solicitud Compra

- **Insertar**

  > Method: POST

  > http://localhost:8000/solicitud/api/solicitud

  _Body:_

  - Para **insertar una solicitud compra** enviar el siguiente **json** en el body del Postman. Ej.

    ```bash
    {
      "estado": 1,
      "solicituds": [
          {
              "producto": 3,
              "cantidad": 5
          },
          {
              "producto": 4,
              "cantidad": 3
          }
      ]
    }
    ```

  - Interpretación

    ```bash
    > estado: # Representa si la solicitud esta Aprobada o No, puede ir null tambien.
    > producto: # Representa a la ID del producto seleccionado.
    > cantidad: # Representa la cantidad a solicitar del producto seleccionado.
    ```


- **Listar Solicitud Compra**

  > Method: GET

  > http://localhost:8000/solicitud/api/solicitudCompra

  - Response

    ```bash
    [
      {
          "id": 1,
          "solicitud": 10,
          "producto": 3,
          "cantidad": 5
      },
      {
          "id": 2,
          "solicitud": 10,
          "producto": 4,
          "cantidad": 6
      }
    ]
    ```

# Base de Datos

<div align="center">
  <img src="https://i.ibb.co/VL37kcb/DB.png" title="logo" alt="logo" width="650" height="450" />
</div>