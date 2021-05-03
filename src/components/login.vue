<template>
    <div class="container">
        <form @submit.prevent='userLogin'>
  <div class="form-group">
    <label for="" >Email address</label>
    <input type="email" class="form-control" v-model="user.email">
  </div>
   <div class="form-group">
    <label for="" >Password</label>
    <input type="password" class="form-control" v-model="user.password">
  </div>
  <button type="submit" class="btn btn-primary">Login</button><br>
    <router-link to="/fargotpassword">forgot password ?</router-link>

</form>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
        return {
          user:{
            email:'',
            password:''
          }
        }
    },
    methods:{
      userLogin(){
        firebase.auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
            .then(()=>{
                this.$router.push('/home')
            })
            .catch((error)=>{
                alert(error.message)
            })
      }
    }
}
</script>