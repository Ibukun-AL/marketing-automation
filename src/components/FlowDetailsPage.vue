<template>
    <q-page padding>
      <div v-if="loading" class="text-center">
        <q-spinner color="primary" size="3em" />
      </div>
      <div v-else-if="error" class="text-center text-negative">
        {{ error }}
      </div>
      <div v-else-if="flow" class="flow-details">
        <div class="row items-center q-mb-md">
          <q-btn icon="arrow_back" flat round dense @click="$router.back()" class="q-mr-sm" />
          <h1 class="text-h4 q-my-none">{{ flow.name }}</h1>
        </div>
        <q-card class="flow-card" :class="{ 'bg-dark': $q.dark.isActive }">
          <q-card-section>
            <div class="text-h6" :class="{ 'text-white': $q.dark.isActive }">Description</div>
            <p>{{ flow.description }}</p>
            <div class="text-h6 q-mt-md" :class="{ 'text-white': $q.dark.isActive }">Status</div>
            <p>{{ flow.status }}</p>
            <div class="text-h6 q-mt-md" :class="{ 'text-white': $q.dark.isActive }">Created At</div>
            <p>{{ formatDate(flow.created_at) }}</p>
            
            <!-- Add more flow details here -->
            <div class="row q-mt-lg">
              <q-btn 
                color="primary" 
                label="Edit Flow" 
                class="q-mr-sm"
                @click="editFlow"
              />
              <q-btn 
                color="negative" 
                label="Delete Flow" 
                @click="confirmDelete"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div v-else class="text-center q-pa-md">
        <div class="text-h6 text-grey-7">Flow not found</div>
        <q-btn 
          color="primary" 
          label="Back to Flows" 
          class="q-mt-md"
          @click="$router.push('/flows')"
        />
      </div>
  
      <!-- Delete Confirmation Dialog -->
      <q-dialog v-model="showDeleteDialog" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <span class="text-h6">Delete Flow</span>
          </q-card-section>
  
          <q-card-section>
            Are you sure you want to delete this flow? This action cannot be undone.
          </q-card-section>
  
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Delete" color="negative" @click="deleteFlow" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useQuasar } from 'quasar'
  import { useFlows } from '../controllers/create'
  
  const $q = useQuasar()
  const route = useRoute()
  const router = useRouter()
  const showDeleteDialog = ref(false)
  
  const { getFlowById, loading, error } = useFlows()
  const flow = ref(null)
  
  onMounted(async () => {
    const flowId = route.params.id
    const flowData = await getFlowById(flowId)
    if (flowData) {
      flow.value = flowData
    } else {
      $q.notify({
        color: 'negative',
        message: 'Flow not found'
      })
    }
  })
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString()
  }
  
  const editFlow = () => {
    // Implement edit functionality
    $q.notify({
      color: 'info',
      message: 'Edit functionality coming soon'
    })
  }
  
  const confirmDelete = () => {
    showDeleteDialog.value = true
  }
  
  const deleteFlow = async () => {
    try {
      // Implement delete functionality here
      $q.notify({
        color: 'positive',
        message: 'Flow deleted successfully'
      })
      router.push('/flows')
    } catch (err) {
      $q.notify({
        color: 'negative',
        message: 'Error deleting flow'
      })
    }
  }
  </script>
  
  <style scoped>
  .flow-details {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .flow-card {
    margin-top: 20px;
    border-radius: 12px;
  }
  
  .q-card {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  }
  </style>