import firebase from 'firebase';
import { USER_STATE_CHANGE } from '../constants';

export const fetchUser = () => {
    return((dispatch)=> {
        firebase.firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot)=>{
            if(snapshot.exists){
                console.log('snapshot: ',snapshot.data());
                dispatch({
                    type: USER_STATE_CHANGE,
                    currentUser: snapshot.data()
                })
            }
            else{
                console.log('FirebaseError: user does not exist');
            }
        })
    })
}