import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import jwt_decode from "jwt-decode";

export const authOptions = {
  secret: process.env.AUTH_SECRECT,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'Enter email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter Password',
        },
      },      
      async authorize(credentials) {
        const res = await axios({
          method: 'POST',
          baseURL: process.env.NEXT_PUBLIC_HOST_SERVER,
          url: '/auth/login',
          data: credentials,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        if (res.status === 200) {
          return res.data;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user = jwt_decode(token.accessToken);      
      session.user.name = session.user.username;
      return session;
    },
  },  
};
export default NextAuth(authOptions);
