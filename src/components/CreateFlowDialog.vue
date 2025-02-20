<template>
    <q-dialog 
      :model-value="isOpen" 
      @update:model-value="$emit('update:isOpen', $event)"
      persistent 
      class="create-flow-dialog"
    >
      <q-card class="dialog-card" :class="{ 'bg-dark': $q.dark.isActive }">
        <!-- Header -->
        <q-card-section class="dialog-header">
          <h2 class="text-h5 q-my-none">{{ flowTitle }}</h2>
          <q-btn flat round icon="close" v-close-popup />
        </q-card-section>
  
        <div class="dialog-content">
          <!-- Left Section - Form -->
          <div class="left-section" :class="{ 'border-dark': $q.dark.isActive }">
            <div class="form-section">
              <div class="input-group q-mb-lg">
                <label class="text-subtitle1 q-mb-sm block" :class="{ 'text-white': $q.dark.isActive }">Name</label>
                <q-input 
                  v-model="flowName" 
                  outlined 
                  dense
                  class="name-input"
                  :class="{ 'bg-dark': $q.dark.isActive }"
                />
              </div>
  
              <div class="input-group q-mb-lg">
                <label class="text-subtitle1 q-mb-sm block" :class="{ 'text-white': $q.dark.isActive }">Description</label>
                <q-input 
                  v-model="flowDescription" 
                  outlined 
                  dense
                  type="textarea"
                  class="description-input"
                  :class="{ 'bg-dark': $q.dark.isActive }"
                />
              </div>
  
              <div class="input-group">
                <label class="text-subtitle1 q-mb-sm block" :class="{ 'text-white': $q.dark.isActive }">Status</label>
                <q-select
                  v-model="flowStatus"
                  outlined
                  dense
                  :options="statusOptions"
                  class="status-select"
                  :class="{ 'bg-dark': $q.dark.isActive }"
                />
              </div>
            </div>
          </div>
  
          <!-- Right Section - Flow Diagram -->
          <div class="right-section">
            <div class="flow-diagram">
              <!-- Trigger Step -->
              <div class="flow-step trigger-step glow-card">
                <div class="step-content">
                  <div class="step-header">
                    <div class="step-icon green-icon">
                      <q-icon name="bolt" size="20px" class="text-white" />
                    </div>
                    <div class="step-title">Trigger</div>
                  </div>
                  <div class="step-description">
                    When someone <span class="text-weight-medium">Checkout Started</span>
                  </div>
                  <div class="flow-filters">
                    <div class="filter-icon">
                      <q-icon name="filter_list" size="16px" />
                    </div>
                    Flow Filters (1)
                  </div>
                </div>
              </div>
  
              <div class="flow-arrow"></div>
  
              <!-- Wait Step -->
              <div class="flow-step wait-step">
                <div class="step-content">
                  <div class="wait-header">
                    <div class="wait-icon">
                      <q-icon name="schedule" size="20px" />
                    </div>
                    <span>Wait 4 hours</span>
                    <q-btn flat round dense icon="more_horiz" class="wait-menu" />
                  </div>
                </div>
              </div>
  
              <div class="flow-arrow"></div>
  
              <!-- Email Step -->
              <div class="flow-step email-step glow-card">
                <div class="step-content">
                  <div class="step-header">
                    <div class="step-icon green-icon">
                      <q-icon name="bolt" size="20px" class="text-white" />
                    </div>
                    <div class="step-title">Abandoned Cart: Email 1</div>
                  </div>
                  <div class="step-description">
                    It looks like you left something behind...
                  </div>
                  <div class="flow-filters">
                    <div class="filter-icon">
                      <q-icon name="filter_list" size="16px" />
                    </div>
                    Flow Filters (1)
                  </div>
                </div>
              </div>
  
              <div class="flow-arrow"></div>
  
              <!-- Wait Step -->
              <div class="flow-step wait-step">
                <div class="step-content">
                  <div class="wait-header">
                    <div class="wait-icon">
                      <q-icon name="schedule" size="20px" />
                    </div>
                    <span>Wait 20 hours</span>
                    <q-btn flat round dense icon="more_horiz" class="wait-menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <q-card-actions align="right">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Create" color="primary" @click="createFlow" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </template>
  
  <script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:isOpen', 'flow-created'])

