const Project = require('../models/Project')



const createProject = async (req, res) => {
    const user_id = req.user._id
    const { Project_Name, Project_Head, Start_date, End_date, Description, Status } = req.body
    try {
        const project = await Project.create({ Project_Name, Project_Head, Start_date, End_date, Description, Status, user_id })
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getSingleProject = async (req, res) => {
    try {
        const { id } = req.params
        const project = await Project.findOne({ _id: id });
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const getProject = async (req, res) => {
    const user_id = req.user._id
    try {
        const projects = await Project.find({user_id});
        res.status(200).json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'An error occurred while fetching projects.' });
    }
};

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params
        console.log({ id });
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

const editProject = async (req, res) => {
    const { id } = req.params
    const { Project_Name, Project_Head, Start_date, End_date, Description, Status } = req.body
    try {
        const updateProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updateProject)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
}

module.exports = { createProject, getSingleProject, getProject, deleteProject, editProject }