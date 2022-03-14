import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
	const { name, comment, image, time, title } = props.blog;
	return (
		<Link
			className="col-md-4  col-sm-12 text-decoration-none text-black text-start"
			to="/blog/:id">
			<div className="border rounded p-5 shadow-sm">
				<div className="row align-items-center">
					<div className="col-4 ">
						<img src={image} style={{ width: '70%' }} alt="" />
					</div>
					<div className="col-8  text-start p-0">
						<p className="mb-0 lh-base fw-bold">{name}</p>
						<p className="mb-0">{time}</p>
					</div>
				</div>
				<h5 className="my-4 lh-base">{title}</h5>
				<div className=" mb-4">
					<p className="m-0" style={{ color: '#595762', fontSize: '0.9rem' }}>
						{comment}
					</p>
				</div>
				<button
					style={{
						color: '#ffffff',
						background:
							'linear-gradient(90deg,rgba(25, 211, 174, 1) 0%,rgba(15, 207, 236, 1) 35%)',
						border: '0',
						borderRadius: '0',
						padding: '0.5rem 1rem',
						letterSpacing: '0.1rem',
						fontWeight: '600',
					}}>
					Learn More
				</button>
			</div>
		</Link>
	);
};

export default Blog;
