const allRoles = {
  user: ['getJobApplications', 'createJobApplications', 'getJobs', 'getJob', 'getSavedJobs', 'manageSavedJobs'],
  employer: ['getJobs', 'manageJobs', 'getJobApplications', 'getJob'],
  admin: ['getUsers', 'manageUsers', 'removeJob','getJobs', 'getJobApplications', 'manageJobApplications'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
