import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from './firebase/firebase'
import Db from './firebase/db'
import parseError from './parseError'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employees: [
      {
        id: 'fdssdfds',
        name: 'Andrea'
      },
      {
        id: 'dsadasdsa',
        name: 'Clara'
      },
      {
        id: 'dfsdSADE',
        name: 'Evelien'
      }
    ],
    sections: [
      {
        name: 'Service',
        color: '#EC407A'
      },
      {
        name: 'Kitchen',
        color: '#1565C0'
      },
      {
        name: 'Vacation',
        color: '#E53935'
      }
    ],
    shifts: [],
    error: null,
    currentUser: null,
    organization: ''
  },
  getters: {
    getCurrentUser: state => state.currentUser,
    getOrganization: state => state.organization,
    getEmployees: state => state.employees,
    getSections: state => state.sections,
    getShifts: state => state.shifts,
    getError: state => state.error
  },
  mutations: {
    signin (state, payload) {
      state.currentUser = payload
    },
    logout (state) {
      state.currentUser = null
    },
    addShift (state, payload) {
      state.shifts.push(payload)
    },
    addEmployee (state, payload) {
      state.employees.push(payload)
    },
    deleteEmployee (state, payload) {
      state.employees = state.employees.filter(employee => employee.id !== payload)
    },
    setError (state, payload) {
      state.error = payload
    },
    setOrganization (state, payload) {
      state.organization = payload
    }
  },
  actions: {
    autoSignin ({ commit, state }, payload) {
      console.log(state.organization)
      Db.collection('organizations').doc(state.organization).get()
        .then((organization) => {
          console.log(organization)
          organization.ref.collection('users').doc(payload).get()
            .then((user) => console.log(user))
        })
    //   Db.collection('users').doc(payload).get()
    //     .then((res) => {
    //     //   commit('signin', res.data())
    //       console.log(res)
    //     })
    },
    signin ({ commit }, payload) {
      Firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((res) => {
          Db.collection('users').where('name', '==', res.user.uid).get()
            .then((res) => {
              commit('signin', res.docs[0].data())
            })
        })
        .catch((error) => {
          commit('setError', parseError(error.code))
        })
    },
    signup ({ commit }, payload) {
      let newUser = {}

      Firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((res) => {
          newUser = {
            uid: res.user.uid,
            organization: payload.organization,
            email: payload.email,
            employee: false,
            manager: false,
            admin: true
          }
          Db.collection('organizations').doc(payload.organization).set({
            name: payload.organization
          })
        })
        .then((res) => {
          return Db.collection('organizations').doc(payload.organization).get()
        })
        .then((doc) => {
          return doc.ref.collection('users').doc(newUser.uid).set(newUser)
        })
        .then(() => {
          commit('signin', newUser)
          commit('setOrganization', newUser.organization)
        })
    },
    logout ({ commit }) {
      Firebase.auth().signOut()
        .then(() => commit('logout'))
    },
    addShift ({ commit }, payload) {
      commit('addShift', payload)
    },
    addEmployee ({ commit }, payload) {
      const newEmployee = {
        ...payload,
        id: Math.floor(Math.random() * 1234567876543)
      }
      commit('addEmployee', newEmployee)
    },
    updateEmployee ({ commit }, payload) {
      commit('deleteEmployee', payload.id)
      commit('addEmployee', payload)
    },
    deleteEmployee ({ commit }, payload) {
      commit('deleteEmployee', payload)
    },
    setOrganization ({ commit }, payload) {
      commit('setOrganization', payload)
    }
  }
})
