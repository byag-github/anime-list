import NextAuth from "next-auth"
import googleAuth from "next-auth/providers/google"

const authOption = {
    providers: [
        googleAuth({
            clientId: "",
            clientSecret: ""
        })
    ]
}

const handler = NextAuth()