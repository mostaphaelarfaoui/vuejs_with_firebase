<template>
<div class="container"><br>
     <div class="card">
        <h1>User info</h1>
        <div class="card-body">
            <h5 class="card-title">Name: {{user.displayName}}</h5>
            <p class="card-text">Email: {{user.email}}</p>
            <button type="submit" @click="logout()" class="btn btn-danger">Logout</button>
        </div>
    </div>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
    data() {
        return{
            user:''
        }
    },
    created(){
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                this.user = user
            }else{
                this.user = ''
            }
        })
    },
    methods:{
        logout(){
            firebase.auth().signout.then(()=>{
                firebase.auth().onAuthStateChanged(()=>{
                    this.$router.push('/login')
                })
            })
        }
    }
}
</script>

<style >
    .card{
        width: 18rem;
        margin-left: 40%;
        margin-top: 10%;
        }
        
</style>