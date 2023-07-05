const allRoles = {
  user: ['getJobApplications', 'createJobApplications'],
  admin: ['getUsers', 'manageUsers', 'getJobApplications', 'manageJobApplications'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
