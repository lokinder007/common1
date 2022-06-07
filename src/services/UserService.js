import axios from 'axios';

export class UserService {
    static serverURL = `http://localhost:9000`;

    // static getGroups() {
    //     let dataURL = `${this.serverURL}/groups`;
    //     return axios.get(dataURL);
    // }

    // static getGroup(contact) {
    //     let groupId = contact.groupId;
    //     let dataURL = `${this.serverURL}/groups/${groupId}`;
    //     return axios.get(dataURL);
    // }

    static getALLUsers() {
        let dataURL = `${this.serverURL}/users`;
        return axios.get(dataURL);
    }

    static getUser(userId) {
        let dataURL = `${this.serverURL}/users/${userId}`;
        return axios.get(dataURL);
    }

    static createUser(user) {
        let dataURL = `${this.serverURL}/users`;
        return axios.post(dataURL, user);
    }

    static updateUser(user, userId) {
        let dataURL = `${this.serverURL}/users/${userId}`;
        return axios.put(dataURL, user);
    }

    static deleteUser(userId) {
        let dataURL = `${this.serverURL}/users/${userId}`;
        return axios.delete(dataURL);
    }

}