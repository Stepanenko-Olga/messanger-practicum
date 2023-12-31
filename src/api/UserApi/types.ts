export interface UpdateData {
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string
}

export interface UpdatePassword {
    oldPassword: string,
    newPassword: string
}

export interface SearchUserData {
    login: string;
}

