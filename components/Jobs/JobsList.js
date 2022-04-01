import React from 'react';
import JobDetails from './JobDetails';
import PageDirectory from './PageDirectory';

const jobs = {
	message: 'OK',
	data: {
		jobs: [
			{
				id: 17348,
				degree: 'Diploma',
				job_title: 'System Engineer',
				job_country: 'Philippines',
				job_type: 'Full-time',
				job_location: 'Makati',
				salary_range_from: 30000,
				salary_range_to: 40000,
				company_name: 'wealth access inc.',
				company_location: 'Makati',
				xp_lvl: '3 - 5 years',
			},
		],
		page: 1,
		size: 10,
		total_num: 265,
		sort: 1,
	},
};

const JobsList = () => {
	return (
		<div>
			<h1>{jobs.data.size} jobs found</h1>
			<JobDetails />
			<PageDirectory />
		</div>
	);
};

export default JobsList;
