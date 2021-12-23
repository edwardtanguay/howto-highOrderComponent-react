export const FullInfoList = ({ title, users }) => {
	return (
		<>
			<h2>{title}</h2>
			{users.map((user, i) => {
				return (
					<div key={i} className="user">
						<div className="name">{user.name}</div>
						<ul>
							<li>{user.email}</li>
							<li>{user.phone}</li>
						</ul>
					</div>
				)
			})}
		</>
	)
}