import { useCookies } from "@vueuse/integrations/useCookies";

const cookie = useCookies()
const TOKEN_KEY = 'admin-token'

export function setToken(token: string): void{
    return cookie.set(TOKEN_KEY, token)
}

export function getToken(): any{
    return cookie.get(TOKEN_KEY)
}

export function removeToken(): void{
    return cookie.remove(TOKEN_KEY)
}