const flowTitle = ref('Create New Flow')
const flowName = ref('')
const flowDescription = ref('')
const flowStatus = ref('Draft')
const statusOptions = ['Draft', 'Active', 'Paused', 'Completed']

const createFlow = async () => {
  if (!flowName.value) {
    $q.notify({
      color: 'negative',
      message: 'Please enter a flow name'
    })
    return
  }

  const newFlow = {
    name: flowName.value,
    description: flowDescription.value,
    status: flowStatus.value,
    created_at: new Date().toISOString()
  }

  try {
    // Emit the event and wait for the flow to be created
    await emit('flow-created', newFlow)
    resetForm()
    emit('update:isOpen', false)
    
    $q.notify({
      color: 'positive',
      message: 'Flow created successfully'
    })
  } catch (error) {
    $q.notify({
      color: 'negative',
      message: `Error creating flow: ${error.message}`
    })
  }
}

const resetForm = () => {
  flowName.value = ''
  flowDescription.value = ''
  flowStatus.value = 'Draft'
}
</script>
  
  <style scoped>
  .dialog-card {
    width: 1200px;
    max-width: 90vw;
    max-height: 90vh;
    border-radius: 12px;
  }
  
  .dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    border-bottom: 1px solid #E5E7EB;
  }
  
  .dialog-content {
    display: flex;
    height: calc(90vh - 70px);
  }
  
  .left-section {
    width: 400px;
    border-right: 1px solid #E5E7EB;
    overflow-y: auto;
  }
  
  .form-section {
    padding: 24px;
  }
  
  .input-group label {
    color: #18181B;
    font-weight: 500;
  }
  
  .input-group p {
    color: #71717A;
  }
  
  .name-input :deep(.q-field__control),
  .tags-select :deep(.q-field__control) {
    background: white;
    border: 1px solid #E5E7EB;
    border-radius: 6px;
  }
  
  .right-section {
    flex: 1;
    overflow-y: auto;
    padding: 32px;
    background: #F9FAFB;
  }
  
  .flow-diagram {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .flow-step {
    margin-bottom: 32px;
  }
  
  .glow-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 24px;
    position: relative;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05),
                0 0 30px rgba(0, 0, 0, 0.1);
  }
  
  .wait-step {
    background: white;
    border-radius: 8px;
    padding: 12px 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .wait-header {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
  }
  
  .wait-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: #F4F4F5;
    border-radius: 8px;
  }
  
  .wait-menu {
    position: absolute;
    right: 0;
    color: #71717A;
  }
  
  .step-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }
  
  .step-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }
  
  .green-icon {
    background: #09C269;
  }
  
  .step-title {
    font-size: 16px;
    font-weight: 600;
    color: #18181B;
  }
  
  .step-description {
    font-size: 15px;
    color: #71717A;
    margin-bottom: 16px;
    padding-left: 52px;
  }
  
  .flow-filters {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #71717A;
    padding-left: 52px;
  }
  
  .filter-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: #F4F4F5;
    border-radius: 4px;
  }
  
  .flow-arrow {
    width: 2px;
    height: 32px;
    background: rgba(0, 0, 0, 0.2);
    margin: 8px auto;
    position: relative;
  }
  
  .flow-arrow::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    border-right: 2px solid rgba(0, 0, 0, 0.2);
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    transform: rotate(45deg);
  }
  
  /* Mobile Styles */
  @media (max-width: 768px) {
    .dialog-card {
      width: 100%;
      max-width: 100%;
      height: 100vh;
      max-height: 100vh;
      margin: 0;
      border-radius: 0;
    }
  
    .dialog-content {
      flex-direction: column;
      height: calc(100vh - 70px);
    }
  
    .left-section {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid #E5E7EB;
    }
  
    .form-section {
      padding: 16px;
    }
  
    .right-section {
      padding: 16px;
    }
  
    .flow-diagram {
      padding: 16px 0;
    }
  }
  </style>