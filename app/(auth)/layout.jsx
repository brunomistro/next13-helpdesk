import Link from 'next/link'

export default function AuthLayout() {
	return (
		<>
		<nav>
			<h1>Dojo Helpdesk</h1>
			<Link href="/signup">Sign Up</Link>
			<Link href="/login">Login</Link>
		</nav>
		</>
	)
}
