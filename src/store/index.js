import Vue from 'vue'
import Vuex from 'vuex'
import RssApi from '../api'
import axios from "axios";
import {apiUrl} from "../config";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    students: [],
    teachers: [],
    challenges: [],
    classes: [],
    studches: [],
    studteaches: [],
    problem: [],
    user:[]
  },
  mutations: {

    //students
    'SET_STUDENTS'(state, students) {
      state.students = students;
    },
    'ADD_STUDENT'(state, student) {
      state.students.push(student);
    },
    'EDIT_STUDENT'(state, student) {
      const item = state.students.find(item => item.id === student.id);
      Object.assign(item, student);
    },
    'REMOVE_STUDENT'(state, student) {
      const index = state.students.findIndex(item => item.id === student.id);
      state.students.splice(index, 1);
    },

    //teachers
    'SET_TEACHERS'(state, teachers) {
      state.teachers = teachers;
    },
    'ADD_TEACHER'(state, teacher) {
      state.teachers.push(teacher);
    },
    'EDIT_TEACHER'(state, teacher) {
      const item = state.teachers.find(item => item.id === teacher.id);
      Object.assign(item, teacher);
    },
    'REMOVE_TEACHER'(state, teacher) {
      const index = state.teachers.findIndex(item => item.id === teacher.id);
      state.teachers.splice(index, 1);
    },

    //challenges
    'SET_CHALLENGES'(state, challenges) {
      state.challenges = challenges;
    },
    'ADD_CHALLENGE'(state, challenge) {
      state.challenges.push(challenge);
    },
    'EDIT_CHALLENGE'(state, challenge) {
      const item = state.challenges.find(item => item.id === challenge.id);
      Object.assign(item, challenge);
    },
    'REMOVE_CHALLENGE'(state, challenge) {
      const index = state.challenges.findIndex(item => item.id === challenge.id);
      state.challenges.splice(index, 1);
    },

    //classes
    'SET_CLASSES'(state, classes) {
      state.classes = classes;
    },
    'ADD_CLASS'(state, class1) {
      state.classes.push(class1);
    },
    'EDIT_CLASS'(state, class1) {
      const item = state.classes.find(item => item.id === class1.id);
      Object.assign(item, class1);
    },
    'REMOVE_CLASS'(state, class1) {
      const index = state.classes.findIndex(item => item.id === class1.id);
      state.classes.splice(index, 1);
    },

    //studches
    'SET_STUDCHES'(state, studches) {
      state.studches = studches;
    },
    'ADD_STUDCH'(state, studch) {
      state.studches.push(studch);
    },
    'EDIT_STUDCH'(state, studch) {
      const item = state.studches.find(item => item.id === studch.id);
      Object.assign(item, studch);
    },
    'REMOVE_STUDCH'(state, studch) {
      const index = state.studches.findIndex(item => item.id === studch.id);
      state.studches.splice(index, 1);
    },

    //studteaches
    'SET_STUDTEACHES'(state, studteaches) {
      state.studteaches = studteaches;
    },
    'ADD_STUDTEACH'(state, studteach) {
      state.studteaches.push(studteach);
    },
    'EDIT_STUDTEACH'(state, studteach) {
      const item = state.studteaches.find(item => item.id === studteach.id);
      Object.assign(item, studteach);
    },
    'REMOVE_STUDTEACH'(state, studteach) {
      const index = state.studteaches.findIndex(item => item.id === studteach.id);
      state.studteaches.splice(index, 1);
    },

    //problem
    'SET_PROBLEM'(state, problem) {
      state.problem = problem;
    },

    //alert
    'SET_ALERT_TEXT'(state, alertText) {
      state.alertText = alertText;
    },

    //user
    'ADD_USER'(state, user) {
      state.user.push(user);
    },
    'EDIT_USER'(state, user) {
      const item = state.user.find(item => item.id === user.id);
      Object.assign(item, user);
    },
    'REMOVE_USER'(state, user) {
      const index = state.user.findIndex(item => item.id === user.id);
      state.user.splice(index, 1);
    },
  },
  actions: {
    //students
    async initializeStudents(context) {
      try {
        const response = await RssApi.students.getAll();
        context.commit('SET_STUDENTS', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async addStudent(context, student) {
      try {
        const response = await RssApi.students.add(student);
        context.commit('ADD_STUDENT', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async editStudent(context, student) {
      try {
        const response = await RssApi.students.edit(student.id, student);
        context.commit('EDIT_STUDENT', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async removeStudent(context, id) {
      try {
        const response = await RssApi.students.delete(id);
        context.commit('REMOVE_STUDENT', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },

    //teachers
    async initializeTeachers(context) {
      try {
        const response = await RssApi.teachers.getAll();
        context.commit('SET_TEACHERS', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async addTeacher(context, teacher) {
      try {
        const response = await RssApi.teachers.add(teacher);
        context.commit('ADD_TEACHER', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async editTeacher(context, teacher) {
      try {
        const response = await RssApi.teachers.edit(teacher.id, teacher);
        context.commit('EDIT_TEACHER', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async removeTeacher(context, id) {
      try {
        const response = await RssApi.teachers.delete(id);
        context.commit('REMOVE_TEACHER', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },

    //challenges
    async initializeChallenges(context) {
      try {
        const response = await RssApi.challenges.getAll();
        context.commit('SET_CHALLENGES', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async addChallenge(context, challenge) {
      try {
        const response = await RssApi.challenges.add(challenge);
        context.commit('ADD_CHALLENGE', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async editChallenge(context, challenge) {
      try {
        const response = await RssApi.challenges.edit(challenge.id, challenge);
        context.commit('EDIT_CHALLENGE', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async removeChallenge(context, id) {
      try {
        const response = await RssApi.challenges.delete(id);
        context.commit('REMOVE_CHALLENGE', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },

    //classes
    async initializeClasses(context) {
      try {
        const response = await RssApi.classes.getAll();
        context.commit('SET_CLASSES', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async addClass(context, classe) {
      try {
        const response = await RssApi.classes.add(classe);
        context.commit('ADD_CLASS', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async editClass(context, classe) {
      try {
        const response = await RssApi.classes.edit(classe.id, classe);
        context.commit('EDIT_CLASS', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async removeClass(context, id) {
      try {
        const response = await RssApi.classes.delete(id);
        context.commit('REMOVE_CLASS', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },

    //studches
    async initializeStudches(context) {
      try {
        const response = await RssApi.studches.getAll();
        context.commit('SET_STUDCHES', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async addStudch(context, studch) {
      try {
        const response = await RssApi.studches.add(studch);
        context.commit('ADD_STUDCH', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async editStudch(context, studch) {
      try {
        const response = await RssApi.studches.edit(studch.id, studch);
        context.commit('EDIT_STUDCH', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async removeStudch(context, id) {
      try {
        const response = await RssApi.studches.delete(id);
        context.commit('REMOVE_STUDCH', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },

    //studteaches
    async initializeStudteaches(context) {
      try {
        const response = await RssApi.studteaches.getAll();
        context.commit('SET_STUDTEACHES', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async addStudteach(context, studch) {
      try {
        const response = await RssApi.studteaches.add(studch);
        context.commit('ADD_STUDTEACH', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async editStudteach(context, studch) {
      try {
        const response = await RssApi.studteaches.edit(studch.id, studch);
        context.commit('EDIT_STUDTEACH', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async removeStudteach(context, id) {
      try {
        const response = await RssApi.studteaches.delete(id);
        context.commit('REMOVE_STUDTEACH', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },

    //problem
    async initializeProblem(context) {
      try {
        const response = await RssApi.problem.getAll();
        context.commit('SET_PROBLEM', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },

    //user
    async addUser(context, user){
      try {
        context.commit('ADD_USER', user);
      }catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async editUser(context, user) {
      try {
        context.commit('EDIT_USER', user);
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async removeUser(context, user){
      try {
        context.commit('REMOVE_USER', user);
      }catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
  },


  modules: {
  }
})



















