export const jobsMapper = jobObject => ({
	_id: jobObject.position._id,
	tenantId: jobObject.position.tenantId,
	name: jobObject.position.name
});
