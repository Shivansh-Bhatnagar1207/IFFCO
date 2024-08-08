const Report = require('../models/Report')

const createReport = async (req, res) => {
    const { Report_Type, Project_Name, Start_date, End_date, Project_Head, TeamID, Description } = req.body
    const user_id = req.user._id
    try {
        const reportgen = await Report.create({
            Report_Type,
            Project_Name,
            Start_date,
            End_date,
            Project_Head,
            TeamID,
            Description,
            user_id
        });
        res.status(200).json(reportgen);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getSingleReport = async (req, res) => {
    const { id } = req.params
    try {
        const report = await Report.findOne({ _id: id })
        res.status(200).json(report)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
}

const getReport = async (req, res) => {
    const user_id = req.user._id
    const report = await Report.find({ user_id })
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

const updateReport = async (req, res) => {
    const { id } = req.params
    const { Report_Type,
        Project_Name,
        Start_date,
        End_date,
        Project_Head,
        TeamID,
        Description } = req.body

    try {
        const editReport = await Report.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(editReport)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    createReport,
    getReport,
    deleteReport,
    getSingleReport,
    updateReport
}