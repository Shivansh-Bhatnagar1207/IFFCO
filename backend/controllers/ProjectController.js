const Project = require('../models/Project')


const createProject = async (req, res) => {
    const { Project_Name, Project_head, Start_date, End_date, Description } = req.body
    try {
        const project = await Project.create({ Project_Name, Project_head, Start_date, End_date, Description })
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getProject = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.status(200).json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'An error occurred while fetching projects.' });
    }
};

module.exports = { createProject, getProject }