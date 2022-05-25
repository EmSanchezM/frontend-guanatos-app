export const jobsMapper = jobObject => ({
    id: jobObject.position._id,
	tenantId: jobObject.position.tenantId,
	name: jobObject.position.name
});