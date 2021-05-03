<template>
    <div class="container">
        <form @submit.prevent='userRegistration'>
  <div class="form-group">
    <label for="exampleInputEmail1" >Name</label>
    <input type="text" class="form-control" v-model="user.name">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" v-model="user.email">
  </div>
   <div class="form-group">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="password" class="form-control" v-model="user.password">
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
</form>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
        return {
          user:{
            name:'',
            email:'',
            password:''
          }
        }
    },
    methods:{
      userRegistration(){
        firebase.auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.user.name
          }).then(()=>{
            this.$router.push('/login')
          })
          }).catch((error)=>{
            alert(error.message)
        })
      }
    }
}
</script>