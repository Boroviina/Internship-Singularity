const allRoles = {
  user: ['getJobApplications', 'createJobApplications', 'getJobs', 'getJob', 'getSavedJobs', 'manageSavedJobs'],
  employer: ['getJobs', 'manageJobs'],
  admin: ['getUsers', 'manageUsers', 'removeJob', 'getJobApplications', 'manageJobApplications', 'manageEmployers'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
