import { $Button, $Container } from 'routes/Root/root.styled.tsx';
import { Link } from 'react-router-dom';

export default function Root() {
	return (
		<$Container>
			<$Button>Load Language</$Button>
			<Link to="/create-language">
				<$Button>New Language</$Button>
			</Link>
		</$Container>
	);
}

