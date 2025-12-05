# 🛡️ SOC Incident Tracker

En este proyecto se desarrolló un sistema web de gestión de incidentes de seguridad el cual permite el registro, monitoreo y mitigación de amenazas en tiempo real.

![Estado](https://img.shields.io/badge/Status-Active-success)
![Seguridad](https://img.shields.io/badge/Security-BlueTeam-blue)

## 🚀 Tecnologías (Tech Stack)

* **Frontend:** Vanilla JavaScript (ES6+), CSS3 , HTML5 , Fetch API.
* **Backend:** Node.js, Express.js (REST API).
* **Base de Datos:** MySQL

## 📡 Documentación de la API

El backend expone una API RESTful para la gestión del ciclo de vida de los incidentes.

### 1. Solicitud GET
Obtiene el listado completo de amenazas detectadas, ordenadas cronológicamente.

* **Endpoint:** `/incidentes`
* **Método:** `GET`
* **Respuesta Exitosa (200 OK):**

![Image](https://github.com/user-attachments/assets/4d447271-0bc2-46a4-a76f-33f76034ac2a)

### 2. Solicitud POST
Registra un nuevo incidente.

* **Endpoint:** `/incidentes`
* **Método:** `POST`
* **Header:** `Content-Type: application/json`

![Image](https://github.com/user-attachments/assets/33d833c3-3dbf-4ec0-ac87-11ebcdb3700d)

### 3. Solicitud PUT
Obtiene el listado completo de amenazas detectadas, ordenadas cronológicamente.

* **Endpoint:** `/incidentes`
* **Método:** `PUT`
* **Respuesta Exitosa (200 OK):**

![Image](https://github.com/user-attachments/assets/4d447271-0bc2-46a4-a76f-33f76034ac2a)

### 4. Solicitud DELETE
Obtiene el listado completo de amenazas detectadas, ordenadas cronológicamente.

* **Endpoint:** `/incidentes`
* **Método:** `DELETE`
* **Respuesta Exitosa (200 OK):**

![Image](https://github.com/user-attachments/assets/4d447271-0bc2-46a4-a76f-33f76034ac2a)
