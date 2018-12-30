

namespace Auth {
    export interface LoginCredential {
        username: string;
        password: string;
        remember?: boolean;
    }
    export interface LoginResult {
        token: string;
    }
}


