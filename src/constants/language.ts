const LANGUAGE_LIST =
	process.env.REACT_APP_NATION === 'KOR'
		? [
				{ value: 'en', label: 'EN' },
				{ value: 'ko', label: 'KO' },
		  ]
		: process.env.REACT_APP_NATION === 'JPN'
		? [
				{ value: 'en', label: 'EN' },
				{ value: 'jp', label: 'JP' },
		  ]
		: process.env.REACT_APP_NATION === 'VNM'
		? [
				{ value: 'en', label: 'EN' },
				{ value: 'vi', label: 'VI' },
		  ]
		: [
				{ value: 'en', label: 'EN' },
				{ value: 'ko', label: 'KO' },
				{ value: 'vi', label: 'VI' },
				{ value: 'jp', label: 'JP' },
		  ];

export { LANGUAGE_LIST };
