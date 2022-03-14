import React from 'react';
import munim from '../../../images/people-1.png';
import ahmeda from '../../../images/people-2.png';
import hamida from '../../../images/people-3.png';
import Blog from './Blog/Blog';
const Blogs = () => {
	const blogs = [
		{
			name: 'Munim Sharriar',
			comment:
				'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content.',
			image: munim,
			title: '2 times of brush in a day can Keep you healthy',
			time: '23 April 2022',
		},
		{
			name: 'Ahmeda Khanum',
			comment:
				'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content.',
			image: ahmeda,
			title: '2 times of brush in a day can Keep you healthy',
			time: '23 April 2022',
		},
		{
			name: 'Hamida Binte Alam',
			comment:
				'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content.',
			image: hamida,
			title: '2 times of brush in a day can Keep you healthy',
			time: '23 April 2022',
		},
	];

	return (
		<div style={{ marginTop: '80px' }} className="container">
			<div>
				<h5 className="d-block" style={{ fontWeight: '700', color: '#6ACECE' }}>
					OUR BLOG
				</h5>
				<h1 className="d-block fw-bolder">From Our Blog News</h1>
				<div className="row g-5 mt-1 mb-5">
					{blogs.map((blog) => (
						<Blog key={blog.name} blog={blog} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Blogs;
