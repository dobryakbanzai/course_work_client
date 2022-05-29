import {apiUrl} from "./config";
import axios from "axios";

export default {
    students: {
        resourceUrl: "students",
        getAll() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "GET"
            });
        },
        getOne(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "GET"
            });
        },
        add(item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "POST",
                data: item
            });
        },
        edit(id, item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "PUT",
                data: item
            });
        },
        delete(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "DELETE"
            });
        }
    },
    teachers: {
        resourceUrl: "teachers",
        getAll() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "GET"
            });
        },
        getOne(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "GET"
            });
        },
        add(item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "POST",
                data: item
            });
        },
        edit(id, item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "PUT",
                data: item
            });
        },
        delete(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "DELETE"
            });
        }
    },
    challenges: {
        resourceUrl: "challenges",
        getAll() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "GET"
            });
        },
        getOne(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "GET"
            });
        },
        add(item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "POST",
                data: item
            });
        },
        edit(id, item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "PUT",
                data: item
            });
        },
        delete(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "DELETE"
            });
        }
    },
    classes: {
        resourceUrl: "classes",
        getAll() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "GET"
            });
        },
        getOne(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "GET"
            });
        },
        add(item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "POST",
                data: item
            });
        },
        edit(id, item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "PUT",
                data: item
            });
        },
        delete(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "DELETE"
            });
        }
    },
    studches: {
        resourceUrl: "studches",
        getAll() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "GET"
            });
        },
        getOne(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "GET"
            });
        },
        add(item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "POST",
                data: item
            });
        },
        edit(id, item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "PUT",
                data: item
            });
        },
        delete(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "DELETE"
            });
        }
    },
    studteaches: {
        resourceUrl: "studteaches",
        getAll() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "GET"
            });
        },
        getOne(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "GET"
            });
        },
        add(item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "POST",
                data: item
            });
        },
        edit(id, item) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "PUT",
                data: item
            });
        },
        delete(id) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${id}`,
                method: "DELETE"
            });
        }
    },
    problem: {
        resourceUrl: "problem",
        getAll() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "GET"
            });
        }
    },

}