import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    required: true,
                    placeholder: "your email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    required: true,
                    placeholder: "your password",
                },
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                // Simulate a user object; replace this with actual user authentication logic
                const user = {
                    id: 1,
                    email: credentials.email,
                };

                // Return user object if authentication is successful
                return user;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            // Add user email to token if it exists
            if (user) {
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            // Attach token email to session object
            if (token?.email) {
                session.user = {
                    email: token.email,
                };
            }
            return session;
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
