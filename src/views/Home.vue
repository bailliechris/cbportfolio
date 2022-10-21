<template>
  <div class="home">
    <header>
      <h1>Who am I?</h1>
      <span id="change"></span>
    </header>

    <br />

    <section>
      <article class="text-area">
        <img class="intro-image" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621280578/portfolio/bee_jnwlxs.png" />
        <p class="bold">Hello!</p>
        <p>I love to code, amongst a raft of other hobbies and skills I like to develop whilst being a parent. In just the last year I have developed products for NBC Universal, Sky Group, Peacock, Sealed Air and Low6.  
        </p>
        <p>Technologies used for the above include multiple languages, frameworks and cloud providers. EG React, Vue, Angular, Lit with Typescript. C# and Node.JS Lambda Functions within AWS managing DynamoDB databases with AppSync and Gateway APIs, Integrating Salesforce and Marketing Cloud. </p>
      </article>
    </section>

    <div class="container">
      <p class="bold">Languages and Tools recently used:</p>
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/csharp_i9jdrd.jpg"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632353/portfolio/vue-logo_xokduz.png"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/nodejs-1-logo_hcrx64.png"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/ExpressJS-logo_rru70a.png"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632353/portfolio/react_ugdux2.png"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/MongoDB-logo_pktmb3.gif"  />
      <p class="bold">Languages and Tools previously used:</p>
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632353/portfolio/python_yi5auy.png"  />      
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/cplusplus_cfsg57.svg"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/laravel_b28my5.png"  />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {

  },  
  data() {
    return {

    };
  }
};
</script>

<style scoped>

.logo {
  height: 50px;
}

.intro-image {
  width: 33%;
  margin-left: 0.5em;
  float:right;
}

header {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 15em;
  background-color: black;
  border-radius: 0.5em;
}

header h1 {
  font-size: 4em;
  color: white;
  font-weight: bolder;
}

p.bold {
  font-weight: bolder;
}

#change {
  color:white;
}
#change:after {
  content:"";
  opacity: 0;
  animation: spin 20s linear infinite;
}
@keyframes spin {
  0% { content:"..."; opacity: 0;}
  6% { content:"Painter"; opacity: 1;}
  11% { content:"...";opacity: 0;}
  17% { content:"Husband"; opacity: 1;}
  23% { content:"..."; opacity: 0;}
  28% { content:"Father"; opacity: 1;}
  32% { content:"..."; opacity: 0;}
  38% { content:"Car Enthusiast"; opacity: 1;}
  45% { content:"..."; opacity: 0;}
  51% { content:"Photographer"; opacity: 1;}
  56% { content:"..."; opacity: 0;}
  61% { content:"Teacher"; opacity: 1;}
  67% { content:"..."; opacity: 0;}
  72% { content:"Learner"; opacity: 1;}
  78% { content:"..."; opacity: 0;}
  83% { content:"Mechanic"; opacity: 1;}
  88% { content:"...";opacity: 0; }
  100% { content:"Developer"; opacity: 1;}
}

img {
  opacity: 0.5;
  border-radius: 5px;
  transition: transform 1s;
}

img:hover {
  opacity: 1;
  transform: scale(1.1);
}

</style>
