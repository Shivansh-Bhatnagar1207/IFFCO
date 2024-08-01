const Report = require('../models/Report')

const createReport = async (req, res) => {
    const { Report_Type, Project_Name, Start_date, End_date, Project_Head, TeamID, Description } = req.body
    try {
        const reportgen = await Report.create({
            Report_Type,
            Project_Name,
            Start_date,
            End_date,
            Project_Head,
            TeamID,
            Description
        });
        res.status(200).json(reportgen);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getReport = async (req, res) => {
    const report = await Report.find({}).sort({ TeamID: 1 })
    res.status(200).json(report)
}

const deleteReport = async (req, res) => {
    try {

        const { id } = req.params;

        const deletereport = await Report.findOneAndDelete({ _id: id })
        if (!deletereport) {
            return res.status(400).json({ error: "Report Not found" })
        }
        res.status(200).json({ message: 'Report Deleted Successfully', deleteReport })
    } catch (error) {
        console.error('Error deleting Report:', error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
}


module.exports = {
    createReport,
    getReport,
    deleteReport,
}