import NextAuth from "next-auth";
import GoogleProvider  from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: "589779064723-gbmd2ckb8kkqlrs41j48uhn82ocbf3ah.apps.googleusercontent.com",
            clientSecret: "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",
        })
    ]
})
export {handler as GET, handler as POST}