<template>
    <q-page padding>
      <div v-if="loading" class="text-center">
        <q-spinner color="primary" size="3em" />
      </div>
      <div v-else-if="error" class="text-center text-negative">
        {{ error }}
      </div>
      <div v-else-if="template" class="template-details">
        <div class="row items-center q-mb-md">
          <q-btn icon="arrow_back" flat round dense @click="$router.back()" class="q-mr-sm" />
          <h1 class="text-h4 q-my-none">{{ template.title }}</h1>
        </div>
        <q-card class="template-card" :class="{ 'bg-dark': $q.dark.isActive }">
          <q-card-section>
            <div class="text-h6" :class="{ 'text-white': $q.dark.isActive }">Description</div>
            <p>{{ template.description }}</p>
            <div class="text-h6 q-mt-md" :class="{ 'text-white': $q.dark.isActive }">Tag</div>
            <p>{{ template.tag }}</p>
            <div class="text-h6 q-mt-md" :class="{ 'text-white': $q.dark.isActive }">Created At</div>
            <p>{{ new Date(template.created_at).toLocaleString() }}</p>
          </q-card-section>
        </q-card>
      </div>
      <div v-else class="text-center">
        Template not found
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useQuasar } from 'quasar'
  import { useTemplates } from '../controllers/templates'
  
  const $q = useQuasar()
  const route = useRoute()
  
  const { getTemplateById, loading, error } = useTemplates()
  const template = ref(null)
  
  onMounted(async () => {
    const templateId = route.params.id
    template.value = await getTemplateById(templateId)
  })
  </script>
  
  <style scoped>
  .template-details {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .template-card {
    margin-top: 20px;
  }
  </style>