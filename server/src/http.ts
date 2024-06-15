import { Express } from "express";
import { copyS3Folder } from "./aws";
import express from "express";

export function useHttp(app: Express) {
    app.use(express.json());

    app.get("/",(req, res)=>{
        res.send("konichiwa");
    })

    app.post("/project", async (req, res) => {
        const { replId, language } = req.body;

        if (!replId) {
            res.status(400).send("Bad request");
            return;
        }

        await copyS3Folder(`base/${language}`, `code/${replId}`);

        res.send("Project created");
    });
}