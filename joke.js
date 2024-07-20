import axios from "axios"
import { config } from "./config.js";
import * as cheerio from 'cheerio';


export const getJoke = async (ctx) => {
    const res = await axios.get(config.kvakaUrl);
    const $ = cheerio.load(res.data);
    //console.log(res.data)
   const data = $("#contanier > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > table.eBlock > tbody > tr > td > div > font > div").text()
   console.log(data)
   return data
}