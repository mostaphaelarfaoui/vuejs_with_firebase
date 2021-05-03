<template>
    <div class="container">
        <form @submit.prevent='forgotPassword'>
  <div class="form-group">
    <label for="" >Email address</label>
    <input type="email" class="form-control" v-model="user.email">
  </div>
  <button type="submit" class="btn btn-primary">reset password</button>

</form>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
        return {
          user:{
            email:''
          }
        }
    },
    methods:{
      forgotPassword(){
        firebase.auth()
        .sendPasswordResetEmail(this.user.email)
            .then(()=>{
                alert('Check Your mailbox')
                this.user={
                    email:''
                }
            })
            .catch((error)=>{
                alert(error.message)
            })
      }
    }
}
</script>

