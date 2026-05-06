const express = require("express");
const axios = require("axios");

const app = express();

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJoYXJpbmkucy4yMDIzLmVjZUByaXRjaGVubmFpLmVkdS5pbiIsImV4cCI6MTc3ODA0OTc5MCwiaWF0IjoxNzc4MDQ4ODkwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNjQ0ZjZmZGUtY2YzNi00MmMzLWI5ODktZjJjOTUwZjRjMTQ4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiaGFyaW5pIHMiLCJzdWIiOiJmMjYwYjBmYy0yMDMwLTQ1MTYtYjhjOS04OWQ1YmU4NjBkY2YifSwiZW1haWwiOiJoYXJpbmkucy4yMDIzLmVjZUByaXRjaGVubmFpLmVkdS5pbiIsIm5hbWUiOiJoYXJpbmkgcyIsInJvbGxObyI6IjIxMTcyMzAwNDAwNDAiLCJhY2Nlc3NDb2RlIjoiQlRDRHFUIiwiY2xpZW50SUQiOiJmMjYwYjBmYy0yMDMwLTQ1MTYtYjhjOS04OWQ1YmU4NjBkY2YiLCJjbGllbnRTZWNyZXQiOiJOTWJEUnJWRVJVUWR3SGhWIn0.DrDFlEcCJzDf1dHlN4zLnCBVIofRrLH-plSys2-strY";

app.get("/notifications", async (req, res) => {
    try {

        const response = await axios.get(
            "http://20.207.122.201/evaluation-service/notifications",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        let data = response.data.notifications;

        data.sort((a, b) => {

            let p1 = 0;
            let p2 = 0;

            if (a.Type === "Placement") p1 = 3;
            else if (a.Type === "Result") p1 = 2;
            else if (a.Type === "Event") p1 = 1;

            if (b.Type === "Placement") p2 = 3;
            else if (b.Type === "Result") p2 = 2;
            else if (b.Type === "Event") p2 = 1;

            if (p1 !== p2) {
                return p2 - p1;
            }

            return new Date(b.Timestamp) - new Date(a.Timestamp);

        });

        let top10 = data.slice(0, 10);

        res.json(top10);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
