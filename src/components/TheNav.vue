<template>
    <div>
        <b-navbar type="is-info">
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    CB
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
            <template #end>
                <b-navbar-item>
                    <a href="https://twitter.com/BaillieChris" target="_blank">
                        <twitter-icon fillColor="#ffee00"/> 
                    </a>
                </b-navbar-item>
                <b-navbar-item>
                    <a href="https://github.com/bailliechris" target="_blank">
                        <github-icon fillColor="#ffee00"/>
                    </a>
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