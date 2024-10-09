const reModels = require('../models/resultModels');

exports.getMotoGPResult = async (req, res) => {
    try {
        const results = await reModels.getAllMotoGPResult();
        // Đợi kết quả từ teamModels
        res.json(results); // Trả về kết quả khi truy vấn thành công
    } catch (err) {
        res.status(500).json({ message: 'Error fetching re' + err }); // Xử lý lỗi khi xảy ra
    }
};