import {Pool}  from "pg";
import "dotenv/config";

const poll =new Pool({
    connectionString: process.env.DATABASE_URL,
});

Pool.on("error", (err) =>{
    console.error("Erro em cliente ocioso:", err);
});

export {pool};