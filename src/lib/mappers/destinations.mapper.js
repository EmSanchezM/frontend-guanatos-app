export const destinationMapper = branchObject => [
	{
		lat: branchObject.location?.coordinates[0] || 34.5863439,
		lng: branchObject.location?.coordinates[1] || -111.8035
	},
	branchObject.name
];
