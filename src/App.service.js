import firebase from './firebase';

class ApiCall {
    async getProjects() {
        const db = firebase.firestore();
        const projects = [];
        await db.collection("projects").get().then(querySnapshot => {
            querySnapshot.forEach(function(doc) {
                let project = doc.data();
                projects.push(project);
            });
        })
        return projects;
    }
}

export default ApiCall;
  