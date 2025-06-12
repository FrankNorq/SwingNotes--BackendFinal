
# 📝 SwingNotes – Anteckningsapp med JWT-auth och PostgreSQL

SwingNotes är en RESTful API-tjänst där användare kan skapa, läsa, uppdatera och ta bort sina personliga anteckningar. Endast inloggade användare har tillgång till sina egna notes. Projektet är byggt med **Node.js**, **Express**, **JWT**, och **PostgreSQL**.

---

## 🚀 Funktioner

- ✅ Registrering och inloggning med krypterat lösenord (bcrypt)
- ✅ JWT-baserad autentisering (bearer-token)
- ✅ CRUD för anteckningar – endast åtkomst till egna
- ✅ Fullständig Swagger-dokumentation
- ✅ Sökfunktion på titel (`/api/notes/search?q=`)

---

## 📦 Teknologier

- Node.js / Express
- PostgreSQL (via `pg`)
- JSON Web Tokens (JWT)
- Bcrypt
- Swagger UI för API-dokumentation

---

## 🔧 Installation

1. **Kloning av repo**
   ```bash
   git clone på detta repot
   cd swingnotes
- Installera beroenden
- npm install
- Skapa PostgreSQL-databasen
- Öppna pgAdmin eller terminal och kör:
- CREATE DATABASE swingnotes;

- 🧠 Se till att databasnamnet matchar det i config/db.js. Exempel:
- const pool = new Pool({
-   user: "postgres",
-   host: "localhost",
 -  database: "swingnotes",
 -  password: "123",      // Ändra till ditt riktiga lösenord
 -  port: 5432,
- });
- Skapa .env-fil
- skriv in detta i env
- PORT=8000
- JWT_SECRET=dinSuperHemligaJWTnyckel
- 🔐 JWT_SECRET används för att skapa och verifiera JWT-tokens vid inloggning.

- Starta servern

node server.js
Backend körs nu på http://localhost:8000

Testa API med Swagger
Öppna: http://localhost:8000/api-docs


📚 API-dokumentation (Swagger)
Swagger UI finns här:

👉 http://localhost:8000/api-docs

Här kan du testa alla endpoints direkt i webbläsaren. Använd knappen "Authorize" för att logga in med en JWT-token.

## 🗃️ Databasdesign

Visualiserad på https://dbdiagram.io/d/Swingnotes-6840041f61dc3bf08d873d91

```sql
-- Används för att strukturera databasen
Table users {
  id SERIAL [pk, not null]
  email varchar(100) [not null, unique]
  name varchar(100) [not null]
  password_hash varchar(255) [not null]
  createdAt datetime [not null]
}

Table notes {
  id SERIAL [pk, not null]
  title varchar(50) [not null]
  text varchar(300) [not null]
  createdAt datetime [not null]
  modifiedAt datetime [not null]
  user_id integer [not null, ref: > users.id]
}
