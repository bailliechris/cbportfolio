<template>
    <div>
        <b-navbar>
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    Lemonsource
                </b-navbar-item>
            </template>
            <template #start>
                <b-navbar-item 
                    tag="router-link" 
                    :to="{path: '/projects'}">
                    Projects
                </b-navbar-item>
                <b-navbar-item 
                    tag="router-link" 
                    :to="{path: '/about'}">
                    About Me
                </b-navbar-item>
            </template>
        </b-navbar>
    </div>
</template>

<script>
export default {
 name: "TheNav",
 data() {
     return {

     }
    }  
}
</script>