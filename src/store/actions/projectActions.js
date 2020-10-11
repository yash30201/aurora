export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        // here we can run async code
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName : getState().firebase.profile.firstName,
            authorLastName : getState().firebase.profile.lastName,
            authorId : getState().firebase.auth.uid,
            createdAt : new Date()
        }).then(() => {
            dispatch({type : 'CREATE_PROJECT', project});
        }).catch((e) => {
            dispatch({type : 'CREATE_PROJECT_ERROR', e});
        })
        
    }
}