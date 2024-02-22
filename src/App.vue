<script setup>

import { ref,onMounted } from 'vue';
import axios from 'axios'

let allData = ref([])
let paginations = ref([])
let showPerPage = 6
let currentPage = 1

onMounted(async ()=>{
  let response = await axios.get('https://dummyjson.com/products')
  allData.value = response.data.products
  paginations.value = response.data.products.slice(0,showPerPage)
})

const onClickHandler = (page)=>{
  paginations.value = allData.value.slice((page - 1) * showPerPage , showPerPage * page)
}

</script>

<template>
  <div class="flex flex-wrap justify-between gap-y-16 my-10 mx-10"> 


    <div v-for="post in paginations" :key="post.id" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" :src=post.thumbnail alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post.title }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

  </div>

  <div class="flex justify-center my-5">
  <vue-awesome-paginate
  :total-items="allData.length"
  v-model="currentPage"
  :items-per-page="showPerPage"
  :max-pages-shown="3"
  :on-click="onClickHandler"
/>
</div>
</template>

<style>
#componentContainer li{
  border: 1px solid #000 !important;
  padding: 10px 15px;
  font-size: 40px;
}
</style>

