<template>
    <div>
        <img class="imagem-responsiva" :src="url" :alt="title" />
        <p>{{ id }}</p>
    </div>
</template>

<script>

export default {
    props:['url', 'title', 'id'  ]
}

</script>

<style scoped> 
.imagem-responsiva {
    width: 100%;
  }
</style> 