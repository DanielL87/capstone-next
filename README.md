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
fetch(`api/users/register`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "Daniel",
    password: "123",
  }),
});
```

### Response:

```js
{
  "success": true,
  user
}
```
