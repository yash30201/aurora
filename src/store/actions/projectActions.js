export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        // here we can run async code
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName : "Yoshi",
            authorLastName : "Senpai",
            authorId : 9932,
            createdAt : new Date()
        }).then(() => {
            dispatch({type : 'CREATE_PROJECT', project});
        }).catch((e) => {
            dispatch({type : 'CREATE_PROJECT_ERROR', e});
        })
        
    }
}