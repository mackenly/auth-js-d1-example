import { redirect } from 'next/navigation';
import { signIn, signOut, auth } from './auth';
import { updateRecord } from '@auth/d1-adapter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';

async function updateName(formData: FormData): Promise<void> {
	'use server';
	const session = await auth();
	if (!session?.user?.id) {
		return;
	}
	const name = formData.get('name') as string;
	if (!name) {
		return;
	}
	const query = `UPDATE users SET name = $1 WHERE id = $2`;
	await updateRecord(process.env.DB, query, [name, session.user.id]);
	redirect('/');
}

export default async function Home() {
	const session = await auth();

	return (
		<main className="flex items-center justify-center min-h-screen bg-background">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center">{session ? 'User Profile' : 'Login'}</CardTitle>
					<CardDescription className="text-center">
						{session ? 'Manage your account' : 'Welcome to the auth-js-d1-example demo'}
					</CardDescription>
				</CardHeader>
				<CardContent>
					{session ? (
						<div className="space-y-4">
							<div className="flex items-center space-x-4">
								<Avatar>
									<AvatarImage src={session.user?.image || ''} alt={session.user?.name || ''} />
									<AvatarFallback>{session.user?.name?.[0] || 'U'}</AvatarFallback>
								</Avatar>
								<div>
									<p className="font-medium">{session.user?.name || 'No name set'}</p>
									<p className="text-sm text-muted-foreground">{session.user?.email}</p>
								</div>
							</div>
							<div>
								<p className="text-sm font-medium">User ID: {session.user?.id}</p>
							</div>
							<form action={updateName} className="space-y-2">
								<Label htmlFor="name">Update Name</Label>
								<Input id="name" name="name" placeholder="Enter new name" />
								<Button type="submit" className="w-full">
									Update Name
								</Button>
							</form>
						</div>
					) : (
						<form
							action={async (formData) => {
								'use server';
								await signIn('resend', { email: formData.get('email') as string });
							}}
							className="space-y-4"
						>
							<div className="space-y-2">
								<Input
									type="email"
									name="email"
									placeholder="Email"
									autoCapitalize="none"
									autoComplete="email"
									autoCorrect="off"
									required
								/>
							</div>
							<Button className="w-full" type="submit">
								Sign in with Resend
							</Button>
						</form>
					)}
				</CardContent>
				{session && (
					<CardFooter>
						<form
							action={async () => {
								'use server';
								await signOut();
								Response.redirect('/');
							}}
						>
							<Button type="submit" variant="outline" className="w-full">
								Sign out
							</Button>
						</form>
					</CardFooter>
				)}
			</Card>
		</main>
	);
}
