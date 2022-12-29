import axios from "axios";

export async function postLogin(user: any): Promise<any> {
    return await axios({ 
        method: 'POST', 
        baseURL: process.env.NEXT_PUBLIC_HOST_SERVER, 
        url: '/auth/login', 
        data: user,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
}