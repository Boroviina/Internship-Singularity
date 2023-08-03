const {Employer} = require("../../../src/models");

test('query should return result', async () => {
  const employer = await Employer.findOne({adminUser: "64a6c621d71c1b00fc6e6867"});
  expect(employer._id).toBe("64a6c621d71c1b00fc6e6867");
  });
