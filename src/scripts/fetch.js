export function loadImages(page) {
	return fetch(
		`https://api.unsplash.com/photos/?client_id=2jVS7T2AQHvoUSmqnRrMcd-5pRxQmwQyAb5WVNhe1Sc&page=${page}`,
		{
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		},
	)
		.then(res => {
			return res.json();
		})
		.then(data => {
			if (!data) return [];
			let items = [];
			data.map(({ id, user, urls }) =>
				items.push({
					id,
					author: user.name,
					preview_uri: urls.small,
					uri: urls.regular,
				}),
			);

			return items;
		});
}
