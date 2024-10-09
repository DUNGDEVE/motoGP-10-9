const { pool } = require('../config/database')

const getAllMotoGPResult = async () => {
	try {
		const [results] = await pool.query(`
			 SELECT 
    results.result_id,
    results.position,
    results.points,
    results.time_gap,
    sessions.session_name,
    teams.teamName,
    riders.firstname,
    riders.lastname,
	riders.riderImg ,
	riders.rider_number,
    countries.countryName,
    countries.flagImg
FROM results
INNER JOIN sessions ON sessions.session_id = results.session_id
INNER JOIN teams ON teams.team_id = results.team_id
INNER JOIN riders ON riders.rider_id = results.rider_id
INNER JOIN countries ON countries.country_id = riders.country_id
            ORDER BY results.points  DESC; `);
		return results; // Trả về kết quả sau khi query thành công
	} catch (error) {
		throw new Error('Database query failed' + error); // Bắt lỗi nếu query thất bại
	}
};

module.exports = {
	getAllMotoGPResult
}