
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import firestore from '@react-native-firebase/firestore';

export const handleGoogleAuth=async()=>{

  let pid = null
  try {
      
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn(); 
       firestore().collection('Users')
      .where('email', '==', userInfo.user.email)
      .get()
      .then( async querySnapshot => {
        if(querySnapshot.size === 0){

          const newDoc = firestore().collection('Users').doc()
          const newDocRef = await newDoc.get()

          let data={
            uid: newDocRef.id,
            photo: userInfo.user.photo,
            givenName: userInfo.user.givenName,
            familyName: userInfo.user.familyName,
            name: userInfo.user.name,
            email: userInfo.user.email,
            id: userInfo.user.id,
            signUpMode:"google"
          }

          firestore()
          .collection('Users').doc(newDocRef.id)
          .set(data)
          .then(() => {
            pid = newDoc.uid
              return newDocRef.id;
            console.log('User added!');
          }).catch(err =>{
            console.log('ERR Login: ', err)
          })
    

        }else{
          pid = newDoc.uid
            console.log('========',querySnapshot.docs[0]._data.uid )
            return querySnapshot.docs[0]._data.uid
         
        }

      });

      
    } catch (error) {
      console.log(error)
    }
    return pid
    
};