const Project = require('../models/Project')


const createProject = async (req, res) => {
    const { Project_Name, Project_head, Start_date, End_date, Description, Status } = req.body
    try {
        const project = await Project.create({ Project_Name, Project_head, Start_date, End_date, Description, Status })
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

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params
        console.log({id});
        const deletedProject = await Project.findOneAndDelete({ _id: id });

        if (!deletedProject) {
            return res.status(404).json({ error: 'Project not found' });
        }

        res.json({ message: "Project deleted successfully", deletedProject });
    } catch (error) {
        console.error('Error in deleting project:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { createProject, getProject, deleteProject }