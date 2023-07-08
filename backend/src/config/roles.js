const allRoles = {
  user: ['getJobApplications', 'createJobApplications', 'getJobs'],
  employer: ['getJobs', 'manageJobs'],
  admin: ['getUsers', 'manageUsers', 'removeJob', 'getJobApplications', 'manageJobApplications'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
