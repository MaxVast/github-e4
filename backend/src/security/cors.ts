export const trustedOrigins: string[] = ["http://localhost:5173"];

export const CORS_OPTIONS = {
    origin: trustedOrigins,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}
