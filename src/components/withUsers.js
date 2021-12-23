import users from '../data/users.json';

export const withUsers = Component => {
	return (props) => {
		return <Component {...props} users={users} />
	}
}