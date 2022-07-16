export function get_cookies(): any {
    let cookie = document.cookie;
    let output: any = {};
    cookie.split(/\s*;\s*/).forEach((pair) => {
        let vals: string[] = pair.split(/\s*=\s*/);
        output[vals[0]] = vals.splice(1).join('=');
    });
    return output;
}

export function set_cookie(key: string, value: string): void {
    let now = new Date();
    let expr_date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
    document.cookie = `${key}=${value};expires=${expr_date.toUTCString()};path=/`;
}

export function remove_cookie(key: string): void {
    document.cookie = `${key}=none;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
}