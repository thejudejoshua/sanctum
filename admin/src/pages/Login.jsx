import { useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";
import InputComponent from "../components/InputComponent";

export default function Login() {
	const { user, loading } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [submitting, setSubmitting] = useState(false);
	
	// 1. While we're still checking Supabase auth, don't show the form yet
	if (loading) {
		return <p className="t-copy t-pending">Checking access…</p>;
	}
	
	// 2. If already logged in, go straight to dashboard (or /admin, /team, etc.)
	if (user) {
		return <Navigate to="/" replace />; // change to "/admin" or where your dashboard lives
	}
	
	// 3. Only reach here if NOT logged in
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setSubmitting(true);
		
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		
		if (error) setError(error.message);
		setSubmitting(false);
	};
	
	return (
		<section className="auth-page flex flex-col items-center justify-center">
			<div className="auth-card content-card flex flex-col items-start justify-start">
				<div className={'form-title flex flex-col justify-center items-center'}>
					<h1 className="h5">Sanctum Admin</h1>
					<p className="t-highlights">
						Sign in to manage team, partners, and testimonials.
					</p>
				</div>
				
				<form onSubmit={handleSubmit} className="form auth-form flex flex-col">
					<div className="form-input-holder flex flex-col">
						<div>
							<InputComponent
								type="email"
								name="email"
								value={email}
								placeholder="Enter the email"
								required={true}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						
						<div>
							<InputComponent
								type="password"
								name="password"
								value={password}
								placeholder="Enter the password"
								required={true}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					
					{error && <p className="t-copy t-error">Error: {error}</p>}
					
					<Button
						type="submit"
						label={submitting ? "Signing in…" : "Sign in"}
						direction=""
						hierarchy="primary"
						disabled={submitting}
					/>
				</form>
			</div>
		</section>
	);
}
