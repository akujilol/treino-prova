import { pool } from "../database/db.js";

class VeiculoService {
    async create(veiculo){
        const res = await pool.query(
            `INSERT INTO veiculos(modelo, marca, ano, placa) 
            values ($1, $2, $3, $4)
            RETURNING *`,
            [veiculo.modelo, veiculo.marca, veiculo.ano, veiculo.placa]
            );
        return res.rows[0];
    }

    async getAll(){
        const res = await 
        pool.query(
            `SELECT * FROM veiculos ORDER BY modelo`
        )
    return res.rows;
    }
}

export const veiculoService = new VeiculoService()