Team:

Lynjai Jimenez
Nampeera Moreen
Daniel Lira


# Task-Manager-backend

Back end repository for capstone project.

`const API = "localhost://3000" `

# Users

## POST /users/register

### Request:

```js
    const res = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
```

### Response:

```js
{
  "success": true,
  user
}
```
